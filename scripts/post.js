//like function
var numberOfClicks = 0;
function postLiked() {
    var button = document.getElementById("addLikes")
    button.innerHTML = '<i class="fa fa-thumbs-up ">' + '</i>' + '&nbsp;' + "Liked!";
    button.style.border = "none";
    numberOfClicks += 1;
    if (numberOfClicks != 0) {

        document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";


    }
}

//comments function..
function addComment(id) {
    if (id.value.length > 0) {
        var addEventName = id.value;
        document.getElementById('addEventNames').innerHTML += '<p id="comment">' + addEventName + '</p>';
        var a = document.getElementById('userComments');
        a.value = a.defaultValue;
    }
}

var titleContent = document.getElementById('post-title');
var contentText = document.getElementById('post-body');
var editButton = document.getElementById('editButton');
var saveButton = document.getElementById('saveButton');

// edit and save the content
function editContent() {
    contentText.contentEditable = "true";
    titleContent.contentEditable = "true";
    contentText.style.border = "1px solid pink";
    titleContent.style.border = "1px solid pink";
    editButton.style.display = "none";
    saveButton.style.display = "block";
    contentText.focus();
}

function saveContent() {
    var updatedTitle = "UPDATED: " + titleContent.innerText;
    titleContent.innerHTML = updatedTitle;
    var updatedContent = "UPDATED: " + contentText.innerText;
    contentText.innerHTML = updatedContent;
    contentText.contentEditable = "false";
    titleContent.contentEditable = "false";
    contentText.style.border = "none";
    titleContent.style.border = "none";
    editButton.style.display = "block";
    saveButton.style.display = "none";
}