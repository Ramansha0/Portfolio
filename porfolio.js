var typed = new  Typed(".word", {
    strings: ["programer", "Youtuber", "Coder"],  
    typeSpeed: 100,  
    backSpeed: 100,  
    backDelay: 1000,
    loop: true,
});
var cvbtn = document.querySelector('.bt');
var cv = document.querySelector('.hello');


cvbtn.addEventListener('click', () =>{
   let act = confirm("Do you want to download ");
if(act){
   setTimeout(() => { var imgpath = cv.getAttribute('src');
    var imgname = getimgname(imgpath);
    saveAs(imgpath,imgname);
   },2000);}
} );

function getimgname(str){
    return str.substring( str.lastIndexOf('/') + 1);
}



var themeyou = document.getElementById("theme");
var theme3 = document.getElementById("theme1");

themeyou.onclick = function() {
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
        themeyou.innerHTML = '<i class="fa-solid fa-sun" style="background-color: black; color: white;"></i> ';

    } else {
        themeyou.innerHTML = '<i class="fa-solid fa-cloud-moon"></i> ';
    }

};



