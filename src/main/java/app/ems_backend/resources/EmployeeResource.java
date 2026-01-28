package app.ems_backend.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.ems_backend.dto.EmployeeDTO;
import app.ems_backend.entities.Employee;
import app.ems_backend.services.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeResource {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public ResponseEntity<List<EmployeeDTO>> getEmployee(){
		List<Employee> employees = employeeService.getAllEmloyee();
		List<EmployeeDTO> listDto = convertDTO(employees);
		return ResponseEntity.ok().body(listDto);
	}
	
	@PostMapping
	public ResponseEntity<List<EmployeeDTO>> postEmployee(@RequestBody Employee obj){
		List<Employee> employees = employeeService.addEmployee(obj);
		List<EmployeeDTO> listDto = convertDTO(employees);
		return ResponseEntity.ok().body(listDto);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id, @RequestBody Employee obj){
		Employee employees = employeeService.updateEmployee(id, obj);
		EmployeeDTO empDto = new EmployeeDTO(employees);
		return ResponseEntity.ok().body(empDto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
		employeeService.deleteEmplooye(id);
		return ResponseEntity.noContent().build();
	}
	
	private List<EmployeeDTO> convertDTO(List<Employee> employees){
		List<EmployeeDTO> listDto = employees.stream().map( x -> new EmployeeDTO(x)).collect(Collectors.toList());
		return listDto;
	}
	
}
