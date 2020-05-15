function validate()

    {
    
        var errorMessage="";
        var regexp = /^[A-Za-z0-9]{3,12}$/;
        var regexppwd=/^(?=.*[0-9])(?=.*[!@#$%^&*+<>])[a-zA-Z0-9!@#$%^&*+<>]{7,20}$/;
        var uid=document.forms["frm_login"]["uid"].value;	
        var pwd=document.forms["frm_login"]["pwd"].value;	
        
        // User name validation

        if (uid==null)
            {
                errorMessage += "User Name cannot be blank.\ ";
            }
        if (regexp.test(uid) == false)
            {
                errorMessage += "Please enter a valid User Name.\ ";
            }
         // Password validation

         if (pwd==null )
            {
                errorMessage += "Password is required.\ ";
            }
        if ((pwd.length > 20) || (pwd.length < 8))
            {
                errorMessage += "Password must be more than 8 and less than 20 charachters.\ ";
            }
 
        if (regexppwd.test(pwd) == false)
            {
               errorMessage += "Password must contain uppercase , lowercase , numbers and special charachters.\ ";
            }

    if (errorMessage !="")
         {
            alert(errorMessage);

            return false;
         }
     else
    return true;
}