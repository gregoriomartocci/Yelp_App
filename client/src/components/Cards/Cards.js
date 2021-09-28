import React, { useEffect } from "react";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import "./Cards.css";

function Cards({ data }) {
  useEffect(() => {
    return () => {};
  }, []);

  if (!data || !data.length) {
    return <Spinner />;
  }

  return (
    <div className="cards-container">
      {data.map((b) => (
        <Card key={b.id} b={b} />
      ))}
    </div>
  );
}

export default Cards;
