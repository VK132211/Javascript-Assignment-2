function prime(a, b) {
  for (let i = a; i <= b; i++) {
    if (isprime(i)) {
      console.log(fact(i));
    }
  }
}
function isprime(c) {
 let count=0;
 for(let i=1;i<=c;i++){
  if(c%i==0){
    count++;
  }
 }
 return count==2?1:0
}
function fact(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(prime(1, 100));
