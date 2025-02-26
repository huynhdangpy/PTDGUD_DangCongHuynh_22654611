import { useState } from "react";

function InvestmentForm() {
  const [invest, setInvest] = useState("");
  const [rate, setRate]   = useState("");
  const [goal, setGoal] = useState("");
  const [results, setResults] = useState([]);

  const calculateInvestment = () => {
    let year = new Date().getFullYear(); 
    let currentAmount = parseFloat(invest);
    let interestRate = parseFloat(rate) / 100;
    let target = parseFloat(goal);

    if (isNaN(currentAmount) || isNaN(interestRate) || isNaN(target)) {
      alert("Vui lòng nhập số hợp lệ!");
      return;
    }

    let tempResults = [];
    while (currentAmount < target) {
      tempResults.push({
        year,
        invest: parseFloat(invest).toFixed(2), 
        rate: (interestRate * 100).toFixed(2) + "%", 
        amount: currentAmount.toFixed(2), 
      });

      year++; 
      currentAmount += currentAmount * interestRate; 
    }

    setResults(tempResults);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateInvestment();
        }}
      >
        <label htmlFor="invest">Invest:</label>
        <input
          type="text"
          id="invest"
          value={invest}
          onChange={(e) => setInvest(e.target.value)}
        />
        <br />

        <label htmlFor="rate">Rate :</label>
        <input
          type="text"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <br />

        <label htmlFor="goal">Goal :</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <br />

        <button type="submit" style={{ border: "1px solid black", padding: "5px 10px" }}>
          Click
        </button>
      </form>

      {results.length > 0 && (
        <table border="1" style={{ marginTop: "10px", width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest </th>
              <th>Rate </th>
              <th>Result </th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.invest}</td>
                <td>{row.rate}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InvestmentForm;
