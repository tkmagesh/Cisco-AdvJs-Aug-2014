window.addEventListener("DOMContentLoaded", init);
function init(){
	test("Should be able to add two numbers", function(){
		//Arrange
		var n1 = 10, 
			n2 = 20,
			expectedResult = 30;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});

	test("Should be able to add two numbers in string format", function(){
		//Arrange
		var n1 = "10", 
			n2 = "20",
			expectedResult = 30;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});
	test("Should treat non numeric strings as zero", function(){
		//Arrange
		var n1 = "10", 
			n2 = "abc",
			expectedResult = 10;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10;}, 
			f2 = function(){ return 20;},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10";}, 
			f2 = function(){ return "20";},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add only one value", function(){
		//Arrange
		var n1 = 10, 
			expectedResult = 10;

		//Act
		var result = add(n1);

		//Assert
		return expectedResult === result;
	});

	test("Should return zero when invoked with no arguments", function(){
		//Arrange
		var	expectedResult = 0;

		//Act
		var result = add();

		//Assert
		return expectedResult === result;
	});

	test("Should be able to add more than 2 numbers", function(){
		var expectedResult = 100;

		var result = add(10,20,30,40);

		return result === expectedResult;
	});

	test("Should be able to add functions returning functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return "10";}}, 
			f2 = function(){ return function(){ return "20";}},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add arrays of numbers", function(){
		//Arrange
		var nos1 = [10,20],
			nos2 = [30,40], 
			expectedResult = 100;

		//Act
		var result = add(nos1, nos2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add nested array of numbers", function(){
		//Arrange
		var nos = [10,[20,["30",[40]]]];
			expectedResult = 100;

		//Act
		var result = add(nos);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add array of functions returning functions returning array of numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return ["10","30"];}}, 
			f2 = function(){ return function(){ return ["20",40];}},
			expectedResult = 100;

		//Act
		var result = add([f1,f2]);

		//Assert
		return expectedResult === result;
	});
}