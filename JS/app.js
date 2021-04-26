$(document).ready(function () {

    const myForm = document.querySelector('.form');
    const sendForm = document.querySelector('.form__btn');
    
    sendForm.addEventListener('click', e =>{
        e.preventDefault();

        
        const name = $(myForm).find("[name='name']");
        const phone = $(myForm).find("[name='phone']");
        const street = $(myForm).find("[name='street']");
        const to = $(myForm).find("[name='to']");
        const house = $(myForm).find("[name='house']");
        const flat = $(myForm).find("[name='flat']");

        [name, phone, street, to, flat, house].forEach((field) =>{
            field.removeClass('false');
            if(field.val().trim() === ''){
                field.addClass('false');
            }
        });

        if(validateForm(myForm)){

            const data ={
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                comment: myForm.elements.comment.value,
                to: myForm.elements.to.value,  
            };

            console.log(data);
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () =>{
                // if(xhr.response.status){
                //     console.log('ok');
                // } else{
                //     console.log('ne ok');
                // }
            });
        }
    });
    
    function validateForm(form){
        let valid = true;
    
        if(!validateChecked(form.elements.name)){
            valid = false;
        };
        if(!validateChecked(form.elements.phone)){
            valid = false;
        };
        if(!validateChecked(form.elements.to)){
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
        $.fancybox.open({
            src: "#modal",
            type: "inline"
        });

        $('.btn__modal-js').click( e =>{
            e.preventDefault();
    
            $.fancybox.close();
        });
        if(!checked.checkValidity()){
           $('.modal__title').text('Данные не отправлены').next().text('Заполните поля');
            return false;
        } else {
            $('.modal__title').text('Данные отправлены').next().text('');
            return true;
        }
    }


});
    