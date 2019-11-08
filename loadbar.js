// index.js
const process = require("process");
const rdl = require("readline");
class LoadingBar {
    constructor(size) {
        this.size = size
        this.cursor = 0
        this.timer = null
        this.progress = 0;
    }
    start() {
        process.stdout.write("\x1B[?25l")
        for (let i = 0; i < this.size; i++) {
            process.stdout.write("\u2591")
        }

        rdl.cursorTo(process.stdout, this.cursor);
        this.timer = setInterval(() => {
            rdl.cursorTo(process.stdout, this.cursor);
            while ((this.cursor / this.size * 100) <= this.progress) {
                this.cursor++;
                process.stdout.write("\u2588");
            }
            if (this.cursor >= this.size) {
                clearTimeout(this.timer)
            }

            rdl.cursorTo(process.stdout, this.size + 2);
            process.stdout.write(this.progress + "%");

        }, 250);
    }
    setProgress(a) {
        this.progress = a;
    }
}

const ld = new LoadingBar(50)
ld.start()
var p = 0;
var foo = setInterval(() => {
    ld.setProgress(p += 1);
    if (p >= 100) {
        clearInterval(foo);
    }
}, 250);