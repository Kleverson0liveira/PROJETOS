let email = 'higor@hcode.com.br';

email ='higorldmoreira@gmail.com';

console.log(email);
console.log('O seu email é: '+ email);
console.log(`O seu email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e=>{

    console.log('O botão foi clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e =>{

    console.log('O mouse passou pelo form');

});

document.querySelector('#form-login').addEventListener('mouseleave', e =>{
    
    console.log('O mouse saiu do formulario');

});

document.querySelector('#form-login').addEventListener('submit', e =>{

    e.preventDefault();

    let email = document.querySelector('#email').value;

    let password = document.querySelector('#password').value;


    let json = {
        email,
        password   
    }

    if (!json.email){

        console.error('Campo email é obrigatorio')

    }else if(!json.password){
        console.error("Campo deve ser preenchido")
    }else{
        console.info('Dados validados com sucesso')
    }
    

});