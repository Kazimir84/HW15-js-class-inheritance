function Clock(){   
        this.currTime = new Date(); 
        this.clockTime = document.getElementById('clockTime')
        this.getTime = function() {
            return new Date()
        };
        this.start = function () {
        this.interval = setInterval(this.render.bind(this), 250);
        };
        this.stop = function () {
            clearInterval(this.interval);
        };
};

Clock.prototype.render = function() {  
    this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
    this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();  
    this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();         

    this.clockTime.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;         
};

function СlockFullFormat(){
    Clock.call(this);
    this.render = function () {
        this.clockTime.innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes() + ":" + this.getTime().getSeconds();          
    };
    
};

function СlockShortFormat(){
    Clock.call(this);
    this.render = function () {
        this.clockTime.innerHTML = this.getTime().getHours() + ":" +this.getTime().getMinutes();      
    }
};

//let clock = new Clock();

let clockFullFormat = new СlockFullFormat();
let clockShortFormat = new СlockShortFormat();

// clockFullFormat.prototype, clockShortFormat.prototype = new Clock();

clockFullFormat.start();

this.clockTime.addEventListener('click', () => {
    this.clockTime.classList.toggle('fullFormat');
    if (this.clockTime.classList.contains('fullFormat')) {   
        clockFullFormat.start();
        clockShortFormat.stop();
    } else {
        clockShortFormat.start();
        clockFullFormat.stop();
    };
});
