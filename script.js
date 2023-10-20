let divpara = document.getElementById('divparaid')
let para = document.getElementById('paraid')
let dropdown = document.getElementById('colors')

dropdown.addEventListener('change',() => {
    let val = dropdown.value

    if(val == 'default'){
        divpara.style.backgroundColor = 'Transparent'
        para.style.color = 'Black'
    }
    else if(val == 'red'){
        divpara.style.backgroundColor = 'Red'
        para.style.color = 'White'
    }
    else if(val == 'cyan'){
        divpara.style.backgroundColor = 'Cyan'
        para.style.color = 'Black'
    }
    else if(val == 'orange'){
        divpara.style.backgroundColor = 'Orange'
        para.style.color = 'Black'
    }
    else if(val == 'skyblue'){
        divpara.style.backgroundColor = 'Skyblue'
        para.style.color = 'Black'
    }
})