const turnOn = document.querySelector('#on-btn');
const turnOff = document.querySelector('#off-btn');
const bulbImg = document.querySelector('#bulbImg')


const turnOntheLight = () => {
    console.log("hgvfh")
    bulbImg.src = '/ONbulb.jpg';
}
const turnOfftheLight = () => {
    console.log("hgerdfcevfh")
    bulbImg.src = '/OFFbulb.jpg'
}


turnOn.addEventListener('click', turnOntheLight);
turnOff.addEventListener('click', turnOfftheLight);
turnOfftheLight();