$(document).ready(function() {

    $('#btn').click(function() {
        let userInputedChoice = $('#choice').val();

        $.ajax({
            url: 'https://wizard-world-api.herokuapp.com/Houses',
            method: 'GET',
            success: function(response) {
                console.log(response);
                if(userInputedChoice == response[0].name) {
                    $('#answer').text('Kuca postoji')
                } else if(userInputedChoice == response[1].name) {
                    $('#answer').text('Kuca postoji')
                } else if (userInputedChoice == response[2].name) {
                    $('#answer').text('Kuca postoji')
                } else if (userInputedChoice == response[3].name) {
                    $('#answer').text('Kuca postoji')
                } else {
                    $('#answer').text('Kuca nepostoji')
                }
            }
        })
    })

})