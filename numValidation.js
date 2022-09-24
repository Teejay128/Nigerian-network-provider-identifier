let number = document.querySelector('#number');
let submit = document.querySelector('#btn'); 
let clear = document.querySelector('#clear'); 
let mtn = document.querySelector('#mtn');
let airtel = document.querySelector('#airtel');
let glo = document.querySelector('#glo');
let nineMobile = document.querySelector('#nineMobile'); 
let details = document.querySelector('#details'); 

submit.addEventListener('click', submitAction);
clear.addEventListener('click', clearSection);


function createMessage(message, color) {
    const msg = document.querySelector('#firstText');
    msg.textContent = message;
    msg.style.backgroundColor = color;
}
function displayCarrierInfo(carrier){
    document.querySelector('.text').style.display = 'none'
    document.querySelector('.mtn').style.display = 'none'
    document.querySelector('.airtel').style.display = 'none'
    document.querySelector('.glo').style.display = 'none'
    document.querySelector('.nineMobile').style.display = 'none'
    document.querySelector(carrier).style.display = 'block'
}

function highlightActive(carrier){
    mtn.firstElementChild.className = 'inactive'
    airtel.firstElementChild.className = 'inactive'
    glo.firstElementChild.className = 'inactive'
    nineMobile.firstElementChild.className = 'inactive'
    carrier.firstElementChild.className = 'active'
}

function clearSection(){
    number.value = ''
    // reload page****
}

function verifyNumber(phoneNumber){
    // let inputNumber = number.value;
    // console.log(inputNumber)

    let carrierPrefix = phoneNumber.slice(0, 4);
    // console.log(carrierPrefix)
    let NetworkNumbers = {
        MTN : ['0803', '0706', '0703', '0704', '0806', '0810', '0813', '0814', '0816', '0906', '0903', '0913'],
        GLO : ['0805', '0807', '0811', '0705', '0815', '0905'],
        AIRTEL : ['0802', '0808', '0812', '0701', '0708', '0902', '0907', '0901'],
        ETISALAT : ['0809', '0817', '0818', '0908', '0909']
    }

    let element;

    for(let prop in NetworkNumbers){
        NetworkNumbers[prop]
        for(let numb in NetworkNumbers[prop]){
            if(NetworkNumbers[prop][numb] == carrierPrefix){
                element = prop
            }
        }
    };


    switch (element) {
        case 'MTN':
            displayCarrierInfo('.mtn')
            createMessage('MTN: Everywhere you go', '#da1')
            highlightActive(mtn)
            break;
        case 'AIRTEL':
            displayCarrierInfo('.airtel')
            createMessage('Airtel: Smartphone Network', '#f21')
            highlightActive(airtel)
            break;
        case 'GLO':
            displayCarrierInfo('.glo')
            createMessage('GLO: Grandmasters of Data', '#1a1')
            highlightActive(glo)
            break;
        case 'ETISALAT':
            displayCarrierInfo('.nineMobile')
            createMessage('9mobile: 0809ja for life', '#af3')
            highlightActive(nineMobile)
            break
        default:
            displayCarrierInfo('.text')
            createMessage('The number you entered is invalid!', '#f12d')
            break
    }
}
        
function submitAction(){
    let inputNumber = number.value;

    if(inputNumber == ''){
        displayCarrierInfo('.text')
        createMessage('Please input a number in the field below', '#f12d')
    }else if(inputNumber.length == 11){
        verifyNumber(inputNumber)
    }else if(inputNumber.slice(0, 5) == '+2340'){
        let digits = inputNumber.slice(4)
        verifyNumber(digits)
    }else if(inputNumber.slice(0, 4) == '+234'){
        let digits = '0' +inputNumber.slice(4)
        verifyNumber(digits)
    }else{
        verifyNumber(inputNumber)
    }
}