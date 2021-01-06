var email=document.getElementById("email");  
var number=document.getElementById("number");  
var password=document.getElementById("password");  
var cpassword=document.getElementById("cpassword");              
        function validateform(){  
            
        

            let regexp1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
            let regexp2 = /^\d{10}$/;
            let regexp3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            let regexp4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        

                if (email.value.trim().match(regexp1)) {

                    let a = document.getElementById("emailmsg");
                    a.innerHTML = "";
                    a.style.color = "green";

                    if (number.value.trim().match(regexp2) || number.value.trim().match(regexp3)) {

                        let a = document.getElementById("phonemsg");
                        a.innerHTML = "";
                        a.style.color = "green";
                        if (password.value.trim().match(regexp4)) {

                            let a = document.getElementById("passmsg");
                            a.innerHTML = "";
                            a.style.color = "green";
                            if (password.value.trim() === cpassword.value.trim()) {
                                let a = document.getElementById("cpassmsg");
                                a.innerHTML = "";
                                a.style.color = "green";
                                return true;
                                
                            } else {
                               
                            let a = document.getElementById("cpassmsg");
                            a.innerHTML = "Password Not matching";
                            a.style.color = "red";
                            return false;
                            }
                        } else {

                            let a = document.getElementById("passmsg");
                            a.innerHTML = "Include(15 char) '0-9 a-z A-Z symbols' ";
                            a.style.color = "red";
                            return false;
                            
                        }
                        
                    } else {

                        let a = document.getElementById("phonemsg");
                        a.innerHTML = "Wrong Format";
                        a.style.color = "red";

                        return false;
                        
                    }
                    
                } else {


                    let a = document.getElementById("emailmsg");
                    a.innerHTML = "Wrong Format";
                    a.style.color = "red";
                    return false;
                    
                }


            } 


            function checkpass() {

                let len = password.value.trim().trim().length;
                if (len >=12 && len <=15) {
                    let b = document.getElementById("password");
                    b.style.border = "3px solid green";
                } else if (len >=8 && len <=11) {
                    let b = document.getElementById("password");
                    b.style.border = "3px solid gold";
                }
                else if(len <8 ){
                    let b = document.getElementById("password");
                    b.style.border = "3px solid red";

                }
                else{

                }
  
            }