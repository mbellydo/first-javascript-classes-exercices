class RunningTotal {
    constructor() {
        this.currentTotal = 0;
    }
  
    add(n) {
        // Implement this method
        this.currentTotal = n + this.currentTotal
        console.log(this.currentTotal)
    }
    getTotal() {
        // Implement this method
        return this.currentTotal
    }
}
  
const runningTotal = new RunningTotal();

runningTotal.add(3);
runningTotal.add(7);
runningTotal.add(7);
runningTotal.getTotal();
// 17