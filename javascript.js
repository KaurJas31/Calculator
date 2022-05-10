let box=document.getElementById('space');
buttons=document.getElementsByClassName('button');

for(item of buttons)
{
    
    item.addEventListener('click',(e)=>{
       
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='AC')
        box.value='';
        else if(buttonText=='X')
        {
            buttonText='*';
            box.value+=buttonText;
        }
        else if(buttonText=='=')
        box.value=eval(box.value);
        else{
            box.value+=buttonText;
        }
    })
}