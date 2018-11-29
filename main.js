$(document).ready(function() {
    $("#tresc").focus(function() {
        $(this).prop("value", "");
    });
    $("#nazwa").focus(function() {
        if($(this).val() == "Podaj swoje imie")
            $(this).prop("value", "");
    });
    $("#nazwa").focusout(function() {
        if($(this).val() == "")
            $(this).prop("value", "Podaj swoje imie");
    });
    $("#tresc").focusout(function() {
        if($(this).val() == "")
            $(this).prop("value", "Napisz coś ...");
    });
    
    $("#tresc").keydown(function(event) {
        if(event.which == 13) {
            $("#wyslij").click();
        }
    });
    $("#wyslij").click(function() {
        imie = $("#nazwa").val();
        tekst = $("#tresc").val();
        $.ajax({
            type: "post",
            url: "wyslij.php",
            data: {
                nazwa: imie,
                tresc: tekst
            }
        })
        .done(function(response) {
            $("#tresc").prop("value", "Napisz coś ...");
        })
        .fail( function(error) {
            alert(error.status);
        });
    });
    setInterval(function() {
    $.ajax({
        type: "post",
        url: "odczytaj.php"
    })
    .done(function(response) {        
        $("#rozmowa").empty();
        stare_wiadomosci = JSON.parse(response);
        stare_wiadomosci.forEach(el => {
            $("#rozmowa").append("<div class = 'watek'><div class = 'imie'> " + el.nazwa + "</div><div class = 'tresc'>" + el.tresc + "</div></div>");
        });
        console.log("Pobrano dane");
    });}, 200);
});
