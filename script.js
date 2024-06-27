let allbuttons = document.querySelectorAll("button")
let screen = document.querySelector(".output")

let data = []


allbuttons.forEach((button) => {
    button.onclick = function(){
        

        if(button.innerText == "="){
            screen.innerText = eval(data.join(""))
        }
        else if(button.innerText == "AC"){

            data = []
            screen.innerText = 0
        }
        else if(button.innerText == "DEL"){
            data.pop()
            
            if(data.length == 0){
                screen.innerText = 0
            }else{
                screen.innerText = data.join("")
            }

        }
        else{
            data.push(button.innerText)

            screen.innerText = data.join("")
        }



        
    }
} )