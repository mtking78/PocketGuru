//starter code

$(function () {

    // Create task in the database.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTask = {
            task_name: $("#newtask").val().trim(),
            category: $("#category").val(),
            completed: 0,
            value: $("#value").val().trim(),
            estimated_time: $("#time").val().trim(),
        };

        $.ajax("/api/tasks", {
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
    $(".remove").on("click", function(event) {
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
    // Summarize points earned from completed tasks
    function addExercisePoints() {
        connection.query("SELECT category='Exercise', SUM(value) FROM lifecoach_db.tasks WHERE(completed='1')", function(err, res) {
            if (err) throw err;

            var sum = res.SUM(value);
            $("#sumdisplay").html(sum);
        });
    };
})