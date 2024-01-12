var loader = document.getElementById('preloader');
function closepreloader(){
    document.getElementById('preloader').style.display = 'none';
}

window.addEventListener("load" , function(){
    setTimeout(closepreloader , 2000);
})

