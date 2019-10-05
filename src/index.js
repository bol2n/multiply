module.exports = function multiply(first, second) {
  //переводим обе строки в массивы и меняем порядок на обратный для удобства подсчета
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  //создаем пустой стек, куда будем заносить перемноженные поочередно числа s
  let stack = [];
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      let composition = firstArr[i] * secondArr[j];			
      stack[i + j] = (stack[i + j]) ? stack[i + j] + composition : composition;
    }
  }
  //обрабатываем полученный массив, проверяя сколько знаков в каждом элементе
  for (let i = 0; i < stack.length; i++) {
    //находим единицы
    let balance = stack[i] % 10;
    //находим десятки
    let nextBalance = Math.floor(stack[i] / 10);
    //оставляем единицы, десятки переносим на следующий элемент
    stack[i] = balance;
    if (stack[i + 1]) {
    stack[i + 1] += nextBalance;
    }
    else if (nextBalance != 0) {
    stack[i + 1] = nextBalance;
    }
  }
  //убираем нули и возвращаем строкой перевернутый массив
  for (let k = 0; k <= stack.length-1; k++) {
    
    if (stack[stack.length-1] === 0) {
    stack.pop();
    k = 0;	
    }
    else {
    }					
  }
  return stack.length == 0 ? "0" : stack.reverse().join('');
}
