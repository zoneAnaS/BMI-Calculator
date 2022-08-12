const heightE = document.getElementById("height");
const weightE = document.getElementById("weight");



function calc(){
    document.getElementById("result").classList.remove("green","red","orange");
        document.getElementById("restext").classList.remove("green","red","orange");
    
    hval = parseFloat(heightE.value);
    wval = parseInt(weightE.value);
    msquare = hval*hval;
    fres = (wval/msquare).toFixed(2);
    if(hval && wval){
        document.getElementById("noval").classList.add("none");
        if(fres<18.5){
            document.getElementById("result").classList.add("red");
            document.getElementById("restext").classList.add("red")
            document.getElementById("result").innerHTML=fres;
            document.getElementById("restext").innerHTML="Underweight";
    
        }
         if(fres>18.4 && fres<24.9 ){
            document.getElementById("result").classList.add("green");
            document.getElementById("restext").classList.add("green")
            document.getElementById("result").innerHTML=fres;
            document.getElementById("restext").innerHTML="Healthy";
        }
        if(fres>24.9 && fres<29.9 ){
            document.getElementById("result").classList.add("orange");
            document.getElementById("restext").classList.add("orange")
            document.getElementById("result").innerHTML=fres;
            document.getElementById("restext").innerHTML="Overweight";
        }
        if(fres>30){
            document.getElementById("result").classList.add("red");
            document.getElementById("restext").classList.add("red")
            document.getElementById("result").innerHTML=fres;
            document.getElementById("restext").innerHTML="Obese";
        }
        document.getElementById("p").classList.remove("none")

    }
    else{
        document.getElementById("p").classList.add("none")
        document.getElementById("noval").classList.remove("none");

    }
   
   
    
    
}
    
