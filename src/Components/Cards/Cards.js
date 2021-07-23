import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

function Cards({ businesses }) {

  return (
    <div className="cards-container">
      {businesses &&
        businesses.length &&
        businesses.map((b) => <Card key={b.id} b={b} />)}
    </div>
  );
}

export default Cards;
