// const leftBtn = document.querySelectorAll('.products__arrow-left');
// const rightBtn = document.querySelectorAll('.products__arrow-right');

// const productWidth = document.querySelector('#product');

// const sliderItem = document.querySelector('#product');

// let sliderPosition = 0;

// rightBtn.forEach(arrow => {
//     arrow.addEventListener('click', () => moveRight());
// });

// leftBtn.forEach(arrow =>{
//     arrow.addEventListener('click', () => moveLeft());
// });

// function moveRight() {
//     sliderPosition += productWidth.clientWidth;
    

//     sliderItem.style.transform = `translate(-${sliderPosition}px)`;
// }

// function moveLeft() {
//     sliderPosition -= productWidth.clientWidth;

//     sliderItem.style.transform = `translate(-${sliderPosition}px)`;
// }
const string = "Привет! Как дела?";

const vowels = ['а', 'о', 'у', 'ы', 'е', 'ё', 'и', 'я', 'э', 'ю'];

const getVowels = stringTo =>{
    let extVowels = '';

    for (let i = 0; i < stringTo.length; i++) {
        const currentLetter = stringTo[i];

        if(vowels.indexOf(currentLetter) !== -1){
            extVowels = extVowels + currentLetter;
        }
    }
    return extVowels;
}

console.log(getVowels(string));

/////////////////////////////////////////////////////////////////////////

const path = "/users/download/index.html";

const isHtml = path =>{

    const requiredExt = '.html';
    const pathExt = path.slice(-5);

    return requiredExt === pathExt;
        
}

console.log(isHtml(path));

/////////////////////////////////////////////////////////////////////////

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 === 0;
};

const filterArray = (arr, filterIn) => {

    const filteredArray = [];

    arr.forEach(num => {
        if (filterIn(num)){
            filteredArray.push(num);
        }
    });
    return filteredArray;
};

console.log(filterArray(mixedArray, isEven));

/////////////////////////////////////////////////////////////////////////

// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');

// const items = document.querySelector('#items');

// const computedStyles = getComputedStyle(items);

// rightBtn.onclick = () =>{
    
//     let = currentRight = parseInt(computedStyles.right);

//     if (currentRight < 480){
//         items.style.right = `${currentRight + 80}px`
//     }

// }
// leftBtn.onclick = () =>{
    
//     let = currentRight = parseInt(computedStyles.right);

//     if (currentRight > 0){
//         items.style.right = `${currentRight - 80}px`
//     }

// }
(function openMenu() {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.burger');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('menu--active');
        menuBtn.classList.toggle('active');

        if (menu.classList.contains('menu--active')){
            document.body.style.overflow = `hidden`;
        } else {
            document.body.style.overflow = `scroll`;
        }
    });

    menu.addEventListener('click', function (e) {
        if (menu.classList.contains('menu--active') && e.target.classList.contains('menu__item-link')){
            menu.classList.toggle('menu--active');
            menuBtn.classList.toggle('active');
            document.body.style.overflow = `scroll`;
        }
    })

})();