// heart count functionality
let heartCount = 0
const heartButtons = document.querySelectorAll('.heart-btn');
for(const heartButton of heartButtons){
    heartButton.addEventListener('click',function(){
        heartCount ++;
        document.getElementById('count').innerText = heartCount


    })
}
