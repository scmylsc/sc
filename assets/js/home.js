function opennav(){

    var tik = document.getElementById("checkbox");  
    var text= document.getElementById("navid");
    var icon = document.getElementById("menu-icon");
    if(tik.checked == true){
        text.style.display = "none";
        text.style.transition = "all 2s";
        icon.className = "fa fa-bars";
    }
    if(tik.checked == false){

        text.style.transition = "all 2s";
        text.style.display = "block";
       icon.className = "fa fa-close";

    }    

}
function sendmsg(){

    var phone_number = document.getElementById("phonenumbertext").value;
    var link = "https://wa.me/"+phone_number;
    if(phone_number == ""){
        alert("PLEASE ENTER YOUR PHONE NUMBER IN TEXT FIELD");
    }
    else if(phone_number.toString().length <10){
        alert("PLEASE ENTER CORRECT NUMBER");
    }
    else{
        window.open(link);
    }
    
}

function sendmsgbu(){
    var link = "https://wa.me/"+"9390558027";
    window.open(link);
}
function test(){
    var icon = document.getElementById("menu-icon");
    var text= document.getElementById("navid");
    icon.className = "fa fa-bars";
    text.style.display = "none";
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}


function navigate(classname){
   
    if(classname == "one11"){
        window.location.href = 'main_html/sub_biriyani.html';
    }
    else if(classname == "one22"){
        window.location.href = 'main_html/sub_firedrice.html';
    }
    else if(classname == "one33"){
       window.location.href = 'main_html/sub_starters.html';
    }
    else if(classname == "one44"){
        window.location.href = 'main_html/sub_pulka.html';
    }
    else if(classname == "one55"){
        window.location.href = 'main_html/sub_pizza.html';
    }
    else if(classname == "one66"){
        window.location.href = 'main_html/sub_sweets.html';
    }
    else if(classname == "one77"){
        window.location.href = 'main_html/sub_cakes.html';
    }
    else if(classname == "one88"){
        window.location.href = 'main_html/sub_shawarma.html';
    }
    else{
        window.location.href = 'main_html/sub_mandi.html';
    }
   
}

/*
function navigate1(classname){
    alert(classname);
}*/



function navigate_ordernow(){
    
    window.location.href = "{% static 'main_html/order_now.html' %}";
}

