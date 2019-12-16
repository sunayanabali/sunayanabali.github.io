function validate(){
            var age=window.prompt("check your eligibilty");
            var ans="not eigible";
            if(age>=18){
                ans="eligible";
            }
            if(age<18){
            	ans="not eliigible"
            }
            return(ans);
        }

     var status=validate();
        document.write("<p>You are <b>"+status+"</b> for Voting</p>");

     