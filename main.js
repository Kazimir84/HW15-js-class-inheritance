function Clock() {
  this.getTime = function() {
      return new Date();
    };
    this.start = function () {
        setInterval(this.render.bind(this), 250);
    };
    
    
    this.clockTime = document.getElementById('clockTime');

    this.render = function() {
        this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();
        this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();
        this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();

        if (this.clockTime.classList.contains('fullFormat')) { 
            this.clockTime.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;    
        } else {
            this.clockTime.innerHTML = this.hours + ":" + this.minutes; 
        }; 
    };     
};

clockTime.addEventListener('click', () => {this.format()});

this.format = function() { 
    if (this.clockTime.classList.contains('fullFormat')) {       
        clockFullFormat.render();
        this.clockTime.classList.remove('fullFormat');        
    } else {
        clockShortFormat.render();
        this.clockTime.classList.add('fullFormat')        
    }; 
};   

function ClockFullFormat(){
    Clock.call(this);   
};

function ClockShortFormat(){
    Clock.call(this);    
    this.render = function () {       
        this.clockTime.innerHTML = this.getTime().getHours() + ':' + this.getTime().getMinutes();        
    }; 
};
let clock = new Clock();
clock.start();

ClockFullFormat.prototype = new Clock();
ClockShortFormat.prototype = new Clock();

let clockFullFormat = new ClockFullFormat();
let clockShortFormat = new ClockShortFormat();

// let fullFormat = clockFullFormat.start();
// let shortFormat = clockShortFormat.start();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++