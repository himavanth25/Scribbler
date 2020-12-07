var deleteBtn = document.getElementsByClassName('deleteBlog');

var popUpAlter = document.getElementById('modalPopUp');

deleteBtn[0].onclick = function(){
    popUpAlter.style.display="block";
}

deleteBtn[1].onclick = function(){
    popUpAlter.style.display="block";
}

deleteBtn[2].onclick = function(){
    popUpAlter.style.display="block";
}

deleteBtn[3].onclick = function(){
    popUpAlter.style.display="block";
}

deleteBtn[4].onclick = function(){
    popUpAlter.style.display="block";
}
var closeBtn = document.getElementById('noClose');

closeBtn.onclick= function(){
    popUpAlter.style.display="none";
}