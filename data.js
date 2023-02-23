const form = document.getElementById('employee-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const dob = document.getElementById('dob').value;
	const address = document.getElementById('address').value;
	const department = document.getElementById('department').value;

	const employee = {
		name,
		email,
		dob,
		address,
		department
	};

	// Here, you can store the employee data in a database or send it to a server.

	alert('Employee registration successful!');
	form.reset();
    window.open(`employee_records.html?name=${name}&email=${email}&dob=${dob}&address=${address}&department=${department}`);
});

