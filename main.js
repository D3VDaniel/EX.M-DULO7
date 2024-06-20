const form = document.getElementById('form-number');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const num1Value = parseFloat(number1.value);
    const num2Value = parseFloat(number2.value);
    const mensagemSucesso = `Formulário enviado com Sucesso!`;
    const mensagemErro1 = `O Número em A precisa ser maior que 0.`;
    const mensagemErro2 = `O Segundo Número precisa ser maior que o primeiro.`;

    let formEValido = true;

    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message1').style.display = 'none';
    document.querySelector('.error-message2').style.display = 'none';


    if (number1.value <= 0) {
        const containerMensagemErro1 = document.querySelector('.error-message1');
        containerMensagemErro1.innerHTML = mensagemErro1;
        containerMensagemErro1.style.display = 'block';
        number1.style.border = '1px solid red';
        formEValido = false;
    } else {
        number1.style.border = '1px solid green';
    }

    if (number2.value <= number1.value) {
        const containerMensagemErro2 = document.querySelector('.error-message2');
        containerMensagemErro2.innerHTML = mensagemErro2;
        containerMensagemErro2.style.display = 'block';
        number2.style.border = '1px solid red';
        formEValido = false;
    } else {
        number2.style.border = '1px solid green';
    }

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        number1.style.border = '1px solid green';
        number2.style.border = '1px solid green';
    }
});
