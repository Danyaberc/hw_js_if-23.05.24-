let inptext = document.querySelector('input[name="text"]');
let inpNum = document.querySelector('input[name="number"]')
let output = document.querySelector('.info_Input');

let arrInp = [inptext,inpNum]

let arr = [];

let newInfo =() =>{
    let newArrmap = arrInp.map(input => input.value);
    let values = arr;
    console.log(values)
    if(newArrmap.some(item => item.trim()=== '')){
        output.innerHTML = `Введіть дані`
    }
    else if(arr.length <=4){
        output.innerHTML = `Значення інпутів ${values.join(', ')}`
    }else{
        output.innerHTML = `Значення інпутів ${values.join(', ')}`
        arr.length = 0;
    }

}


arrInp.forEach(input =>{
    input.addEventListener('change',(ev)=>{
        let val = ev.target.value
        
        arr.push(val)
        console.log(val)
        newInfo()
    })
    return arr
})





