let mimg = document.getElementById('mimg');

let pic = document.createElement('div');
pic.id = 'mborder';
pic.innerHTML = `<img src='./images/1img.jpg' class='inimgs' id='idimg'>`
// pic.style.background = "url(./images/DSC_1405-6.jpg)";
// pic.style.backgroundPosition = "center";
// pic.style.backgroundSize = "cover";
mimg.appendChild(pic);

let simg = document.getElementById('simg');

let left = document.createElement('div');
left.id = 'left';
left.innerHTML = '<a href="#1img" class="anchor"><i class="fa-solid fa-chevron-left fa-2xl" style="float:right; cursor:pointer; color:white;"></i></a>'
left.style.width = '5%';
simg.appendChild(left);

let slide = document.createElement('div');
slide.id = 'slide';

let ids = ['1img','2img','3img','4img','5img','6img','7img','8img','9img','11img','12img'];
for(let i=0; i<ids.length; i++){
    let myimgs = document.createElement('img');
    myimgs.id = ids[i];
    myimgs.className = 'aimg';
    myimgs.src = `./images/${ids[i]}.jpg`;
    slide.appendChild(myimgs);
}

simg.appendChild(slide);

for(let j=0; j<ids.length; j++){
    document.getElementById(ids[j]).onclick = function(){
        document.getElementById('idimg').src = `./images/${ids[j]}.jpg`
    }
}

let right = document.createElement('div');
right.id = 'right';
right.innerHTML = '<a href="#12img" class="anchor"><i class="fa-solid fa-chevron-right fa-2xl" style="float:left; cursor:pointer; color:white;" id="rightb"></i></a>'
right.style.width = '5%';
simg.appendChild(right);


