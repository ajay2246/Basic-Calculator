

let output = document.getElementById("input1");

let calculate = (n) => {
    output.value += n 
}

function clr(){
    output.value = "0"
}

function result() {
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert("enter the valid input")
    }
}

function del(){
    output.value = output.value.slice(0,-1)
}
