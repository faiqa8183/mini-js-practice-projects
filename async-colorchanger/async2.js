const colorfuncton  = function()
{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6 ; i++)
    {
        color+= hex[Math.floor(Math.random()*16)];
       
    }
    return color;
};
let sett = ' ';
const generatecolor = function()
{
    document.body.style.backgroundColor = colorfuncton();

}
const startie = document.getElementById('start');
startie.addEventListener('click',function(){
    if(!sett)
    {
        sett =  setInterval(generatecolor,1000);
    }

   
})
const stopie = document.getElementById('stop');
stopie.addEventListener('click',function(){
    clearInterval(sett);
    sett = null; //value used so derefrence it ;
})