function searchForm() {
    // code here
    return {
        run: function() {
            $.getJSON(JSON_FILE, global().setBD);

            $('#fch-input').keyup(function(e) {
                if($(this).val().length > 2) {
                    $('#fch-button').prop('disabled', false);
                } else {
                    $('#fch-button').prop('disabled', true);
                }

                if(e.keyCode == 13) {
                    if(!$('#fch-button').prop('disabled')) {
                        global().buildResult($(this).val());
                    }
                }
            });

            $("#fch-button").click(function(event) {
                global().buildResult($('#fch-input').val());
            });
        }
    };
}