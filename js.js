var menu = "open";
var left = 0;
var topval = 0;
var backgroundImg = 0;
var url = 'url("img/bg1.jpg")';
var thumbCount = 0;
//var controlWidth = document.getElementById("control").offsetWidth;


// ---------- Control Bar ----------
document.getElementById("hide").addEventListener("click", function(){
    if (menu == "closed"){
        document.getElementById("control").style.top = "0px";
        menu = "open";
    } else if (menu == "open") {
        document.getElementById("control").style.top = "-330px";
        menu = "closed";
    }
});
document.getElementById("butt1").addEventListener("click", function(){
    backgroundImg = 1
    changeBackground()
});
document.getElementById("butt2").addEventListener("click", function(){
    backgroundImg = 2
    changeBackground()
});
document.getElementById("butt3").addEventListener("click", function(){
    backgroundImg = 3
    changeBackground()
});
document.getElementById("slider").addEventListener("change", function(){
    var sliderWidth = document.getElementById("slider").value;
    document.getElementById("control").style.width = sliderWidth+'px'; 
});
document.getElementById("textIn").addEventListener("keyup",function(ev){
    // Enter 13
    // console.log(bgImage);
    if(ev.keyCode == 13){
        if(document.getElementById("textIn").value.indexOf('https://')==0){
            if(blacklist(document.getElementById("textIn").value)==-1){
                storeBackgroundURL(document.getElementById("textIn").value);
                document.getElementById("status").innerHTML = ""
            }
        } else {
            document.getElementById("status").innerHTML = "Link must be https://"
        }            
    }
});
document.getElementById("plus").addEventListener("click", function(){
    createThumb();
});

// ---------- Functions ----------
function blacklist(str){
    if (str.indexOf('google')!=-1){return 1}
    if (str.indexOf('msn')!=-1){return 1}
    if (str.indexOf('yahoo')!=-1){return 1}
    if (str.indexOf('bing')!=-1){return 1}
    if (str.indexOf('reddit')!=-1){return 1}
    return -1;
}

function storeBackgroundURL(str){
    document.getElementById("center").style.backgroundImage = 'url('+str+')';
    resetSpot()
}

function changeBackground(){
    document.getElementById("center").style.backgroundImage = 'url("img/bg'+backgroundImg+'.jpg")';
    resetSpot()
}

function moveBackground(direction){
    if (direction=="left"){
        document.getElementById("center").style.backgroundPositionX = left+"px";
    }
    if (direction=="top"){
        document.getElementById("center").style.backgroundPositionY = topval+"px";
    }
}

function resetSpot(){
    document.getElementById("center").style.backgroundPositionX = "0px";
    document.getElementById("center").style.backgroundPositionY = "0px";
    left = 0;
    topval = 0;
}

// ---------- Background Image Control ----------
document.addEventListener("keyup", function(ev){
    // Left Arrow 37
    if (ev.keyCode==37){
        left -= 10;
        moveBackground("left")
    }
    // Up Arrow 38
    if (ev.keyCode==38){
        topval -= 10;
        moveBackground("top")
    }
    // Right Arrow 39
    if (ev.keyCode==39){
        left += 10;
        moveBackground("left")
    }
    // Down Arrow 40
    if (ev.keyCode==40){
        topval += 10;
        moveBackground("top")
    }
});


// ---------- Thumbnails ----------
function createThumb(){
    if (thumbCount < 12){
        url = document.getElementById("center").style.backgroundImage;
        console.log(url);
        var ndiv = document.createElement("div");
        ndiv.className = "thumbnails col-xs-6 col-sm-3 col-md-2 col-lg-1";
        ndiv.style.backgroundImage = url;
        document.getElementById("thumbs").appendChild(ndiv);
        thumbCount+=1;
    }
}
