let output = document.getElementById("output");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let stopWatch = {
    initial_time:0,
    x: null,
    start:function() {
       this.x = setInterval(()=>{
        this.initial_time++;
        output.innerHTML = this.initial_time;
       },1000);
    },
    stop:function() {
        clearInterval(this.x);
    },
    reset:function() {
     this.initial_time = 0;
     output.innerHTML = this.initial_time;
    }
}

start.addEventListener("click", function(){
    stopWatch.start();
});
stop.addEventListener("click", function(){
    stopWatch.stop();
});
reset.addEventListener("click", function(){
    stopWatch.reset();
})