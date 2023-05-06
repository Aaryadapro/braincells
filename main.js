      var a = 1;          
            function add(){

                document.getElementById("amount").innerHTML=a++;
                
            }
            
            function remove(){
                document.getElementById("amount").innerHTML=a--;
            }
            
            function multiply(){
                document.getElementById("amount").innerHTML=a * a;
            }

            if(document.getElementById("amount").value < 0){
                  document.getElementById("hi").innerHTML="Emotional Damage has occured please increase brain cells";}

            id(document.getElementById("amount").value > 100){
                  document.getElementById("amount").innerHTML="you have become smart but this is just 10% of how smart you can become";
