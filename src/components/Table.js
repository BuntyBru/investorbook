import React from "react";
import SideDesc from "./sideDesc";
import InvestorData from "./InvestorData";

const Table = props => {
  return (
    <div>
      <div className="table-headings">
        <p>Name</p>
        <p> {props.type === "Investor" ? "Investments" : "Investors"} </p>
      </div>
      <div className="table-main">
        {props.data.map(({ id, name, photo_thumbnail }) => (
          <div className="table-entry" key={id}>
            <div className="entry-l">
              {props.type === "Investor" ? (
                <img alt={name} src={photo_thumbnail} />
              ) : (
                ""
              )}
              <p>{name}</p>
            </div>
            <div className="entry-r">
              {props.type === "Investor" ? (
                <InvestorData id={id} />
              ) : (
                <SideDesc id={id} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
