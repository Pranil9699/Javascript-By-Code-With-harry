let i = document.getElementsByTagName('div')[0];
function myFunction(params) {
    document.getElementsByTagName('div')[1].innerHTML="I Love you"
    document.getElementsByTagName('div')[1].style.background=params
    console.log(params)
    setTimeout(() => {
        
    }, 500);
    document.getElementsByTagName('div')[1].innerHTML="I hate You"
    document.getElementsByTagName('div')[1].style.background="black"
}