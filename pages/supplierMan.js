import { useState, useEffect } from "react";

const ViewSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch("/api/suppliers");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Error fetching suppliers");
        }

        setSuppliers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSuppliers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Suppliers</h1>
      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td>{supplier.supplierName}</td>
              <td>{supplier.address}</td>
              <td>{supplier.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSuppliers;
