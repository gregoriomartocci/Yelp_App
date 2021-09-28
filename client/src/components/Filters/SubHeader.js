import React from "react";
import Dropdown from "../Dropdown/Dropwdown";
import "./Style.css";
import { options } from "./Options";

function SubHeader({ filterBusiness }) {
  return (
    <div className="filter_container filter">
      <div className="filters">
        <Dropdown
          title="Restaurants"
          items={options.restaurants}
          filter
          filterBusiness={filterBusiness}
        />
        <Dropdown
          title="Home Services"
          items={options.home_services}
          filter
          filterBusiness={filterBusiness}
        />
        <Dropdown
          title="Auto Services"
          items={options.auto_services}
          filter
          filterBusiness={filterBusiness}
        />
        <Dropdown
          title="More"
          items={options.more}
          filter
          filterBusiness={filterBusiness}
        />
      </div>
    </div>
  );
}

export default SubHeader;
