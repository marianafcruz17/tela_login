const init = () => {
    const email = document.querySelector('input[type="email"]');
    const senha = document.querySelector('input[type="password"]');
    const submitButtonL = document.querySelector('.entrar');
    
   const errorHandler = () => {
       submitButtonL.classList.remove('loading');
       submitButtonL.classList.remove('success');
       submitButtonL.classList.add('error');
       submitButtonL.textContent = "ERRO AO CARREGAR";
   }

   const successHandler = () => {
       submitButtonL.classList.remove('loading');
       submitButtonL.classList.remove('error');
       submitButtonL.classList.add('success');
       submitButtonL.textContent = "CARREGANDO";
   }

    if(submitButtonL){
        submitButtonL.addEventListener('click', (event) => {
            event.preventDefault();

            submitButtonL.textContent = "CARREGANDO...";

            if(email.value && senha.value){
                successHandler();
                setTimeout(() => {
                    alert("Login realizado com sucesso!")
                    window.location = "tela_login.html"
                }, "1000")
            }else if(!email.value && senha.value){
                errorHandler();
                setTimeout(() => {
                    alert('Preencha o e-mail do usuário')
                    window.location = "tela_login.html";
                }, "1000")
            }else if(email.value && !senha.value){
                errorHandler();
                setTimeout(() => {
                    alert('Preencha a senha do usuário')
                    window.location = "tela_login.html";
                }, "1000")
            }else{
                errorHandler();
                setTimeout(() => {
                    alert('Preencha o e-mail e senha do usuário!')
                    window.location = "tela_login.html";
                },"1000")
            }
        })
    }
}
window.onload = init;