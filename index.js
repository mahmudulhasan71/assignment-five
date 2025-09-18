
// heart count functionality
let heartCount = 0
const heartButtons = document.querySelectorAll('.heart-btn');
for (const heartButton of heartButtons) {
    heartButton.addEventListener('click', function () {
        heartCount++;
        document.getElementById('count').innerText = heartCount


    })
}

//copy button functionality
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCount = document.getElementById('copy-count');
let copy = 0;

for (const copyButton of copyButtons) {
    copyButton.addEventListener('click', function () {
        const card = copyButton.closest('.card')
        const serviceName = card.querySelector('h1').innerText
        const serviceNumber = card.querySelector('h3').innerText
        navigator.clipboard.writeText(serviceNumber)
        alert(`Number copied.. :${serviceNumber}`)
        copy++
        copyCount.innerText = copy
    })
}

// call button functionality
const callButtons = document.querySelectorAll('.call-btn');

const callCount = document.getElementById('call-count')
const history = document.getElementById('history')
let coin = 100;
for (const callButton of callButtons) {
    callButton.addEventListener('click', function () {


        if (coin < 20) {
            alert("You don't have enough coin!You need at least 20 coins to make a call.")

        }
        else {


            const card = callButton.closest('.card')
            const serviceName = card.querySelector('h1').innerText
            const serviceNumber = card.querySelector('h3').innerText
            alert(`Calling.. :${serviceNumber}`)

            coin -=20
            callCount.innerText=coin;

        }

    })
}

