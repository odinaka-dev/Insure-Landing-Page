//the insure landing page script language
// grabbing the list and the harmburger button

let unifedList = document.querySelector('.list-items');
let harmburgerButton = document.querySelector('.harmburger');
let ImageMain = document.querySelector('.harmburger img');
var isImage1 = true;
// add eventlistener to the button

harmburgerButton.addEventListener('click', function(){
    //using the toggle effects to toggle the 
    unifedList.classList.toggle('show-list');
    return toggleImage();
})

function toggleImage(){
    if(isImage1){
        ImageMain.src = 'images/icon-close.svg';
    }else {
        ImageMain.src = 'images/icon-hamburger.svg';
    }isImage1 = !isImage1;
}