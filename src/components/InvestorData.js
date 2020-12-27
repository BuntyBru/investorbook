import React from "react";
import { useQuery, gql } from "@apollo/client";
const GET_COMPANIES_FROM_ID = gql`
  query GetCompanies($investor_id: Int!) {
    investment(where: { investor_id: { _eq: $investor_id } }) {
      company_id
      investor_id
      company {
        id
        name
      }
    }
  }
`;
const InvestorData = props => {
  const companyNames = useQuery(GET_COMPANIES_FROM_ID, {
    variables: { investor_id: props.id }
  });
  if (companyNames.loading) return <p>Loading...</p>;
  if (companyNames.error) return <p>Error :( {companyNames.error.message}</p>;
  if (companyNames.data.investment.length === 0)
    return <p>The database is empty!</p>;

  return (
    <>
      {companyNames.data.investment.map(({ company_id, company }) => (
        <span key={company_id}>{company.name}, &nbsp;</span>
      ))}
    </>
  );
};

export default InvestorData;
