import React from "react";
import SideDesc from "./sideDesc";
import InvestorData from "./InvestorData";
import { Link } from "@reach/router";

const Table = props => {
  return (
    <div>
      <div className="table-headings">
        <p>Name</p>
        <p> {props.type === "Investor" ? "Investments" : "Investors"} </p>
      </div>
      <div className="table-main">
        {props.data.map(({ id, name, photo_thumbnail }) => {
          if (props.type === "Investor") {
            return (
              <Link
                to={`/investor-details/${id}`}
                key={id}
                className="link-tags"
              >
                <div className="table-entry">
                  <div className="entry-l">
                    <img alt={name} src={photo_thumbnail} />
                    <p>{name}</p>
                  </div>
                  <div className="entry-r">
                    <InvestorData id={id} />
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <div key={name} className="table-entry">
                <div className="entry-l">
                  <p>{name}</p>
                </div>
                <div className="entry-r">
                  <SideDesc id={id} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Table;
