import React from "react";
import Rating from "../Rating/Rating";
import "./Card.css";

function Card({ b }) {
  const tags = b.categories.map((category) => (
    <span key={b.id + category.title}>{category.title} </span>
  ));

  const addressLines = b.location.display_address.map((a) => (
    <p key={b.id + a}> {a}</p>
  ));

  return (
    <div className="card">
      <div>
        <img className="img" src={b.image_url} alt=""></img>
      </div>

      <div className="card-info">
        <span className="title">{b.name}</span>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        ${b.price}
        {tags}
        <Rating num={b.rating} />
      </div>

      <div>
        <p>{b.phone}</p>
        {addressLines}
      </div>
    </div>
  );
}

export default Card;
