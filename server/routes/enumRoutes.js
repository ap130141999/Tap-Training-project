const express = require("express");
const router = express.Router();

const controller = require("../Controllers/enumController");
// Route for DropDown
router.get("/get", controller.findAllEnums);
router.post("/create", controller.insertEnums);
router.put("/update", controller.updateEnum);
router.delete("/delete",controller.deleteEnum);

//Route for Form
router.get("/getDetails", controller.findAllDetails);
router.post("/addDetails", controller.insertData);

module.exports = router;
