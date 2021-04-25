$(document).ready(function () {

    $('.form').submit(e =>{
        e.preventDefault();

        $.fancybox.open({
            src: ".modal",
            type: "inline"
        })
    });

});




const myForm = document.querySelector('.form');
const sendForm = document.querySelector('.form__btn');

sendForm.addEventListener('click', e =>{
    e.preventDefault();

    if(validateForm(myForm)){
        console.log('бибип');
    }
});

function validateForm(form){
    let valid = true;

    if(!validateChecked(form.elements.name)){
        valid = false;
    };
    if(!validateChecked(form.elements.tel)){
        valid = false;
    };
    if(!validateChecked(form.elements.street)){
        valid = false;
    };
    if(!validateChecked(form.elements.house)){
        valid = false;
    };
    if(!validateChecked(form.elements.flat)){
        valid = false;
    };
    return valid;
};
function validateChecked(checked){
    if(!checked.checkValidity()){
        checked.style.border = 'rem(3px) solid red';
        return false;
    } else {
        checked.style.border = 'rem(3px) solid #DEE2BD';
        return true;
    }
};