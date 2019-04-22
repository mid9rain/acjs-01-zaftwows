// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]

function fizzBuzz(input) {
  // 把你的解答寫在這裡。要記得 return 喔。
  
  var number = ""
  for (var i = 1 ; i <= input; i++){
    if(!(i%15)){
      number+='FizzBuzz';
    }else if (!(i%3)){
      number+='Fizz';
    }else if (!(i%5)){
      number+='Buzz';
    }else{
      number+=i;
    }
    if(i < input){
      number += ' ';
    }
    
  }
  console.log(number)
  return number;
}

module.exports = {fizzBuzz};
