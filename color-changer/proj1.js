const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
buttons.forEach(function(buttons)
{
    buttons.addEventListener('click',function(elem)
    {
        // console.log(elem);
        console.log(elem.target);// target refers to html code of it.
        if(elem.target.id==="yellow")
        {
            body.style.backgroundColor = elem.target.id;
        }
        if(elem.target.id==="red")
        {
            body.style.backgroundColor = elem.target.id;
        } 
        if(elem.target.id==="green")
        {
            body.style.backgroundColor = elem.target.id;
        }
         if(elem.target.id==="blue")
        {
            body.style.backgroundColor = elem.target.id;
        }
    })
   

});
// creating an element using js
// let newdiv = document.createElement('div');
// let content = document.querySelector('.button');
// content.appendChild(newdiv);

