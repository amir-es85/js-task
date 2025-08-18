//task 1
const amir = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function zog(arr) {
  return arr.filter(num => num % 2 === 0)
}
console.log(zog(amir))

//task 2
const amir2 = [1, [2, [3, [4]], 5]]
function takht(number) {
  return number.flat(Infinity)

}
console.log (takht(amir2))

//task3
const amir3 = [
  9 ,200 ,15 ,1270,3 ,35,17
]
function tidy (num2){
return num2.sort((a , b) => (a - b))
}
console.log(tidy(amir3))