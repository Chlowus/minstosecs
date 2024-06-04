let m2sVal1 = document.querySelector('#m2s_val1');
let m2sButn = document.querySelector('#m2s_butn');
let m2sPara = document.querySelector('#m2s_para');


m2sButn.addEventListener('click', ()=>{
    m2sPara.innerHTML = [(m2sVal1.value*60) + ' Seconds']
})