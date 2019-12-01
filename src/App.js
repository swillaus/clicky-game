import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
