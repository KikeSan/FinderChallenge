function searchForm() {
    // code here
    var map = Array.prototype.map;
    loadJSON(JSON_FILE, revisa);

    document.getElementById('fch-input').addEventListener("keyup", myEventHandler, false);
    var _keypress = 0;

    function myEventHandler(e) {
        _keypress++
        //console.log('size: ' + this.value);
        if (_keypress >= 2) {
            document.getElementById('fch-button').removeAttribute("disabled");
        }



    };
}

function revisa(bd) {
    var arrBD = [],
        i;
    for (i = 0; i <= bd.data.length; i++) {
        arrBD.push(bd.data[0].title);
    }
    console.log(bd.data.length);
    console.log(bd.data[0].title);
    console.log(arrBD);
    var input = document.getElementById("fch-input");
    new Awesomplete(input, {
        list: arrBD,
        minChars: 3,
        maxItems: 15,
    });
}