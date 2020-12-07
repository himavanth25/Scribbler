
function goToPostList() {
    location.href = "./html/postslist.html";
}

function showCreatePostModal() {
    // document.getElementById("create-post-modal").style.display = "block";
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
}
function closeCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
}