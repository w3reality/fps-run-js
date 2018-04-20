class Anim {
    constructor(opts={}) {
        this.stopped = false;
        this.frameCount = 0;
        this.fpsInterval = null;
        this.startTime = null;
        this.then = null;
        this.animFunc = null;
        this.log = opts.log;
        this.logFunc = opts.logFunc;
        // animate(now) is recursively called by rAF(), so
        // to preserve "this" pointing to the class instance,
        // define animate() in constructor with the => syntax
        this.animate = (now) => {
            // console.log('animate(): called')
            if (this.stopped) return;

            // request another frame
            requestAnimationFrame(this.animate);

            // calc elapsed time since last loop
            let elapsed = now - this.then;
            // if enough time has elapsed, draw the next frame
            if (elapsed > this.fpsInterval) {
                // Get ready for next frame by setting then=now, but...
                // Also, adjust for fpsInterval not being multiple of 16.67
                this.then = now - (elapsed % this.fpsInterval);

                // draw stuff here
                this.animFunc();

                if (this.log) {
                    // #seconds since start and achieved fps.
                    let sinceStart = now - this.startTime;
                    let currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
                    let msg = "Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.";
                    let log = this.logFunc ? this.logFunc : console.log;
                    log(msg);
                }
            }
        };
    }
    start(f, fps) {
        this.animFunc = f;
        this.fpsInterval = 1000 / fps;
        this.then = window.performance.now();
        if (this.log) {
            this.startTime = this.then;
        }
        this.animate();
    }
    stop() {
        this.stopped = true;
    }
}
