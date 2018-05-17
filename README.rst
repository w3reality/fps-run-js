fps-run-js
==========

A JavaScript utility class that enables fps-throttled function execution.
Internally, ``requestAnimationFrame()`` is arranged to execute a user-provided
function at a specified fps.  The code is based on `this Stack Overflow discussion`_ and
its related `JSFiddle demo`_.  Node.js support was added using ``setImmediate()`` instead
of ``requestAnimationFrame()``.

.. _this Stack Overflow discussion: https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe/19772220#19772220
.. _JSFiddle demo: http://jsfiddle.net/nRpVD/184/

The module is compiled as a `UMD (Universal Module Definition)`_ module.
So it can be consumed by script-tags, AMD loading (require.js), and Node.js.

.. _UMD (Universal Module Definition): https://github.com/umdjs/umd

Usage
-----

``npm install fps-run-js``, load ``fps-run.js`` and in code:

.. code::

    fr = new FpsRun(); // create a runner
    fr.start(f, 5); // execute function f() at 5 fps
    //...
    fr.stop(); // stop execution

Live Demos 🔥
--------------

- `demo-logging`_: Executing a function at 5 fps for 4 seconds (`index.html <https://github.com/w3reality/fps-run-js/blob/master/examples/demo-logging/index.html>`__)
- `demo-threejs`_: Rendering 3D graphics at 20 fps for 8 seconds using three.js (`index.html <https://github.com/w3reality/fps-run-js/blob/master/examples/demo-threejs/index.html>`__)
- `demo-comp`_: Rendering rotating cubes at 5, 10, and 20 fps, respectively (`index.html <https://github.com/w3reality/fps-run-js/blob/master/examples/demo-comp/index.html>`__)

.. _demo-logging: https://w3reality.github.io/fps-run-js/examples/demo-logging/
.. _demo-threejs: https://w3reality.github.io/fps-run-js/examples/demo-threejs/
.. _demo-comp: https://w3reality.github.io/fps-run-js/examples/demo-comp/

Build
-----

.. code::

   $ npm install  # set up build tools
   $ npm run build  # generate module files in lib/
