var roll = document.getElementById("roll-button");
var images = document.getElementsByClassName("imb");
var rotation = 0;
var speed = 25; // Скорость вращения (градусов в секунду)
var animationIds = [];
var textbet = document.querySelector(".betbalance");
var textbalance = document.querySelector(".balance");
var textwin = document.querySelector(".winm");
var bet = 100;
var balance = 10000;
var totalImages = images.length; // Общее количество изображений
var imagesStopped = 0; // Количество изображений, которые закончили вращение
var freeSpins = 0;
// Устанавливаем начальные значения текста
textbet.textContent = "Bet: " + bet;
textbalance.textContent = "Balance: " + balance;
function main(){
 if(freeSpins>0){
    
    

    
    textbet.textContent = "Ставка: " + bet;
    textbalance.textContent = "Баланс: " + balance;
    
    showMessage(freeSpins);
    freeSpins--;
    // Отключаем кнопку "roll", чтобы предотвратить множественные клики
    roll.disabled = true;

    // Начинаем вращение слотов

    setTimeout(rollfun(),2000) ;
}
else{
    if (balance - bet < 0) {
        textwin.textContent=("Недостаточный баланс. Пожалуйста, уменьшите сумму ставки.");
        return;
    }
    balance -= bet;
    textbet.textContent = "Ставка: " + bet;
    textbalance.textContent = "Баланс: " + balance;

    // Отключаем кнопку "roll", чтобы предотвратить множественные клики
    roll.disabled = true;

    // Начинаем вращение слотов
    rollfun();
}
    
    
}
var chansetrue = 0;
function rollfun() {
    chansetrue = Math.floor(Math.random()*100);
    console.log(chanse);
        roll.disabled = true;
        for (const image of images) {
            image.classList.remove("with");
        }
        textwin.textContent="Win: "+"0";
        coll = 0;
        animationIds = []
        var i = 0;
        for (const image of images) {
            var animationId = setInterval(function () {
                rotate(image);
            }, 13);
            animationIds.push(animationId);
        }
        for (const image of images) {
            var random = Math.floor(Math.random() * 500)
            setTimeout(() => {
                stop(i);
                i++;
            }, random);
        }
    
}

function rotate(image) {
    rotation += speed / 60; // Увеличиваем угол вращения в зависимости от скорости и частоты обновления
    image.style.transform = 'rotateX(' + rotation + 'deg)'; // Вращение по горизонтали
}

function stop(numimg) {
    var randomstop = Math.floor(Math.random() * 100)
    setTimeout(() => {
        clearInterval(animationIds[numimg]);
        images[numimg].style.transform = 'rotateX(100deg)';
        getwin(numimg);
        for (var x = 100; x >= 0; x--) {
            setTimeout(() => {
                images[numimg].style.transform = 'rotateX(' + x + 'deg)';
            }, 50)
        }
        // Увеличиваем количество изображений, которые закончили вращение
        imagesStopped++;
        // Если все изображения остановились, разблокируем кнопку
        if (imagesStopped === totalImages) {
            roll.disabled = false;
            // Сбрасываем счетчик
            imagesStopped = 0;
        }
    }, randomstop);
}
var chanse=0
function getwin(numimg){
    var random = Math.floor(Math.random() * 37001);
var image=0;
var numimg=numimg;

switch(true){
    case random<=4000+chanse:
        
        image=1;
        getimage(numimg,image);
        break;
    case random<=(8500+chanse):
        image=2;
        getimage(numimg,image);
        break;
    case random<=(13000+chanse):
        image=3;
        getimage(numimg,image);
        break;
    case random<=(16500+chanse):
        image=4;
        getimage(numimg,image);
        break;
    case random<=(20000+chanse):
        image=5;
        getimage(numimg,image);
        break;
    case random<=(23500+chanse):
        image=6
        getimage(numimg,image);
        break;
    case random<=(27000+chanse):
        image=7;
        getimage(numimg,image);
        break;
    case random<=(31500+chanse):
        image=8;
        getimage(numimg,image);
        break;
    case random<=(35000+chanse):
        image=9;
        getimage(numimg,image);
        break;
    case random<=(36500+chanse):
        image=10;
        getimage(numimg,image);
        break;
    default:
        image="x"
        getimage(numimg,image);
        
        break;
}
    
    if(random<=37000){
        coll++;
        
    }
    if(coll==35){
        win();
        }
    
}
var imageSources = {};
function win(){
    winner=0
    imageSources = {};
        for (var i = 0; i < images.length; i++) {
            var src = images[i].getAttribute("alt");
            // Если источник изображения уже встречался, увеличиваем счетчик на 1
            if (imageSources[src]) {
                imageSources[src]++;
            } else {
                // Иначе, если источник изображения встречается впервые, инициализируем счетчик в 1
                imageSources[src] = 1;
            }
        }
        
        // Выводим результаты
        for (var src in imageSources) {
            
            takewin(src, imageSources[src])
            
        }
        
        
        
}
var winner=0
function takewin(number, count){
if(count>=10&number!="x"){
    if(chanse<50000){
    chanse = Math.floor(Math.random() * 10000);
    }
    console.log(number+" выпал "+ count+ " раз");
    for (const image of images) {
        var type = image.getAttribute('alt');
        if (type === number) {
            image.classList.add("with");
            
        }
    }
    if(count<=14){
    winner=winner+(bet*number+(1+count/0.1));
    balance=balance+winner;
    textbet.textContent="Bet: "+bet;
    textbalance.textContent ="Balance: "+balance;
    textwin.textContent="Win: "+winner;
    }
    else if(count>=15){
    winner=winner+(bet*number+(count*20));  
    balance=balance+winner;
    textbet.textContent="Bet: "+bet;
    textbalance.textContent ="Balance: "+balance;
    textwin.textContent="Win: "+winner;  
    }
    console.log(winner);
}

if(count>=20&number=="x"){
    addFreeSpins(count);
}


}    

function getimage(numimg,image){
    
    images[numimg].setAttribute("src","image/"+image+".png");
    images[numimg].setAttribute("alt",image);

}
function addFreeSpins(count) {
    freeSpins += count;
    showMessage("You win free spin's: "+ freeSpins);
}
function showMessage(message) {
    var overlay = document.getElementById('overlay');
    var messageText = document.getElementById('message-text');
    overlay.style.display = 'block';
    messageText.textContent = message;

    // Закрытие сообщения через 5 секунд
    setTimeout(function() {
        closeMessage();
    }, 5000); // 5000 миллисекунд = 5 секунд
}

// Функция для закрытия сообщения
function closeMessage() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
//Присвоение кнопкам 
roll.addEventListener("click", main)

