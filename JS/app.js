$(document).ready(function () {

    const myForm = document.querySelector('.form');
    
    myForm.addEventListener('submit', e =>{
        e.preventDefault();
        console.log('e')
        const valid = validateForm(myForm);
        if(valid){
            const data ={
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                comment: myForm.elements.comment.value,
                to: 'test@mail.ru' 
            };
        
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

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () =>{
                $.fancybox.open({
                    src: "#modal",
                    // type: "inline"
                });

                if(xhr.response.status){
                    $('.modal__title').text(xhr.response.message)
                    console.log('ok');
                } else{
                    $('.modal__title').text(xhr.response.message)
                    console.log('ne ok');
                }
                
            });
        }
    });
    
    function validateForm(form){
        for(let el of form.elements){
            if(!validateChecked(el)){
                return false;
            };
        };
        $('.btn__modal-js').click( e =>{
            e.preventDefault();
    
            $.fancybox.close();
        });
        return true;
    };
    function validateChecked(checked){

        // if(checked.value.trim() === ''){
        //     checked.classList.add('false');
        //     return false;
        // };
        // checked.classList.remove('false');
        // return true;
        
        if(!checked.checkValidity()){
            return false;
        } else {  
            return true;  
        }
    }
    $('.btn__modal-js').click( e =>{
        e.preventDefault();

        $.fancybox.close();
    });
});
    