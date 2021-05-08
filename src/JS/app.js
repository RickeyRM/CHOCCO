$(document).ready(function () {

    const myForm = document.querySelector('.form');
    const btn = document.querySelector('.form__btn');
    
    myForm.addEventListener('submit', e =>{
        e.preventDefault();
        console.log('e')
        const valid = validateForm(myForm);
        console.log(valid)
            if(valid){
                const data ={
                    name: myForm.elements.name.value,
                    phone: myForm.elements.phone.value,
                    comment: myForm.elements.comment.value,
                    to: 'test@mail.ru' 
                };    
    
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
                xhr.setRequestHeader('content-type', 'application/json');
                xhr.send(JSON.stringify(data));
                xhr.addEventListener('load', () =>{
                    $.fancybox.open({
                        src: "#modal",
                        type: "inline"
                    });
    
                    if(xhr.response.status){
                        $('.modal__title').text(xhr.response.message)
                        console.log('ok');
                    } else{
                        $('.modal__title').text(xhr.response.message)
                        console.log('ne ok');
                    }
                    
                });
                $('.btn__modal-js').click( e =>{
                    e.preventDefault();
            
                    $.fancybox.close();
                }); 
            }
    });
    
    function validateForm(form){
        let valid = true;
		 
		if (!validateField(form.elements.name)) {
			valid = false;
		}
		 
		if (!validateField(form.elements.phone)) {
			valid = false;
		}
		 
		if (!validateField(form.elements.street)) {
			valid = false;
		}
		 
		if (!validateField(form.elements.house)) {
			valid = false;
		}
		 
		if (!validateField(form.elements.flat)) {
			valid = false;
		}
		if (!validateField(form.elements.comment)) {
			valid = false;
		}
		 
		return valid;
    };
    function validateField(checked){   
        if(checked.value.trim() === ''){
            checked.classList.add('false');
            return false;
        };
        checked.classList.remove('false');
        return true;  
        
    }
    
});
// function validateField(field) {
//     if (!field.checkValidity()) {
//         field.classList.add('false');
//         return false;
//     } else {
//         field.style.border = 'none'
//         return true;
//     }
// }