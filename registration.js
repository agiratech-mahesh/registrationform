function registration()
{
    var Name=document.getElementById("t1").value;
    var Mailid=document.getElementById("t2").value;
    var password=document.getElementById("t3").value;
    var Confirmpassword=document.getElementById("t4").value;
    
    var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
if (Name=='')
{
    alert('please enter your name');
}
else if(!letters.test(Name))
{
  alert('Name requires only characters'); 
}
    else if(Mailid=='')
    {
      alert('enter mail id');
    }
    else if(!filter.test(Mailid))
    {
      alert('enter correct mail id');
    }
    else if (password !=Confirmpassword)
    {
      alert('password not matched');
    }
    else if(password=='')
    {
      alert('enter the password');
    }
    else if (Confirmpassword=='')
    {
      alert('re enter the password');
    }
    else if(!password_expression.test(password))
    {
      alert('should contain uppercase lowercase atleast one number,special characters');
    }
    else if(document.getElementById("t3").value.length < 8 )
    {
      alert('password minimum lenght is 8');
    }
    else if(document.getElementById("t3").value.length > 14 )
    {
      alert('password maximum lenght is 14');
    }
}
