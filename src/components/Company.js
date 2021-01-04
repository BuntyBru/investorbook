import React, { useState, useEffect } from "react";
import Table from "./Table";
import { useQuery, gql } from "@apollo/client";
import SearchComponent from "./Search";

const Company = props => {
  const [limit, setLimit] = useState(5);
  const [input, setInput] = useState("");

  const GET_COMPANIES = gql`
query GetCompanies {
    company(limit:${limit}) {
        id
        name
    }
}
`;
  let [dataCompany, setDataCompany] = useState([]);
  const { loading, error, data } = useQuery(GET_COMPANIES);

  useEffect(() => {
    if (data && data.company) {
      setDataCompany(data.company);
    }
  }, [data]);
  const mainFunc = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (dataCompany.length === 0) return <p>The database is empty!</p>;

    return (
      <div>
        <Table data={dataCompany} type="Company" />
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
      setDataCompany(data.company);
      setInput("");
    } else {
      const filtered = dataCompany.filter(x => {
        return x.name.toLowerCase().includes(input.toLowerCase());
      });
      setDataCompany(filtered);
      setInput(input);
    }
  };

  return (
    <div className="data-table-parent">
      <div className="dtp-heading">
        <p>Companies</p>
        <div className="btn-holder">
          <button>Add Companies</button>
        </div>

        <div className="search">
          <SearchComponent input={input} onChange={updateInput} />
        </div>
      </div>
      {mainFunc()}
    </div>
  );
};

export default Company;
