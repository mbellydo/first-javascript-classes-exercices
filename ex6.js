class StopWatch {
    constructor() {
        this.secondsElapsed = 0;
  
        //Finish implementing the rest of the constructor so that secondsElapsed is updated
        setInterval(() => {
            this.secondsElapsed++
        }, 1000)
    }
  
    getTime() {
        return `Seconds elapsed: ${this.secondsElapsed}`;
    }
}

const stopWatch = new StopWatch();

// Wait a few seconds...

stopWatch.getTime();
// 'Seconds elapsed: 3'

// Wait a few more seconds...

stopWatch.getTime();
// 'Seconds elapsed: 7'