function sumPrimes(num) {
  let stack = [];
  let i;
  let j;
  let primes = [];

  for(let i=2; i<=num; ++i){
    if(!stack[i]){
      primes.push(i);
      for(j = i << 1; j <= num; j+=i){
        stack[j] = true;
      }
    }
  }
  let sum = 0;
  for(let i=0; i<primes.length; i++){
    sum += primes[i]
  }
  return sum;
}

sumPrimes(10);