
const NUMBER_INPUT = document.getElementById("number");
const evenOrOdd = document.getElementById("evenOrOdd");


NUMBER_INPUT.addEventListener("input", (event) => {
    target = event.target;
    number = parseFloat(target.value);

    answer = "";
    if(number % 2 == 0){
        answer = "par";
    }else{
        answer = "impar";
    }


    evenOrOdd.innerHTML= "o numero " + number + " é " + answer;

    if(isNaN(number)){
        evenOrOdd.innerHTML = "";
    }
})