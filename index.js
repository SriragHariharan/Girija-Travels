//Form validation starts here

// Document is ready
$(document).ready(function () {
  // Validate Username
  $("#name").keyup(function () {
    validateUsername();
  });

  $("#message").keyup(function () {
    validateMessage();
  });

  function validateUsername() {
    let usernameValue = $("#name").val();
    if (usernameValue.length == "") {
      $("#nameError").html("Enter your name");
    } else if (usernameValue.length < 2) {
      $("#nameError").html("Please enter 2 characters");
    } else {
      $("#nameError").html("");
    }
  }

  function validateMessage() {
    let msg = $("#message").val();
    if (msg.length == "") {
      $("#msgError").html("No queries and messages about Palakkad ??")
    }
    else if (msg.length < 5) {
      $("#msgError").html("Only this Much ??");
    }
    else {
      $("#msgError").html("");
    }
  }

});
