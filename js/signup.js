

// ...........GET ALL INPUT ELEMENTS ..............

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var emailId = document.getElementById('emailId');
var phoneNo = document.getElementById('phoneNo');
var uId = document.getElementById('uId');
var pwd = document.getElementById('pwd');

var cpwd = document.getElementById('cpwd');
var err = document.getElementsByClassName('error-msg');


// var eye = document.getElementsById("eye");
// var toggle_pwd = document.getElementById('toggle_pwd');


//...........ADD EVENT LISTENERS TO INPUT ELEMENTS..........



fname.addEventListener('focusout',fname_validation);
lname.addEventListener('focusout',lname_validation);
emailId.addEventListener('focusout',email_validation);
phoneNo.addEventListener('focusout',phoneNo_validation);
uId.addEventListener('focusout',uid_validation);
pwd.addEventListener('focusout',pwd_validation);
cpwd.addEventListener('focusout',cpwd_validation);



//............. FUNCTION DESCRIPTION...................

/*-------- First name validation --------- */

function fname_validation()
{
var regname =  /^[A-Za-z]{3,12}$/;

if (fname.value=="")
{
   err[0].innerHTML=("First Name cannot be Empty!!");
   fname.style.borderColor="red";
   fname.focus();
}
else if (fname.value.match(regname))
{
fname.style.borderColor="green";
err[0].innerHTML=("");
return true;
}
else
{
err[0].innerHTML=("it should only contain alphabets ** less than 12 charachters!!");
fname.style.borderColor="red";
fname.focus();
fname.value="";
return false;
}
}

/*-------- Last name validation --------- */

function lname_validation()
{
var regname =  /^[A-Za-z]{3,12}$/;


if (lname.value=="")
{
   err[1].innerHTML=("Last Name cannot be Empty!!");
   lname.style.borderColor="red";
   lname.focus();
}
else if (lname.value.match(regname))
{
lname.style.borderColor="green";
err[1].innerHTML=("");
return true;
}
else
{
err[1].innerHTML=("it should only contain alphabets ** less than 12 charachters!!");
lname.style.borderColor="red";
lname.focus();
lname.value="";
return false;
}
}

/*-------- Email Id validation --------- */

function email_validation()
{
var regemail = /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)?(\.\w{2,3})+$/;


if (emailId.value=="")
{
   err[2].innerHTML=("Email Id cannot be Empty!!");
   emailId.style.borderColor="red";
   emailId.focus();
}
else
if (emailId.value.match(regemail))
{
emailId.style.borderColor="green";
err[2].innerHTML=("");
return true;
}
else
{
err[2].innerHTML=("Please enter a valid Email-Id");
emailId.style.borderColor="red";
emailId.focus();
emailId.value="";
return false;
}
}


/*-------- Phone No: validation --------- */

function phoneNo_validation()
{
var regpno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


if (phoneNo.value=="")
{
   err[3].innerHTML=("Phone Number cannot be Empty!!");
   phoneNo.style.borderColor="red";
   phoneNo.focus();
}
else
if (phoneNo.value.match(regpno))
{
phoneNo.style.borderColor="green";
err[3].innerHTML=("");
return true;
}
else
     {
      err[3].innerHTML=("Please enter a valid Phone-no:");
      phoneNo.style.borderColor="red";
      phoneNo.focus();
      phoneNo.value="";
      return false;
     }
}



/* --------- User Id validation ------------- */

function uid_validation()
{
var reguid =  /^[A-Za-z0-9]{3,12}$/

 
if (uId.value=="") 
{
   err[4].innerHTML=("Please enter User Name!!");
   uId.style.borderColor="red";
   uId.focus();
}
else
 if (uId.value.match(reguid))
 {
   uId.style.borderColor="green";
   err[4].innerHTML=("");
   return true;
 }
else
   {
      err[4].innerHTML=("**Username can contain only alphabets and digits ** less than 12 charachters");
      uId.style.borderColor="red";
      uId.focus();
      uId.value="";
      return false;
   }
}

/* --------- Password validation ------------- */

function pwd_validation()
{
var regpwd=/^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{7,20}$/;
var len = pwd.value.length;

   
if (pwd.value=="")
{
   err[5].innerHTML=("Please enter password!!");
   pwd.style.borderColor="red";
   status.style.color="white";
   // pwd.focus();
}
else
if (pwd.value.match(regpwd))
{
   pwd.style.borderColor="green";
   err[5].innerHTML=("");
   // cpwd.focus();
   return true;
}
else
      {
      err[5].innerHTML=("Enter valid password!!");
      pwd.style.borderColor="red";
      pwd.focus();
      // pwd.value="";
      strengthText.innerHTML="Password Strength: ";
      status.style.background="";
      return false;
      }

}  

// /* --------- Show password  ------------- */


function togglepwd()
{

   if (pwd.type === "password")
   {
      pwd.type = "text";
      eye.style.color = "dodgerblue";
     
   }
   else
   {
      pwd.type = "password";
      eye.style.color = "#999";
   }
}

/* --------- Confirm Password validation ------------- */

function cpwd_validation()
{

      
if (cpwd.value=="")
{
   err[6].innerHTML=("Repeat password!!");
   cpwd.style.borderColor="red";
   cpwd.focus();
}
else
if (cpwd.value === pwd.value)
{
cpwd.style.borderColor="green";
err[6].value=("");


return true;
}
else 
      err[6].innerHTML=("Both passwords should match!!");
      cpwd.style.borderColor="red";
      cpwd.value="";
      return false;
}

/* ------------------------password strength ---------------------------*/

pwd.addEventListener('keypress',function(){
strength();
})

function strength()

{
var status = document.getElementById("length");
var strengthText = document.getElementById('password-strength-text');


var counter = 0;
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
var Regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])")
if (pwd !="")
{
   if ((pwd.length <5)||(pwd.value.match(Regex)))
   counter=1;
   if ((pwd.length<=8)||(pwd.value.match(mediumRegex)))
   counter=2;
   if((pwd.length>=8)||(pwd.value.match(mediumRegex)))
   counter=3;
   if((pwd.length>=8) || (pwd.value.match(strongRegex)))
   counter=4;


   if(counter ==1){
      strengthText.innerHTML="Password Strength: BAD";
      status.value="40";
      status.style.background="red";
      status.style.color="white";
   }
   if(counter ==2){
      strengthText.innerHTML="Password Strength: WEAK";
      status.value=60;
      status.style.background="orange";
      status.style.color="white";
   }
   if(counter ==3){
      strengthText.innerHTML="Password Strength: GOOD";
      status.style.background="yellow";
      status.style.color="white";
   }
   if(counter ==4){
      strengthText.innerHTML="Password Strength: STRONG";
      status.style.background="green";
      status.style.color="white";
   }
}
}
