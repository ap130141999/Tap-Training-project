import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import DynamicTable from "./pages/DynamicTable";
import HistoryPage from "./pages/HistoryPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path ="/table" component = {DynamicTable} />
        <Route exact path ="/historypage" component ={HistoryPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
