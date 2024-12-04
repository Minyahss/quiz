function testar(){
    let contOp1=0;
    let contOp2=0;
    let contOp3=0;
    let contOp4=0;

    let radios = document.querySelectorAll('input[type="radio"]')
    console.log(radios)

    radios.forEach(e => {
        if (e.checked) {
            if (e.value == "op1") {
                contOp1++
            }else if(e.value == "op2"){
                contOp2++
            }
            else if(e.value == "op3"){
                contOp3++
            }
            else if(e.value == "op4"){
                contOp4++
            }
        }
    })

    let resultado = `Op1 = ${contOp1}<br>Op2 = ${contOp2}<br>Op3 = ${contOp3}<br>Op4 = ${contOp4}`;

    document.getElementById("resultado").innerHTML = resultado;

    localStorage.setItem('op1', contOp1)
    localStorage.setItem('op2', contOp2)
    localStorage.setItem('op3', contOp3)
    localStorage.setItem('op4', contOp4)

    let maior = 0
    let pagina
    if (contOp1>maior) {
        pagina = 'op1'
        maior = contOp1
    }
    if (contOp2>maior) {
        pagina = 'op2'
        maior = contOp2
    }
    if (contOp3>maior) {
        pagina = 'op3'
        maior = contOp3
    }
    if (contOp4>maior) {
        pagina = 'op4'
        maior = contOp4
    }

    console.log(maior)

    setTimeout(() => {
        window.open(pagina+'.html')
    }, 5000)
}