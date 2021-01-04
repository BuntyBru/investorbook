import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Table from "./Table";
//import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import SearchComponent from "./Search";

// Example of a component that uses apollo-client to fetch data.

const Investors = props => {
  const [limit, setLimit] = useState(10);
  const [input, setInput] = useState("");

  const GET_INVESTORS = gql`
query GetInvestors {
    investor(limit: ${limit}) {
        id
        name
        photo_thumbnail
    }
}
`;
  let [dataInvestor, setDataInvestor] = useState([]);
  const { loading, error, data } = useQuery(GET_INVESTORS);

  useEffect(() => {
    if (data && data.investor) {
      setDataInvestor(data.investor);
    }
  }, [data]);

  const mainFunc = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (dataInvestor.length === 0) return <p>The database is empty!</p>;

    return (
      <div>
        <Table data={dataInvestor} type="Investor" />
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

  const updateInput = async input => {
    if (input.trim().length === 0) {
      setDataInvestor(data.investor);
      setInput("");
    } else {
      const filtered = dataInvestor.filter(x => {
        return x.name.toLowerCase().includes(input.toLowerCase());
      });
      setDataInvestor(filtered);
      setInput(input);
    }
  };

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
          <SearchComponent input={input} onChange={updateInput} />
        </div>
      </div>
      {mainFunc()}
    </div>
  );
};

export default Investors;
