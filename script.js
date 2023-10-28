const ques = document.querySelector(".ques")
const form = document.querySelector(".form")
const input = document.querySelector("#input")
let scorenum = document.querySelector(".scorenum")
let getlocal = localStorage.getItem("score")

    let totalans;
    let score = 0;
    function randomNumber (min , max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        console.log(random)
    }


    function genaredFun (){
       let ran1=  randomNumber(1, 20)
       let ran2 = randomNumber(1, 10)
       let questionType = randomNumber(1, 4)
      
       let firstNum;
       let lastnum;
       if(ran1 > ran2 && questionType > 2){
        firstNum = ran1
        lastnum = ran2
        }else{
        firstNum = ran2
        lastnum = ran1
        }

       let que;
       let ans;
      
        switch(questionType){
            case 1:
                que = `Question. What is ${firstNum} multiply by ${lastnum}?`
                ans = firstNum * lastnum
                break
            case 2:
                que = `Question. What is ${firstNum} add ${lastnum}?`
                ans = firstNum + lastnum
                break
            case 3:
                que = `Question. What is ${firstNum} Divided by ${lastnum}?`
                ans = firstNum / lastnum
                break
            case 4:
                que = `Question. What is ${firstNum} subtract by ${lastnum}?`
                ans = firstNum - lastnum
                break
        default:
            que = `Question. What is ${firstNum} multiply by ${lastnum}?`
            ans = firstNum * lastnum
        }
       


       return {que, ans}
    }


    function showQue (){
        let {que, ans} = genaredFun()
        ques.innerText = que
        totalans = ans
        scorenum.innerText = getlocal
    }
    showQue()



    function submitFun (event){
        event.preventDefault()   
        let data = new FormData(form)
        let formData = data.get("answer")
        let usernum = +formData
        if(totalans === usernum){
            score++
            Toastify({
                text: "Currect Answer",
                className: "info",
                gravity: "bottom",
                position:"center",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        }else{
            score--;
            Toastify({
                text: "Not match ",
                className: "info",
                gravity: "bottom",
                position:"center",
                style: {
                  background: "linear-gradient(to right, #e33217, #ff001e)",
                }
              }).showToast();
        }
        showQue()
         scorenum.innerText = score
         localStorage.setItem("score", score)
         event.target.reset()
        }
