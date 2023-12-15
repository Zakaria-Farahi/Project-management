$(document).ready(function() {
    $('#sidebar>li').click(function() {
        // Remove active class from all siblings
        $(this).siblings().removeClass('active').children("a").removeClass("bg-mainColor").addClass("hover:bg-gray-100");

        // Add active class and update styles for the clicked item
        $(this).addClass('active').children("a").addClass("bg-mainColor").removeClass("hover:bg-gray-100");
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
  