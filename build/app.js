const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')



burger.addEventListener('click', whenClicked)






function whenClicked() {
    if (menu.classList.contains('hidden')) {
        menu.classList.toggle('hidden')
    } else {
        menu.classList.toggle('hidden')
    }

}
// function underlineParent(event) {
//     event.target.parentNode.classList.toggle("done");
// }

// function whenClicked() {
//     if (menu.classList.contains('hidden')) {

//         toggleHumburger;
//     }
// }

