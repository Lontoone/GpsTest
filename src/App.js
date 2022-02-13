import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import "./App.css";
import { Fragment } from "react";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Main />
      {/*
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Main/>}>
          </Route>
        </Routes>
      </Fragment>
    </Router>
    */}
    </>
  );
}

export default App;
