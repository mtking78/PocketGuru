//starter code

$(function () {

    // Create task in the database.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var userId = $(this).data("user.Id");
        var newTask = {
            task_name: $("#newtask").val().trim(),
            category: $("#category").val().trim(),
            completed: 0,
            value: $("#value").val().trim(),
            estimated_time: $("#time").val().trim(),
            userId: userId
        };

        $.ajax("/exercise/create", {
            type: "POST",
            data: newTask
        }).then(function () {
            console.log("You've added a task!");
            location.reload();
        });
    });

    // Update task to true on completed.
    $(".complete").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var taskStatus = {
            completed: true
        }

        // Send the PUT request.
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: taskStatus
        }).then(function () {
            console.log("Task completed");
            location.reload();
        });
    });

    // Delete task from the database.
    $(".remove").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/tasks/" + id
        }).then(location.reload());
    });

});

$(document).ready(function() {
    // Specific call to find sum of exercise points
    $.get("/exercise/points", function(data) {
        console.log("Sum of exercise points: " + data);
        $("#sumdisplay").empty();
        if (!data) {
            $("#sumdisplay").html("Get to work, slacker!");
        } else {
            $("#sumdisplay").html(data);
        }
    });

    // Check if any incomplete tasks exist
    $.get("/exercise/alltasks", function (data) {
        console.log(data);
        if (data) {
            console.log("Not done yet.");
        } else {
            console.log("All done.");
        }
    });
});
