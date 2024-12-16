function contagem() {
    let cont = [0, 0, 0, 0]

    let radios = document.querySelectorAll('input[type="radio"]')
    //console.log(radios)

    radios.forEach(e => {
        //console.log(e.value)

        if (e.checked) {
            if (e.value == "op1") {
                cont[0]++
            } else if (e.value == "op2") {
                cont[1]++
            }
            else if (e.value == "op3") {
                cont[2]++
            }
            else if (e.value == "op4") {
                cont[3]++
            }
        }
    })
    

    
    let totalValoresVetor = somarValoresVetor(cont);


    if (totalValoresVetor < 10) {
        //console.log(checados)
        return null
    } else {
       return cont
    }
    
}


function somarValoresVetor(vetor) {
    let sum=0;
    for(let j=0; j<vetor.length; j++) {
        sum = sum + vetor[j];
    }
    return sum;
}

function resul(retorno) {
    let resultado = `Sayori = ${retorno[0]*100/10}%<br>Yuri = ${retorno[1]*100/10}%<br>Natsuki = ${retorno[2]*100/10}%<br>Monika = ${retorno[3]*100/10}%`;
    document.getElementById("resultado").innerHTML=resultado;
}

function maior(retorno) {
    localStorage.setItem('op1', retorno[0])
    localStorage.setItem('op2', retorno[1])
    localStorage.setItem('op3', retorno[2])
    localStorage.setItem('op4', retorno[3])

    let maior = 0
    let pagina
    if (retorno[0] > maior) {
        pagina = 'op1'
        maior = retorno[0]
    }
    if (retorno[1] > maior) {
        pagina = 'op2'
        maior = retorno[1]
    }
    if (retorno[2] > maior) {
        pagina = 'op3'
        maior = retorno[2]
    }
    if (retorno[3] > maior) {
        pagina = 'op4'
        maior = retorno[3]
    }

    return pagina
}


function mostrarPagina(pag) {
    setTimeout(() => {
        window.open('https://minyahss.github.io/quiz/'+ pag + '.html')
    }, 5000)
}


function final() {
    let retorno = contagem();
    if (retorno == null) {
        let resultado = "RESPONDA TODAS AS QUESTÕES!"
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        resul(retorno)
        let pagina = maior(retorno)
        mostrarPagina(pagina)
    }

}