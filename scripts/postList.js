

function yes(number){
    var postname="post"+number;
    document.getElementById(postname).style.display="none";
    }
    function no(number){
        var trashname="trash"+number;
        var modal=document.getElementById(trashname).style.display="none";  
    }
    
    function navigateToPost() {
        location.href = "post.html";
    }
    function showDeleteModal(number){
        var trashname="trash"+number;
       var modal=document.getElementById(trashname).style.display="block";   
    }
    