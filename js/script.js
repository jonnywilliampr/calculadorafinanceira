let subconts = document.querySelectorAll('.subcont');
let contadores = document.querySelectorAll('.contador');

subconts.forEach((subcont, index) =>( //varre faz interação entre todos os subconts
    subcont.addEventListener('click', ()=>{ //adicionar o evento de click em cada subcont
        contadores.forEach(contador =>{ //quando clicar no subcont vai varrer todos os contadores para adicionar e remover o invisible
            if(contador.classList.contains(`contador-${index+1}`)){ //verifica se o contador que está varrendo é igual ao index do subcont clicado
                contador.classList.remove('invisible');
            }else{
                contador.classList.add('invisible');
            }
        })
    })
));