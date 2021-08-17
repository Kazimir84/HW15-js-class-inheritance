function Clock() {
  this.getTime = function() {
      return new Date();
    };
    this.start = function () {
        setInterval(this.render.bind(this), 250);
    };
    
    clockTime.addEventListener('click', () => {this.format()});
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
    this.format = function() {
        this.clockTime.classList.toggle('fullFormat'); 
    };    
};

function ClockFullFormat(){
    Clock.call(this);   
};

function ClockShortFormat(){
    Clock.call(this);    
    this.render = function () {
        if (this.clockTime.classList.contains('fullFormat')) {
            this.clockTime.innerHTML = this.getTime().getHours() + ':' + this.getTime().getMinutes(); 
        } else {
            this.clockTime.innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes() + ":" + this.getTime().getSeconds();
        };
    }; 
};
let clock = new Clock();
// clock.start();

ClockFullFormat.prototype = new Clock();
ClockShortFormat.prototype = new Clock();

let clockFullFormat = new ClockFullFormat();
let clockShortFormat = new ClockShortFormat();

// let fullFormat = clockFullFormat.start();
let shortFormat = clockShortFormat.start();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++