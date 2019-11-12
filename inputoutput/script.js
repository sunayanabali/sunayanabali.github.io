function validate(){
            var age=parseInt(prompt("Enter age"));
            var ans="not eigible";
            if(age>=18){
                ans="eligible";
            }
            return(ans);
        }

     var status=validate();
        document.write("<p>You are <b>"+status+"</b> for Voting</p>");

     