// heart count functionality
let heartCount = 0
const heartButtons = document.querySelectorAll('.heart-btn');
for(const heartButton of heartButtons){
    heartButton.addEventListener('click',function(){
        heartCount ++;
        document.getElementById('count').innerText = heartCount


    })
}

//copy button functionality
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCount = document.getElementById('copy-count');
let copy = 0;

for (const copyButton of copyButtons){
    copyButton.addEventListener('click',function(){
        const card = copyButton.closest('.card')
        const serviceName = card.querySelector('h1').innerText
        const serviceNumber = card.querySelector('h3').innerText
        navigator.clipboard.writeText(serviceNumber)
        alert(`Number copied.. :${serviceNumber}`)
        copy ++
        copyCount.innerText=copy
    })
}

