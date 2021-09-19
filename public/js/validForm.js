addEventListener('submit', (noLoad) => {

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')

    if (valAll(name, email) != false){
        noLoad.preventDefault()
    }else{
        if(valName(name) != false){
            noLoad.preventDefault()
        }else{
            if(valEmail(email) != false){
                noLoad.preventDefault()
                alert("está vivo")

            }
        }
    }
})

const valAll = (nome, email) => {
    if(nome.value == "" && valEmail(email) == false){
        alert('Nome e email inválido')
        return true
    }else{
        return false
    }
}

const valName = (name) => {

    if(name.value == ""){
        alert('Digite um Nome Válido')
        return true
    }else{
        return false
    }
}

const valEmail = (email) => {

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        alert('Digite um email válido')
        return true
    }else{
        return false
    }
}

