const ques = document.querySelector(".ques")
const form = document.querySelector(".form")
const input = document.querySelector("#input")
    let stores;


    function randomNumber (min , max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        console.log(random)
    }


    function genaredFun (){
       let ran1=  randomNumber(1, 10)
       let ran2 = randomNumber(1, 10)
       let que = `Question. What is ${ran1} multiply by ${ran2}?`
       let ans = ran1 * ran2
       return {que, ans}
    }


    function showQue (){
        let {que, ans} = genaredFun()
        ques.innerText = que
        stores = ans
    }
    showQue()



