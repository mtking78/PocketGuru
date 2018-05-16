// *** Event handlers for the Book page ***
$(function () {

    // Create book in the database.
    $("#addjournal").on("submit", function (event) {
        alert("you clicked a button");
        event.preventDefault();
        var userId = $(this).data("user.Id");
        var newJournal = {
            title: $("#newjournaltitle").val().trim(),
            body: $("#newjournalbody").val().trim(),
            userId: userId
        };

        $.ajax("/journal/create", {
            type: "POST",
            data: newJournal
        }).then(function () {
            console.log("You've added a journal entry!");
            location.reload();
        });
    });

    // Update book to true on completed.
    $(".completeBook").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var bookStatus = {
            completed: true
        }

        // Send the PUT request.
        $.ajax("/api/books/" + id, {
            type: "PUT",
            data: bookStatus
        }).then(function () {
            console.log("Book completed");
            location.reload();
        });
    });

    // Delete book from the database.
    $(".removeBook").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/books/remove/" + id
        }).then(location.reload());
    });

});