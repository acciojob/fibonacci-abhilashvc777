 function fibonacci(num){
// your code here
	let j = 0; //i=1,j=0,k=1--i=2,sum=1,j=1,k=1---i=3,sum=2,j=1,k=2,---i=4,sum=3,j=2,k=3--i=5,sum=5,j=3,k=5--i=6,sum=8,j=5,k=8
	let k = 1;
	for(let i=2; i<=num; i++){
        let sum;
        sum=j+k
        j = k
        k = sum
        // console.log(sum)
        // console.log(k)
	}
	return j
}
module.exports = fibonacci;
