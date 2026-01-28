package app.ems_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.ems_backend.entities.Employee;
import app.ems_backend.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmloyee(){
		return employeeRepository.findAll();
	}
	
	public List<Employee> addEmployee(Employee obj){
		employeeRepository.save(obj);
		return getAllEmloyee();
	}
	
	public Employee updateEmployee(Long id, Employee obj){
		if(!employeeRepository.existsById(id)) {
			throw new RuntimeException();
		}
		
		try {
			Employee update = employeeRepository.getReferenceById(id);
			updateEmployee(update, obj);
			return employeeRepository.save(update);
		} catch(RuntimeException e){
			throw e;
		}
	}
	
	public void deleteEmplooye(Long id) {
		if(!employeeRepository.existsById(id)) {
			throw new RuntimeException();
		}
		
		employeeRepository.deleteById(id);
		
	}
	
	

	private void updateEmployee(Employee update, Employee obj) {

		update.setEmail(obj.getEmail());
		update.setFirstName(obj.getFirstName());
		update.setLastName(obj.getLastName());
		
	}

}
