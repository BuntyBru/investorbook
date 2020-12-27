import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  faAngleLeft,
  faPencilAlt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import NumberFormat from "react-number-format";

const DetailsPage = props => {
  const GET_INVESTOR_DETAILS = gql`
    query GetInvestorDetails($investor_id: Int!) {
      investment(where: { investor_id: { _eq: $investor_id } }) {
        company_id
        investor_id
        amount
        company {
          id
          name
        }
        investor {
          name
          photo_large
        }
      }
    }
  `;

  const investorId = props.id;
  const details = useQuery(GET_INVESTOR_DETAILS, {
    variables: { investor_id: investorId }
  });
  if (details.loading) return <p>Loading...</p>;
  if (details.error) return <p>Error :( {details.error.message}</p>;
  if (details.data.investment.length === 0)
    return <p>The database is empty!</p>;

  const name = details.data.investment[0].investor.name;
  const avatar = details.data.investment[0].investor.photo_large;
  let totalAmount = 0;

  const totalInvestment = () => {
    details.data.investment.forEach(({ amount }) => {
      totalAmount = totalAmount + amount;
    });
    return (
      <p className="tai">
        Total Amount Invested:{" "}
        <span>
          <NumberFormat
            value={totalAmount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </span>
      </p>
    );
  };

  return (
    <div className="details-body">
      <div className="db-part-one">
        <div className="dbpo-one">
          <Link to="/" className="link-tags go-back">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <div className="avatar-parent">
            <img alt={name} src={avatar} />
            <div className="avatar-details">
              <p>{name}</p>
              {totalInvestment()}
            </div>
          </div>
        </div>

        <div className="dbpo-two">
          <div>
            <FontAwesomeIcon icon={faPencilAlt} />
            <p>Edit Name</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTrashAlt} />
            <p>Remove Company</p>
          </div>
        </div>
      </div>

      <div className="db-part-two">
        <p>Investments</p>
        <p>+Add Investments</p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.data.investment.map(({ amount, company }) => (
              <tr key={amount}>
                <td>{company.name}</td>
                <td>
                  <NumberFormat
                    value={amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    className="action-pencil"
                    icon={faPencilAlt}
                  />
                  <FontAwesomeIcon className="action-trash" icon={faTrashAlt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
