//starter code

$(function () {

    // Create burger in the database.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
            //sets default to false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
                console.log("You've added a burger!");
                location.reload();
        });
    });

    // Update burger to true on devoured.
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function () {
            console.log("You devoured that burger like a beast");
            location.reload();
        });
    });

    // Delete burger from the database.
    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

});