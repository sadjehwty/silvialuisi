//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let anchor=document.getElementById('links');
    let rect = anchor.getBoundingClientRect();
    const elemTop = rect.top;
    if( elemTop < 0){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
