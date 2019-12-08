let msg = document.getElementById('msg');
let name = document.getElementById('name');
let btnSend = document.getElementById('btn-send');

btnSend.addEventListener('click', sendInputForm);

function sendInputForm(){
    if(name.value.length == 0){
        msg.innerHTML = '';
    } else if(name.value.length <= 5 && name.value.length > 0){
        msg.innerHTML = 'Failed input data!';
        msg.style.color = 'red';
    } else {
        msg.innerHTML = 'Successfully save input data!';
        msg.style.color = 'green';
    }
}
