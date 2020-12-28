import React from "react";

const InsideModalInvestor = props => {
  return (
    <div>
      <h4>Add Investment</h4>
      <p>Please enter details of investment</p>

      <form>
        <div>
          <select className="select-tag" as="select">
            <option>Select Company</option>
            {props.data.investment.map(({ company }) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input type="number" placeholder="Investment Amount" />
        </div>
      </form>

      <div className="button-holder">
        <button onClick={props.toggleModal}>Cancel</button>

        <button onClick={props.toggleModal}>Add Investment</button>
      </div>
    </div>
  );
};

export default InsideModalInvestor;
