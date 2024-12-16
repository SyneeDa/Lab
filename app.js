

let array50 = [25, 5, 16, 4];
function divisibleBy5(array){
  let getDivisibleBy5 = [];
  let getNotDivisibleBy5 = [];
  for(i = 0; i< array.length; i++){
    if(array[i] % 5 === 0){
      getDivisibleBy5.push(array[i])
    }else{
      getNotDivisibleBy5.push(array[i])
    }
  }
return `${getDivisibleBy5} are divisible by 5 but ${getNotDivisibleBy5} are not`
}


