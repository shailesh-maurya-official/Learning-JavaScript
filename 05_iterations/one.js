// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
    //   console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + ' * ' + j + ' = ' + i*j);
        
    }
}


let myArray = ["Iron man", "spider man", "thor"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


for (let index = 1; index <= 10; index++) {
    if(index == 5){
        // console.log(`Detected ${index}`);
        break
    }
    // console.log(`value of i is ${index}`);
    
}


for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}