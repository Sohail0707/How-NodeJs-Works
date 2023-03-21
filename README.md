## NodeJs

NodeJs depends on google <b>V8</b> engine and <b>Libuv</b>. V8 helps NodeJs to understand JavaScript code. Libuv provides a huge library to get access to the network, operating file system etc.<br/>

<h3>Libuv</h3>
Libuv implements two extremely importent features. <b>Event Loop</b> and <b>Thread Pool</b>.<br/>
Event Loop is used to handle simple tasks like callback function, Network I/O etc. Thread Pool used to handle havier tasks like accessing files.<br/>
** Libuv is made of C++

<h4>Event Loop</h4>
Node uses a single thread to execute code. Node first executes top level codes like Initialise Modules, Functions that registered outside the callback function. Then it take help of the Event Loop. Every code that is not the top level code, and the codes that is inside the callback function are executed by the Event Loop.

<h4>Thread Pool</h4>
If the task is havier, then Event Loop offloads the task to the Thread Pool. Thread Pool has 4 main threads. But we can configure it up to 120 threads. Usually we don't need that.
