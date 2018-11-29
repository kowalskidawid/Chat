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
        $(this).prop("value", "Napisz coś ...");
    });
    
    $("#tresc").keydown(function(event) {
        if(event.which == 13)
            $("#wyslij").click();
    });
    $("#wyslij").click(function() {
        imie = $("#nazwa").val();
        tekst = $("#tresc").val();
        $.ajax({
            type: "post",
            url: "wyslij.php",
            dataType: "json",
            data: {
                nazwa: imie,
                tresc: tekst
            }
        })
        .done(function(response) {
            console.log(response);
        })
        .fail(function() {
            console.log("błąd");
        });
    });
});
