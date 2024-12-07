function fibonacci(num) {
// your code here
	let arr = []
	let j = 0;
	let k = 1
	for(let i=1; i<num+1; i=k){
		let sum = i+j
		arr.push(sum)
		j=i;
		k=sum
		if(num==sum){
			break;
		}
	}
	return arr.indexOf(num)
}
module.exports = fibonacci;
