package app.ems_backend.resources;

import java.time.temporal.Temporal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.ems_backend.entities.Employee;
import app.ems_backend.services.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeResource {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public ResponseEntity<List<Employee>> getEmployee(){
		List<Employee> employees = employeeService.getAllEmloyee();
		return ResponseEntity.ok().body(employees);
	}
	
	@PostMapping
	public ResponseEntity<List<Employee>> postEmployee(@RequestBody Employee obj){
		List<Employee> employees = employeeService.addEmployee(obj);
		return ResponseEntity.ok().body(employees);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee obj){
		Employee employees = employeeService.updateEmployee(id, obj);
		return ResponseEntity.ok().body(employees);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
		employeeService.deleteEmplooye(id);
		return ResponseEntity.noContent().build();
	}
	
}
