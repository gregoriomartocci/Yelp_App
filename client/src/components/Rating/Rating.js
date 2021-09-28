import React from "react";
import "./Ratings.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Rating({ num }) {
  return (
    <div>
      <div>
        <span>
          <BsStarFill />
          <i>
            {num >= 1 ? <BsStarFill /> : num >= 0.5 ? <BsStarHalf /> : null}
          </i>
        </span>
        <span>
          <i>
            {num >= 2 ? <BsStarFill /> : num >= 1.5 ? <BsStarHalf /> : null}
          </i>
        </span>
        <span>
          <i>
            {num >= 3 ? <BsStarFill /> : num >= 2.5 ? <BsStarHalf /> : null}
          </i>
        </span>
        <span>
          <i>
            {num >= 4 ? <BsStarFill /> : num >= 3.5 ? <BsStarHalf /> : null}
          </i>
        </span>
        <span>
          <i>
            {num === 5 ? <BsStarFill /> : num === 4.5 ? <BsStarHalf /> : null}
          </i>
        </span>
      </div>
    </div>
  );
}

export default Rating;
