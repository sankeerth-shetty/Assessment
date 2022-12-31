function btnclick(show){
    var menu = document.getElementById("nav-buttons2");
    // console.log(menu);

    if( menu.style.display === "block" ){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}