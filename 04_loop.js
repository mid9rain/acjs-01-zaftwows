// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
var numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  for(var i = 0; i<list.length; i++){
    list[i]+=1;
  }
  return list;
  // write your code here
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  var result = []; 
  for(var i = 0; i<list.length; i++){
    if(!(list[i]%2)){
      result.push(list[i]);
      // push將新增元素或把元素組到陣列中
    }
  }
  return result;
  // write your code here
}

module.exports = {numbers, eachAddOne, onlyEven}
