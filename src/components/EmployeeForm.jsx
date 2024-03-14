import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addEmployee, updateEmployee } from './EmployeeService';

const EmployeeForm = ({ employee, onSubmit }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (employee.id) {
        await updateEmployee(employee.id, formData);
      } else {
        await addEmployee(formData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>{employee.id ? 'Edit Employee' : 'Add Employee'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="designation">
          <Form.Label>Designation:</Form.Label>
          <Form.Control type="text" name="designation" value={formData.designation} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="salary">
          <Form.Label>Salary:</Form.Label>
          <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeForm;
