function calc(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    
    selector = document.getElementById("selector").value
    
    switch(selector){
        case 'Soma':
            calculo = parseFloat(n1 + n2)
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break

        case 'Subtração':
            calculo = parseFloat(n1 - n2)
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break

        case 'Multiplicação':
            calculo = parseFloat(n1 * n2)
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break 
            
        case 'Divisão':
            calculo = parseFloat(n1 / n2)
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break            

        case 'Potenciação':
            calculo = parseFloat(n1**n2)
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break      
        
        case 'Radiciação':
            calculo = parseFloat(n2**(1/n1))
            document.getElementById("resultado").innerHTML = `The result is = ${calculo}`
            break     

    }

    document.getElementById("n1").value = ''
    document.getElementById("n2").value = ''
}