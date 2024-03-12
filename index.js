const boxes = document.querySelectorAll('.box')
const resetBtn = document.querySelector('#reset-btn')
const Nbutton = document.querySelector('#new-button')
const Container = document.querySelector('.msg-container')
const msg = document.querySelector('#msg')

let turnO = true

const winPatterns = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

const reset = ()=>{
    // turnO = true   // ye hara kr bhi ho sakta hai 
    enabled()
    Container.classList.add('hide')
}

boxes.forEach(
    (box) =>{
        box.addEventListener('click', ()=>{
            console.log('I was clicked')
            if(turnO){ //Player O turn
                box.textContent = 'O'
                box.style.color = 'red'
                turnO = false
            }else{//Player X turn
                box.textContent = 'X'
                box.style.color = 'blue'
                turnO = true
            }
            box.disabled = true
            checkWinner();
        })
    }
)

const disabled = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enabled = ()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerHTML = ''
    }
}

const showWinner = (Winner)=>{
    msg.innerHTML = `Congraluation winner is ${Winner}`
    Container.classList.remove('hide')
    disabled()
}

const checkWinner = () =>{
    for(let pattern of winPatterns){

            let pos1val = boxes[pattern[0]].innerHTML
            let pos2val = boxes[pattern[1]].innerHTML
            let pos3val = boxes[pattern[2]].innerHTML

            if(pos1val != '' && pos2val != '' && pos3val != ''){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log('winner', pos1val)
                    showWinner(pos1val)
                }
            }
    }
}

Nbutton.addEventListener('click', reset)
resetBtn.addEventListener('click', reset)



// ye niche wala alag chiz hai ye upper se reliated nhi hai es liye baad me kabhi parshan na hona !!

// const data = (dataid)=>{
//    return new Promise(
//         (resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log('ans', dataid)
//                 resolve('success')
//             }, 4000)
//         }
//     )
// }

// async function named(){
//     console.log('Getting data .... 1')
//     await data(1)
//     console.log('Getting data .... 2')
//     await data(2)
//     console.log('Getting data .... 3')
//     await data(3)
// }

// named()