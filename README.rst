fps-anim-js
===========

An es6-JavaScript utility class that enables fps-throttled animation.
Internally, ``requestAnimationFrame()`` is arranged to execute a user-provided
function at a specified fps.  The code is based on `this Stack Overflow discussion`_ and
its related `JSFiddle demo`_.

.. _this Stack Overflow discussion: https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe/19772220#19772220
.. _JSFiddle demo: http://jsfiddle.net/nRpVD/184/


Usage
-----

Load ``fps-anim.js``, then

.. code::

    anim = new Anim(); // create an animator
    anim.start(f, 5); // execute function f() at 5 fps
    //...
    anim.stop(); // stop execution

Live Demos 🔥
--------------

- `demo-logging`_: Executing a function at 5 fps for 4 seconds
- `demo-threejs`_: Rendering 3D graphics at 20 fps for 8 seconds using three.js 

.. _demo-logging: https://w3reality.github.io/fps-anim-js/demo-logging/
.. _demo-threejs: https://w3reality.github.io/fps-anim-js/demo-threejs/

