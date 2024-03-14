import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { getAllEmployees } from './components/EmployeeService';

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Employee Management System</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Employee List</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <EmployeeList employees={employees} />
          )}
        </div>
        <div className="col-md-6">
          <h2>Add Employee</h2>
          <EmployeeForm fetchEmployees={fetchEmployees} />
        </div>
      </div>
    </div>
  );
}

export default App;
