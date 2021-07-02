const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();

const dbName = "credit_guardians";
const collectionName = "enum_config";
const app = express();
let client = null;

//MongoDB api call to GET all data from the collections
const findAllEnums = async (req, res) => {
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({}).toArray();
  res.send(JSON.stringify(response));
};

//MongoDB api call to Create all data from the collections
const insertEnums = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.insertOne({
    enumId: enumId,
    optionValues,
  });

  res.send(JSON.stringify(response.result));
};

//MongoDB api call to UPDATE all data from the collections
const updateEnum = async (req, res) => {
  const { enumId, optionValues } = req.body;
  const { label, value } = optionValues;
  const collection = client.db(dbName).collection(collectionName);
  const response = await collection.find({ enumId });
  let dbResponse = {};
  if (response) {
    dbResponse = await collection.updateOne(
      { enumId },
      { $push: { optionValues: { $each: optionValues } } }
    );
    res.send(JSON.stringify(dbResponse.result));
  }
};

const connectToDatabase = async () => {
  client = await MongoClient.connect(process.env.MO_URI);
  console.log("Connected to the database");
};

// API FOR FORM SUBMISSION AND HISTORY PAGE
//GET all the details to history page
const findAllDetails = async (req, res) => {
  const collection = client.db("customer_details").collection("form_details");
  const response = await collection.find({}).toArray();
  res.send(JSON.stringify(response));
};

// delete the full enum object
const deleteEnum = async (req, res) => {
  const { enumId = "" } = req.params;
  const collection = client.db(dbName).collection(collectionName);
  

    let dbResponse = await collection.deleteOne({ enumId });
      res.status(200).json({ message: `Deleted enumId ${enumId}`});
    
}
// PUT all the details to Database
const insertData = async (req, res) => {
  const {
    firstname,
    lastname,
    middlename,
    phone,
    country,
    loan,
    gender,
    marital,
    education,
    loanType,
    employment,
    account,
    aadhar,
  } = req.body;
  const collection = client.db("details_db").collection("details");
  const data = {
    firstname: firstname,
    lastname: lastname,
    middlename: middlename,
    phone: phone,
    country: country,
    loan: loan,
    gender: gender,
    marital: marital,
    education: education,
    employment: employment,
    loanType: loanType,
    account: account,
    aadhar: aadhar,
  };

  const response = await collection.insertOne(data);
  res.send(JSON.stringify(response.result));
};

connectToDatabase();

module.exports = {
  findAllEnums,
  connectToDatabase,
  insertEnums,
  updateEnum,
  findAllDetails,
  insertData,
  deleteEnum
};
