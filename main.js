let array = [5,7,15,9,21,35,37,55,90,23]
let findPrime = (a=>{
  let m =[];
  for(i=0; i<a.length; i++){
    isPrime = true;
    for(j=2; j<a[i]; j++){
      if(a[i]%j == 0) isPrime = false;
    }
      if(isPrime) m.push(a[i])
    }
    console.log(m);
  })(array)