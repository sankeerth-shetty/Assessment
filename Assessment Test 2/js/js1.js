function btnclick(show){
    var menu = document.getElementById("nav-buttons");
    // console.log(menu);

    if( menu.style.display == "none" ){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}