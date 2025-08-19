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
console.log(takht(amir2))

//task3
const amir3 = [
  9, 200, 15, 1270, 3, 35, 17
]
function tidy(num2) {
  return num2.sort((a, b) => (a - b))
}
console.log(tidy(amir3))

//task4
const user = {
  name: 'ali',
  age: 20,
  adres: {
    city: "Tehran",
    zip: 12345
  }
}

const reza = (obje) => Object.keys(obje).length
console.log(reza(user))

//task5
const fruit = ["apple", "banana", "kiwi"];
function fruit2(mive) {
  return mive.map((item) => {
    return { size: item.length }
  })
}
console.log(fruit2(fruit))

//task6
const amir6 = ['a', 'b', 'a', 'c', 'b', 'a']

function amir7(array) {
  return array.reduce((acc, element) =>{
    acc[element] = (acc[element] || 0)+1
    return acc
  } , {})
}
console.log(amir7(amir6))
//task7
function convertTo12hr(time24){
  let parts = time24.split(":")
  let hours = parseInt(parts[0])
  let min = parseInt(parts[1])

 let period = 'am' 
 if (hours >= 12) {
  period = 'pm'
 }

 hours = hours % 12
 if(hours===0){hours = 12}

 let minuteStr
 if (min < 10){
  minuteStr = "0" + min
 }
 else{
  minuteStr = min.toString()
 }
 return hours + ":" + minuteStr + " " + period
}
console.log(convertTo12hr("12:6"))