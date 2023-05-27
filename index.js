const clock = setInterval(() => {    
    let d = new Date();
    let showtd = d.toLocaleDateString();
    let showt = d.toLocaleTimeString();
    
    document.getElementById('date').innerHTML = showtd;
    document.getElementById('time').innerHTML = showt;
},0);


let clrtmot = document.querySelector('#btn')
clrtmot.addEventListener('click' , ()=>{
    clearTimeout(clock)
})