let string="";

let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
   
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            console.log(e.target)
            string="";
            document.querySelector('input').value=string;
        } 
        
        else if(e.target.innerHTML=='DE'){
            console.log(e.target)
            string=string.e.target.slice(0,-1).innerHTML;
            document.querySelector('input').value=string;
        }
        else {
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    

     
    
        
        
    })
})