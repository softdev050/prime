<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <input type="text" id="fname" name="fname">
        <button type="button" onclick="handleStart()">Start</button>
        <button type="button" onclick="handleStop()">Stop</button>
        <script>
            let inputElem = document.querySelector('input');
            let t_id=0;  // timing id
            let x=0;
            function timing(){// automation function interval = 1000ms
                if(isNaN(localStorage.getItem("inputvalue")))return;
                x=parseInt(localStorage.getItem("inputvalue"));
                if(x>=99){// till less than 100
                    clearInterval(t_id);
                    t_id=0;
                }
                else {
                    if(prime(x)){
                        alert("Current value is prime.")
                        clearInterval(t_id);
                        t_id=0;
                    }
                    else{
                        x++;
                        localStorage.setItem("inputvalue", x);
                        document.getElementById("fname").value=x;                        
                    }                    
                }
            }      
            function handleStart() { // start button clicked
                if(inputElem.value!=""){                        
                    localStorage.setItem("inputvalue", inputElem.value);               
                    if(t_id==0)t_id=setInterval(timing,1000);   
                }
                else alert("You have to type input value");
                
            }
            function handleStop() { // stop button clicked
                alert("Process is stoped by you!")
                localStorage.removeItem("inputvalue");
                clearInterval(t_id);
                t_id=0;
            }
            function prime(x){//if x is prime, return true. else return false
                let isPrime = true;
                let a = Math.round(Math.sqrt(x));// prime algorithm
                for (let i = 2; i <= a; i++) {
                    if (x % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                return isPrime;
            }
            inputElem.addEventListener('input', () => {// DOM listener                
                if(inputElem.value.localeCompare((parseInt(inputElem.value)).toString())===0){
                    document.getElementById("fname").value=inputElem.value;
                    if(parseInt(inputElem.value)<=100){                        
                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem("inputvalue", inputElem.value);
                        } 
                    }
                    else{
                        document.getElementById("fname").value="";
                    }  
                }    
                else {
                    if(!isNaN(inputElem.value))document.getElementById("fname").value=parseInt(inputElem.value);
                    else {document.getElementById("fname").value="";}
                }
                if(isNaN(inputElem.value)){document.getElementById("fname").value="";localStorage.removeItem("inputvalue");}
            });            
        </script>

    </body>
</html>

