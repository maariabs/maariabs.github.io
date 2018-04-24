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
 
// var libButton = document.getElementById('lib-button');
//lipButton.addEventListener('click',libIt);
    
    //    function libIt() {
    //      var storyDiv = document.getElementById("story");
    //      var person = document.getElementById("person").value;
    //      var adjective = document.getElementById("adjective").value;
    //      var noun = document.getElementById("noun").value;
    //      storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
    //}

// function submit 


    