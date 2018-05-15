function populateSuccessWell() {

        var randomSuccess = Math.floor(Math.random() * successAffirmations.length);

        $("#affirmations-view").empty();
        var successWell = $("<div>");
        successWell.addClass("success-well-class");
        successWell.attr("data-well", successAffirmations[randomSuccess]);
        successWell.text(successAffirmations[randomSuccess]);
        $("#affirmations-view").append(successWell);
    }

    $("#success-btn").on("click", function () {
        populateSuccessWell();
        //$("#success-well").dialog("open");
    });