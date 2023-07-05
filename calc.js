<!DOCTYPE html>
<html>
 <head>
    <meta charset="UTF-8" />
    <title>JS Calculator</title>
    <style>
        body { display: flex; height: 100vh; }
        #calculator { 
            margin: auto; 
            padding: 20px;
            background: silver;
            box-shadow: 0 0 10px black;
            border-radius: 10px;
        }
        #display, button {
            width: 100px;
            padding: 10px;
            margin: 10px;
            border: 1px solid gray;
            border-radius: 5px;
            box-shadow: 2px 2px gray;
            font: bold 3em Impact;
            outline: none;
        }
        #display {
            width: 460px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div id="calculator">
        <div class="row">
            <input id="display" type="text" />
        </div>
        <div class="row">
            <button onclick="press('7')">7</button>
            <button onclick="press('8')">8</button>
            <button onclick="press('9')">9</button>
            <button onclick="press('+')">+</button>
        </div>
        <div class="row">
            <button onclick="press('4')">4</button>
            <button onclick="press('5')">5</button>
            <button onclick="press('6')">6</button>
            <button onclick="press('-')">-</button>
        </div>
        <div class="row">
            <button onclick="press('1')">1</button>
            <button onclick="press('2')">2</button>
            <button onclick="press('3')">3</button>
            <button onclick="press('*')">*</button>
        </div>
        <div class="row">
            <button onclick="clear1()">C</button>
            <button onclick="press('0')">0</button>
            <button onclick="calc()">=</button>
            <button onclick="press('/')">/</button>
        </div>
    </div>
    
    <script>
        let display = document.getElementById("display");
    
        function clear1() {
            display.value = "";
        }
        function calc() {
            display.value = eval(display.value);
        }
        function press(x) {
            display.value += x;
        }
    </script>
</body>
