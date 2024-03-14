const API_URL = 'http://localhost:8080/api/employees'; // Update with your backend API URL

export const getAllEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return await response.json();
};

export const addEmployee = async (employeeData) => {
  const response = await fetch(`${API_URL}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeData),
  });
  if (!response.ok) {
    throw new Error('Failed to add employee');
  }
  return await response.json();
};

export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeData),
  });
  if (!response.ok) {
    throw new Error('Failed to update employee');
  }
  return await response.json();
};

export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/employees/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
};
