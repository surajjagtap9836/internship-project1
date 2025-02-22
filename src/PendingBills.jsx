import './PendingBills.css'; 
export default function PendingBills() {
    const pendingBills = [
      {
        propertyName: "Sunset Apartments",
        customerName: "prashant holam ",
        amount: 1200,
        rent: 1000,
        deposit: 200,
      },
      {
        propertyName: "Sancheti apartment",
        customerName: "Gaurav holam",
        amount: 1500,
        rent: 1200,
        deposit: 300,
      },
      {
        propertyName: "Nyati",
        customerName: "akash holam",
        amount: 1800,
        rent: 1500,
        deposit: 300,
      },
    ];
  
    return (
        <div className="table-container">
        <h2 className="table-title">Pending Bills</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Property Name</th>
                <th>Customer Name</th>
                <th>Total Amount</th>
                <th>Rent</th>
                <th>Deposit</th>
              </tr>
            </thead>
            <tbody>
              {pendingBills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.propertyName}</td>
                  <td>{bill.customerName}</td>
                  <td>${bill.amount}</td>
                  <td>${bill.rent}</td>
                  <td>${bill.deposit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
  }
  