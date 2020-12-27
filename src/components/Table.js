import React from "react";
import SideDesc from "./sideDesc";

const Table = props => {
  return (
    <div>
      <p>Name</p>
      <p> {props.type === "Investor" ? "Investments" : "Investors"} </p>
      <div className="table-main">
        {props.data.map(({ id, name }) => (
          <div key={id}>
            <div>
              <p>
                {id} {name}
              </p>
              <SideDesc id={id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
