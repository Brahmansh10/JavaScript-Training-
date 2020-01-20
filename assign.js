let timers = [];

function begin() {
    var number = document.getElementById("number").value;
    for (let i = 0; i < number; i++) {
        let str = "player";
        let str2 = "speed";
        let str3 = "car";
        var divi = document.createElement("div");
        var field = document.createElement("input");
        //let speedId = (str2.concat((i + 1).toString()));
        //let carId = (str3.concat((i + 1).toString()));
        field.id = str2.concat((i + 1).toString());
        field.defaultValue= 10;
        divi.id = str3.concat((i + 1).toString());
        field.type = "text";
        field.placeholder="Enter Speed";
        field.classList.add("text1");
        divi.classList.add("divi1");
        document.getElementById(str.concat((i + 1).toString())).appendChild(field);
        document.getElementById(str.concat((i + 1).toString())).appendChild(divi);
    }
}

function start(flag) {


    var number = document.getElementById("number").value;
    for (let i = 0; i < number; i++) {
        // let str="player";
        let str2 = "speed";
        let str3 = "car";

        let speed1 = document.getElementById(str2.concat((i + 1).toString())).value;
        //console.log(speed1);
        let car1 = document.getElementById(str3.concat((i + 1).toString()));
        let pos = 0;
        let testSpeed = (1 / speed1) * 600;
        //console.log(testSpeed);
        let animate = setInterval(move, testSpeed);
        timers.push(animate);
        var count = 0;
        function move() {

            if (count === 0) 
            {
                if (pos === 1000) {
                    alert('Player ' + (i + 1) + ' has won');
                    count++;

                    clearInterval(animate);
                }
                else {
                    pos++;
                    car1.style.left = pos + "px";
                }
            }
            else
                clearInterval(animate);
        }
    }
}

function stop() {
    timers.forEach(timer => clearInterval(timer));
}