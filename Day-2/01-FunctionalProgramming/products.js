var products = [
	{id :7, name :"pen", cost :90, units :40, category : 1},
	{id :3, name :"hen", cost :30, units :20, category : 2},
	{id :9, name :"ten", cost :50, units :70, category : 2},
	{id :5, name :"den", cost :20, units :10, category : 1},
	{id :2, name :"len", cost :70, units :60, category : 1},
	{id :6, name :"zen", cost :80, units :30, category : 2}
]

console.log("Initial list..")
console.table(products);

var sort = function(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (left.id > right.id){
				list[i] = list[j];
				list[j] = left;
			}
		}
}
console.log("After sorting by id");
sort(products);
console.table(products);

var sort = function(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (left[attrName] > right[attrName]){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

console.log("After sorting by cost");
sort(products,"cost");
console.table(products);

var sort = function(list,comparatorFn){
	list = list || [];
	comparatorFn = comparatorFn || function(){};
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (comparatorFn(left,right) > 0){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

var productValueComparator = function(p1,p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;

	if (p1Value > p2Value) return 1;
	if (p1Value < p2Value) return -1;
	return 0;
}

console.log("After sorting by value [units * cost]");
sort(products);
console.table(products);

var sort = function(list,comparer1, comparer2){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			var result1 = comparer1(left,right);
			if (result1 > 0){
				list[i] = list[j];
				list[j] = left;
			}
			if (result1 === 0){
				var result2 = comparer2(left,right);
				if (result2 > 0){
					list[i] = list[j];
					list[j] = left;		
				}
			}
		}
}

console.log("After sorting by category & cost");
var categoryComparer = function(p1,p2){
	return p1.category - p2.category;
}
var costComparer = function (p1,p2){
	return p1.cost - p2.cost;
}
sort(products,categoryComparer, costComparer);
console.table(products);