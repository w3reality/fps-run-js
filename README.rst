fps-run-js
===========

A JavaScript utility class that enables fps-throttled function execution.
Internally, ``requestAnimationFrame()`` is arranged to execute a user-provided
function at a specified fps.  The code is based on `this Stack Overflow discussion`_ and
its related `JSFiddle demo`_.

.. _this Stack Overflow discussion: https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe/19772220#19772220
.. _JSFiddle demo: http://jsfiddle.net/nRpVD/184/


Usage
-----

Load ``fps-run.js``, then

.. code::

    fr = new FpsRun(); // create a runner
    fr.start(f, 5); // execute function f() at 5 fps
    //...
    fr.stop(); // stop execution

Live Demos 🔥
--------------

- `demo-logging`_: Executing a function at 5 fps for 4 seconds (`index.html <demo-logging/index.html>`__)
- `demo-threejs`_: Rendering 3D graphics at 20 fps for 8 seconds using three.js (`index.html <demo-threejs/index.html>`__)
- `demo-comp`_: Rendering rotating cubes at 5, 10, and 20 fps, respectively (`index.html <demo-comp/index.html>`__)

.. _demo-logging: https://w3reality.github.io/fps-run-js/demo-logging/
.. _demo-threejs: https://w3reality.github.io/fps-run-js/demo-threejs/
.. _demo-comp: https://w3reality.github.io/fps-run-js/demo-comp/

Build
-----

.. code::

   $ npm install  # set up build tools
   $ npm run build  # generate module files in lib/
