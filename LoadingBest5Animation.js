setTimeout(() =>
    {
        document.getElementsByClassName('.loader')[0].style.display='none';
        document.querySelector('#loading-text').style.display='none'
        
    },1500)
    document.querySelector('.loader').addEventListener('animationend',function(){
    window.location.href="ResultsSorter.html";
    })