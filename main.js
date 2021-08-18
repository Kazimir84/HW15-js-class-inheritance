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

// ++++++++++++++++++++++ 2 вариант +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function Clock() {   
        this.currTime = new Date(); 
  this.getTime = function() {return new Date()};
        this.start = function () {
            setInterval(this.render.bind(this), 1000);
            document.getElementById('clockTime').addEventListener('click', () => {document.getElementById('clockTime').classList.toggle('fullFormat');}); 
        };
        this.stop = function () {
            document.getElementById('clockTime').innerHTML = this.currTime.getHours() + ':' + this.currTime.getMinutes() + ':' + this.currTime.getSeconds();
        };
};

Clock.prototype.render = function() {  
    this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
    this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();  
    this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();         
  document.getElementById('clockTime').innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;          
};

function clockFullFormat(){
    Clock.call(this);
    this.render = function () {
        document.getElementById('clockTime').innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes() + ":" + this.getTime().getSeconds();         
    };
    
};

function clockShortFormat(){
    Clock.call(this);
    this.render = function () {
        document.getElementById('clockTimeSF').innerHTML = this.getTime().getHours() + ":" +this.getTime().getMinutes();  
        }
};
clockFullFormat.prototype, clockShortFormat.prototype = new Clock();


let z = new Clock();
let h = new clockFullFormat();
let i = new clockShortFormat();
h.start();
i.start();

let clockContainerFF = document.getElementById('clockTime');
let clockContainerSF = document.getElementById('clockTimeSF');
document.getElementsByClassName('shortFormat')[0].style.display = 'none';

clockContainerFF.addEventListener('click', () => {
        document.getElementsByClassName('shortFormat')[0].style.display = 'block';
        document.getElementsByClassName('fullFormat')[0].style.display = 'none';
}); 

 clockContainerSF.addEventListener('click', () => {
        document.getElementsByClassName('shortFormat')[0].style.display = 'none';
        document.getElementsByClassName('fullFormat')[0].style.display = 'block';
});
