const declareCont = document.querySelector(".declare");
const resultCont = document.querySelector(".result-container");
const loadCont = document.querySelector(".load-container");
const btnCont = document.querySelector(".btn-container");

function calTime () {
    const doingInput = declareCont.querySelector("#doingGet");
    const timeInput = declareCont.querySelector("#timeGet");
    const resultButton = btnCont.querySelector(".btn");

    const doingResultTxt = resultCont.querySelector("#doingResult");
    const timeResultTxt = resultCont.querySelector("#timeResult");

    resultButton.addEventListener("click", () => {
        if (doingInput.value == "" || timeInput.value == "") {
            alert("값이 입력되지 않았습니다.");
            return
        }
        if (timeInput.value > 23) {
            alert("하루는 24시간 입니다. 현실적인 계획을 세워봅시다.");
            return
        }
        resultCont.classList.add("off");
        loadCont.classList.remove("off");
        window.scrollBy(0, 1200);
        setTimeout(() => {
            loadCont.classList.add("off");
            resultCont.classList.remove("off");
            let calTime = Math.ceil(10000/timeInput.value);
            doingResultTxt.textContent = doingInput.value;
            timeResultTxt.textContent = calTime;
        }, 1800);
    })
}

calTime();