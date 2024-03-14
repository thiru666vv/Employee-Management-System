package com.employeemanagement.service;

import com.employeemanagement.model.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    Employee saveEmployee(Employee employee);

    Employee updateEmployee(Long id, Employee updatedEmployee);

    void deleteEmployee(Long id);
}
