function findLargest(a, b, c) {
  //your code here
	let largest=a;
	if(b>a){
		largest=b;
	}else if(c>a) {
		largest=c;
	}
	return largest;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
