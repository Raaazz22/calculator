function seven()
{ 
   document.getElementById("display").value +=7;
}
function four()
{ 
   document.getElementById("display").value +=4;
}
function one()
{ 
   document.getElementById("display").value +=1;
}
function zero()
{ 
   document.getElementById("display").value +=0;
}
function eight()
{   
    document.getElementById("display").value+=8;
}
function five()
{   
    document.getElementById("display").value+=5;
}
function two()
{   
    document.getElementById("display").value+=2;
}
function decimal()
{   
    document.getElementById("display").value+=".";
}
function plus()
{   
    document.getElementById("display").value +="+";
} 
function nine()
{   
    document.getElementById("display").value +=9;
} 
function six()
{   
    document.getElementById("display").value += 6;
} 

function three()
{   
    document.getElementById("display").value +=3;
} 
function multiply()
{   
    document.getElementById("display").value +="*";
} 
function  division()
{   
    document.getElementById("display").value +="/";
} 
function del()
{ 
   document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
}
function ac()
{   
    document.getElementById("display").value ="";
} 
function minus ()
{   
    document.getElementById("display").value +="-";
} 
function equal ()
{    
    var a= eval(document.getElementById("display").value);
	
	//window.alert(a);
	
	if (Number.isInteger(a))
	{
	
	    document.getElementById("display").value=a;
		document.getElementById("display").style.fontSize="30px";
	}
	else{
		document.getElementById("display").value=a;
		document.getElementById("display").style.fontSize="25px";
	}
    
}

