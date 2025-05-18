// How to clear setInterval 

let count = 0;

const setIntervalId = setInterval(()=>{

    console.log("Running", count);
    count ++;

    if(count === 5 ){
        clearInterval(setIntervalId);
    }
}, 2000);

const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    alert("btn was clicked");
});

outerFunction();
outerFunction();

function outerFunction() {
    let counter = 0;
  
    function innerFunction() {
      counter++;
      console.log(counter);
    }
  
    return innerFunction;
  }
  
  const myFunc = outerFunction();
  
  myFunc(); // 1
  myFunc(); // 2
  myFunc(); // 3
  myFunc();
  myFunc();
  

  let arr = ['sej', 0, 1, 2, 3,'tej'];

  console.log(arr.slice(1,4));  //0,1,2

  console.log(arr.splice(1,3,"sejal")); 
  console.log(arr);    //sej,sejal, 3, tej

  console.log(arr.slice(2))


  let pract = [1,2,'sej', 5,'tej']

  pract.splice(1,3,"mahesh");

  console.log(pract);

  let names = ['sejal', 'tejal'];


  console.log(names.join()) 

  console.log(names.toString())

  console.log(names.at(-2));


  let sum= [1,2,3,4].reduce((add,one) => add+one, 0)
  console.log(sum)



  let pract1 =[1,2,3,4,5,6].filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((Number,add) => Number + add , 0 )

  console.log(pract1);


  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }

  
  let arrrrr= [1,2,4,5]
  console.log(arrrrr.length);

  