import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import "./App.css";
import { Fragment } from "react";
import Main from "./pages/Main";
import NewMain from "./pages/NewMain";

function App() {
  return (
    <>
      <NewMain />
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
