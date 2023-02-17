import React, { Fragment } from "react";
import Header from "./components/header";
import './css/style.css';
import Content from "./components/content";
import Footer from "./components/footer";


function App() {
  return (
    <Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </Fragment>
  );
}

export default App;
