$(document).ready(function() {
    $('#sidebar>li').click(function() {
        // Remove active class from all siblings
        $(this).siblings().removeClass('active').children("a").removeClass("bg-mainColor").addClass("hover:bg-gray-100");

        // Add active class and update styles for the clicked item
        $(this).addClass('active').children("a").addClass("bg-mainColor").removeClass("hover:bg-gray-100");
    });
});


$(document).ready(function() {
    // Cache the sidebar element
    var $sidebar = $('#logo-sidebar');

    // Cache the button element
    var $toggleBtn = $('#toggleSidebarBtn');

    // Toggle the sidebar when the button is clicked
    $toggleBtn.on('click', function() {
        $sidebar.toggleClass('-translate-x-full');
    });

    // Hide the sidebar when clicking outside of it
    $(document).on('click', function(e) {
        if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0 && !$toggleBtn.is(e.target) && $toggleBtn.has(e.target).length === 0) {
            $sidebar.addClass('-translate-x-full');
        }
    });
});

$(document).ready(function () {
    // Array to store project details
    var projectDetailsArray = [];

    // Show popup when the "Add Project" button is clicked
    $("#addPrj").click(function () {
        $("#projectPopup").removeClass("hidden");
    });

    // Close popup when the "Close" button is clicked
    $("#closePopupBtn").click(function () {
        $("#projectPopup").addClass("hidden");
    });

    // Save project details when the "Save Project" button is clicked
    $("#saveProjectBtn").click(function () {
        var projectName = $("#projectPopup input[placeholder='Title']").val();
        var projectDescription = $("#projectPopup input[placeholder='Description']").val();
        var startDate = $("#StartDate").val();
        var endDate = $("#EndDate").val();

        // Check if any input field is empty
        if (!projectName || !projectDescription || !startDate || !endDate) {
            alert("Champ vide! Please fill in all fields.");
            return; // Exit the function if any field is empty
        }

        // Check if start date is less than end date
        if (new Date(startDate) >= new Date(endDate)) {
            alert("Invalid date range! Start date must be less than end date.");
            return; // Exit the function if the date range is invalid
        }

        // Create an object to store project details
        var projectDetails = {
            name: projectName,
            description: projectDescription,
            start: startDate,
            end: endDate
        };

        // Push the project details object into the array
        projectDetailsArray.push(projectDetails);

        // You can do something with the array (e.g., send to server)
        console.log("Project Details Array:", projectDetailsArray);

        // Clear input values
        $("#projectPopup input").val("");

        // Close the popup
        $("#projectPopup").addClass("hidden");
    });

    // Clear input values and close popup when the "Delete" button is clicked
    $("#exitAddPrj").click(function () {
        // Clear input values
        $("#projectPopup input").val("");

        // Close the popup
        $("#projectPopup").addClass("hidden");
    });
});



const tasksData = [
    10, 15, 8, 20, 12, 18, 25, 30, 22, 17,
    14, 28, 9, 16, 23, 19, 13, 27, 11, 24,
    21, 7, 26, 33, 31, 29, 36, 32, 35, 40
  ];document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('tasksChart').getContext('2d');
  
    const tasksChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        datasets: [{
          label: 'Tasks Completed',
          data: tasksData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', 
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  