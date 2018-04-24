function follow() {
    alert("Thank you for subscribing")
    }

window.onload=function(){
var commentsubmit = document.getElementById('commentsubmit');
commentsubmit.addEventListener('click',comments);
}

function comments() {
var commentDiv = document.getElementsByClassName("emptydiv");
var namespace = document.getElementsByClassName("namespace").value;
var commentspace = document.getElementById("commentspace").value;
emptydiv.innerHTML = namespace + commentspace;

}

