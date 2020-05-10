let button = document.querySelector('button');
let result = document.querySelector('h3');
let buttonText = document.getElementById('buttonText');
let nice = document.querySelector('h4');

button.addEventListener("click", function(){
    let a = Math.random();
    let b = a*100;
    let r = Math.round(b)
    let c = String(r);
    result.innerText = c;
    // if(r = 69){
    //     nice.innerText = "NICE";
    // }
});

