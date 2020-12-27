import React, { useState } from "react";
//import SideDesc from './sideDesc';
import { useQuery, gql } from "@apollo/client";
import Table from "./Table";

// Example of a component that uses apollo-client to fetch data.

const Investors = props => {
  const [limit, setLimit] = useState(6);
  const GET_INVESTORS = gql`
query GetInvestors {
    investor(limit: ${limit}) {
        id
        name
    }
}
`;
  const { loading, error, data } = useQuery(GET_INVESTORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.investor.length === 0) return <p>The database is empty!</p>;

  return (
    <div className="data-table-parent">
      <div className="dtp-heading">
        <div className="name-btn">
          <p>Investors</p>
          <div className="btn-holder">
            <button>Add Investor</button>
          </div>
        </div>

        <div className="search">Search</div>
      </div>
      <Table data={data.investor} type="Investor" />
      <div style={{ color: "black" }}>
        <div></div>
        <div>
          Rows Per Page :{" "}
          <select
            style={{ border: "0" }}
            onChange={evt => setLimit(evt.target.value)}
          >
            <option value={limit} hidden>
              {limit}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>{" "}
        </div>
        <p>1-{limit} of 100 </p>
      </div>
    </div>
  );
};

export default Investors;
