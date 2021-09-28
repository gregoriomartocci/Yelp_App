import React, { useState } from "react";
import "./Dropdown.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useReactRouter from "use-react-router";

function Dropdown({
  title,
  items,
  multiselect,
  selection,
  setSelection,
  filter,
  filterBusiness,
}) {
  const { history } = useReactRouter();
  const [open, setOpen] = useState(false);
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const locationParam = params.get("location");
  const sort = params.get("sort_by");

  const toggle = () => setOpen(!open);

  // Select Dropdown

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  // Link Dropdown

  const link = (item) => {
    const term = item.name.toLowerCase();
    const encondedTerm = encodeURI(term);
    const encondedLocation = encodeURI(locationParam);
    const encondedSort = encodeURI(sort);

    console.log("que pasa con sort", encondedSort, sort);

    history.push(
      `/search?term=${encondedTerm}&location=${encondedLocation}&sort_by=${encondedSort}`
    );
    filterBusiness({ term, location: locationParam, sort_by: sort });
  };

  const isItemSelected = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <>
      {!filter ? (
        <div
          className={`dropdown-wrapper ${filter ? `filter underline` : `sort`}`}
        >
          <div
            tabIndex={0}
            className="dropdown-header"
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
          >
            <div className="dropdown-header">
              <span className="dropdown-header-title">{title}</span>
              <div className="dropdown-header-icon">
                {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
          </div>
          {open && (
            <ul className="dropdown-list">
              {items.map((item) => (
                <li className="dropdown-list-item" key={item.id}>
                  <button
                    type="button"
                    className="dropdown-list-button"
                    onClick={() => handleOnClick(item)}
                  >
                    <span className="dropdown-item-icon">
                      {isItemSelected(item) ? (
                        <ImCheckboxChecked className="checked" />
                      ) : (
                        <ImCheckboxUnchecked className="unchecked" />
                      )}
                    </span>
                    <span className="dropdown-item-name">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div
          className={`dropdown-wrapper ${filter ? `filter underline` : `sort`}`}
        >
          <div className="dropdown-header" onClick={() => toggle(!open)}>
            <div className="dropdown-header">
              <span className="dropdown-header-title">{title}</span>
              <div className="dropdown-header-icon">
                {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
          </div>
          {open && (
            <ul className="dropdown-list">
              {items.map((item) => (
                <li className="dropdown-list-item" key={item.id}>
                  <button
                    type="button"
                    className="dropdown-list-button"
                    onClick={() => link(item)}
                  >
                    <span className="dropdown-item-name">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Dropdown;
