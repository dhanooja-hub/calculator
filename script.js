var pointFrequency=1 // no point in textbox

function displayNumber(event){

    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")

    let currentExpression=textBox.value

    let displayNumber=event.target.value

    if(displayNumber=="." && pointFrequency==1){

        pointFrequency=0
    
    }

    else if(displayNumber=="." && pointFrequency==0){

        return
    }

    if(operators.includes(displayNumber) && displayNumber!=".") {

        pointFrequency=1
    }

    let currentExpLastChar=currentExpression.slice(-1)

    if (operators.includes(displayNumber) && operators.includes(currentExpLastChar)){
        
        currentExpression=currentExpression.slice(0,-1)

    }

    textBox.value=currentExpression+displayNumber
  
}


function clearResult(){

    document.querySelector("#result").value=""

}

function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value

    let result=eval(currentExpression)

    document.querySelector("#result").value=result
}

function clearEnd(){

   let currentElement= document.querySelector("#result").value

   let result=currentElement.slice(0,-1)

   document.querySelector("#result").value=result

}