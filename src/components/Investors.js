import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Table from "./Table";
//import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Example of a component that uses apollo-client to fetch data.

const Investors = props => {
  const [limit, setLimit] = useState(5);
  const GET_INVESTORS = gql`
query GetInvestors {
    investor(limit: ${limit}) {
        id
        name
        photo_thumbnail
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

        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <Table data={data.investor} type="Investor" />
      <div className="bottom-pager">
        <div>
          <label htmlFor="limit">Rows per page</label>
          <select
            style={{ border: "0" }}
            onChange={evt => setLimit(evt.target.value)}
          >
            <option value={limit} hidden>
              {limit}
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>{" "}
        </div>
        <p>1-{limit} of 100 </p>
      </div>
    </div>
  );
};

export default Investors;
