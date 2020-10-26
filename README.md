# fps-run-js

A JavaScript utility class that enables fps-throttled function
execution. Internally, `requestAnimationFrame()` is arranged to execute
a user-provided function at a specified fps. The code is based on
[this Stack Overflow discussion](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe/19772220#19772220)
and its related [JSFiddle demo](http://jsfiddle.net/nRpVD/184/). Node.js
support was added using `setImmediate()` instead of `requestAnimationFrame()`.

The module is compiled as a [UMD (Universal Module Definition)](https://github.com/umdjs/umd) module. So it can be consumed
by script-tags, AMD loading (require.js), and Node.js.

## Usage

`npm install fps-run-js`, load `fps-run.js` and in code:

```js
fr = new FpsRun(); // create a runner
fr.start(f, 5); // execute function f() at 5 fps
//...
fr.stop(); // stop execution
```

## Live Demos 🔥

- [demo-logging](https://w3reality.github.io/fps-run-js/examples/demo-logging/):
    Executing a function at 5 fps for 4 seconds
    ([index.html](https://github.com/w3reality/fps-run-js/blob/master/examples/demo-logging/index.html))
- [demo-threejs](https://w3reality.github.io/fps-run-js/examples/demo-threejs/):
    Rendering 3D graphics at 20 fps for 8 seconds using three.js
    ([index.html](https://github.com/w3reality/fps-run-js/blob/master/examples/demo-threejs/index.html))
- [demo-comp](https://w3reality.github.io/fps-run-js/examples/demo-comp/):
    Rendering rotating cubes at 5, 10, and 20 fps, respectively
    ([index.html](https://github.com/w3reality/fps-run-js/blob/master/examples/demo-comp/index.html))

## Build
-----

```js
$ npm i
$ npm run build
```
