function validatelogin(){
    let returnval= true;

    let email= document.forms['loginForm']["logEmail1"].value;
    if(!email){
        document.getElementById("signInEmail").innerHTML= "field is required";
        
        returnval= false;
    }

    let password1= document.forms['loginForm']["logPass1"].value;
    if(!password1){
        document.getElementById("signInPassword").innerHTML= "field is required";
        
        returnval= false;
    }

    return returnval;
}

function validatereg(){
    let returnval= true;

    let username= document.forms['regForm']["regUsername1"].value;
    if(!username){
        document.getElementById("signUpUsername").innerHTML= "field is required";

        returnval= false;
    }

    let email= document.forms['regForm']["regEmail1"].value;
    if(!email){
        document.getElementById("signUpEmail").innerHTML= "field is required";

        returnval= false;
    }

    let password= document.forms['regForm']["regPass1"].value;
    if(!password){
        document.getElementById("signUpPassword").innerHTML= "field is required";

        returnval= false;
    }

    return returnval;
}

