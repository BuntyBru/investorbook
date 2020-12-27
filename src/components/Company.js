import React, { useState } from "react";
import Table from "./Table";
import { useQuery, gql } from "@apollo/client";

const Company = props => {
  const [limit, setLimit] = useState(6);

  const GET_COMPANIES = gql`
query GetCompanies {
    company(limit:${limit}) {
        id
        name
    }
}
`;

  const { loading, error, data } = useQuery(GET_COMPANIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data.company.length === 0) return <p>The database is empty!</p>;

  return (
    <div className="data-table-parent">
      <div className="dtp-heading">
        <p>Companies</p>
        <div className="btn-holder">
          <button>Add Companies</button>
        </div>

        <div className="search">Search</div>
      </div>
      <Table data={data.company} type="Company" />
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

export default Company;
