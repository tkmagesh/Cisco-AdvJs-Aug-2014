Write a function that will check if the given number is a prime number or not.


isPrime(10000)
isPrime(10000)

function getPrimeFinder(){
	var cache = {};
	function verifyPrime(no){
		if (no <= 3) return true;
		for(var i=2;i<=(no/2);i++)
			if (no % i === 0) return false;
		return true;
	}
	function isPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("From cache...");
			return cache[n];
		}
		cache[n] = verifyPrime(n);
		console.log("Juz processed...");
		return cache[n];
	}
	return isPrime;
}

function memorize(fn){
	var cache = {};
	return function(){
		var key = window.JSON.stringify(arguments);
		if (typeof cache[key] !== "undefined"){
			console.log("From cache");
			return cache[key];
		}
		console.log("Juz processed...");
		var result = fn.apply(this,[].slice.call(arguments));
		cache[key] = result;
		return result;
	}
}

function verifyPrime(no){
		if (no <= 3) return true;
		for(var i=2;i<=(no/2);i++)
			if (no % i === 0) return false;
		return true;
	}

var memorizedPrimeChecker = memorize(verifyPrime);
