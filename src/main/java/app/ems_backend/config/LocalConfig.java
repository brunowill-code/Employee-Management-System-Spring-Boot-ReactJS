package app.ems_backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import app.ems_backend.entities.Employee;
import app.ems_backend.repositories.EmployeeRepository;

@Configuration
@Profile("local")
public class LocalConfig implements CommandLineRunner{

	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public void run(String... args) throws Exception {

		Employee e1 = new Employee(null, "Lucas", "Silva", "lucas@gmail.com");
		Employee e2 = new Employee(null, "Carlos", "Miranda", "carlos@gmail.com");
		Employee e3 = new Employee(null, "Maria", "Silva", "maria@gmail.com");

		employeeRepository.saveAll(Arrays.asList(e1,e2,e3));
		
	}

}
