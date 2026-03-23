const semlogincontainer = document.getElementById('semloginContainer');
const newButton = document.getElementById('newButton');
const h1 = document.getElementById('h1');

newButton.addEventListener('click',() => {
    if(semlogincontainer.classList.contains("irparaesquerda")){
        semlogincontainer.classList.remove("irparaesquerda");
        semlogincontainer.classList.add("irparadireita");//direita
        h1.innerText = "Ainda não tem cadastro?";
    }
    else{
        semlogincontainer.classList.remove("irparadireita");
        semlogincontainer.classList.add("irparaesquerda"); //esquerda
        h1.innerText = "Já tem Login-up?";
    }
});