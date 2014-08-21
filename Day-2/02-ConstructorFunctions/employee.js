function Employee(id,name,salary){
   if (this.constructor !== arguments.callee)
       return new Employee(id,name,salary);
   this.id = id;
   this.name = name;
   this.salary = salary;
}

/*Modify the above constructor function to hide the data members (this.id, this.name, this.salary) and expose accessor methods that can perform the following validations

	1. id cannot be <= 0
	2. name cannot be assigned an empty string
	3. salary cannot be less than the previous salary
*/

function Employee(id,name,salary){
   if (this.constructor !== Employee)
       return new Employee(id,name,salary);
   var _id = 0,
   		_name = "",
   		_salary = 0;

   	this.id = function(){
   		if (arguments.length === 0 ) return _id;
   		if (arguments[0] > 0) _id = id;
   	};

   	this.name = function(){
   		if (arguments.length === 0 ) return _name;
   		if (arguments[0] !== "") _name = name;
   	};
   	this.salary = function(){
   		if (arguments.length === 0 ) return _salary;
   		if (arguments[0] > 0) _salary = salary;
   	}
   	this.id(id);
   	this.name(name);
   	this.salary(salary);
}