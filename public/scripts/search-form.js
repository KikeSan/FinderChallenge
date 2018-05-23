function searchForm() {
    // code here
    document.getElementById('fch-input').addEventListener("keyup", myEventHandler, false);
    var _keypress = 0;

    function myEventHandler(e) {
        _keypress++
        console.log('size: ' + this.value);
        if(_keypress >= 2) {
            document.getElementById('fch-button').removeAttribute("disabled");
        }
        // var keyCode = e.keyCode;
        // console.log(e, keyCode, e.which)
        // if (keyCode == 88) {
        //     console.log("You pressed W!");
        // }
    };
}