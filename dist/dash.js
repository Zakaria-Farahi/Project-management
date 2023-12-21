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
  function generateTimestampBasedRandomNumber() {
    // Get the current timestamp in milliseconds
    var timestamp = new Date().getTime();

    // Generate a random number using the timestamp
    return timestamp + Math.floor(Math.random() * 100000);
  }
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

    $('#saveProjectBtn').on('click', function() {
      // Get the image file
      var imageInput = $('#dropzone-file')[0];
      var imageFile = imageInput.files[0];
  
      // Get values
      var title = $('input[placeholder="Title"]').val();
      var description = $('input[placeholder="Description"]').val();
      var randomNumber = generateTimestampBasedRandomNumber();
      // Check if the image file is available
      if (imageFile) {
        var reader = new FileReader();
  
        // Read the image file and handle the onload event
        reader.onload = function(e) {
          // Create a new project element
          var projectElement = $(`
          <!-- Project ${randomNumber} -->
          <div class="col-span-3 Proj">
            <a href="#"  class="flex flex-row items-center  bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 ">
              <div class="relative group remove-Proj">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${e.target.result}" alt="">
                <div class="absolute inset-0 bg-red-500 opacity-0 hover:opacity-50 transition-opacity group-hover:opacity-50 flex items-center justify-center">
                  <div class="text-white text-2xl">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
              </div>                      
              <div data-target="table-${randomNumber}" class="toggle-button flex-grow flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${description}</p>
              </div>
            </a>
            <div id="table-${randomNumber}" class="relative hidden overflow-x-auto shadow-md sm:rounded-lg mt-3">
                     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                 <th scope="col" class="px-6 py-3">
                                    Task
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                       status
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                    Deadline
                                 </th>
                                 <th scope="col" class="px-6 py-3">
                                    Action
                                 </th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <input class="task-title appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Task Title" aria-label="Task Title">
                                 </th>
                                 <td class="px-6 py-4">
                                    <div class="w-max">
                                       <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md" style="opacity: 1;">
                                          <span class="">Active</span>
                                       </div>
                                     </div>
                                 </td>
                                 <td class="px-6 py-4">
                                    <input class="deadline appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" placeholder="XX-XX-XXXX" aria-label="Deadline">
                                 </td>
                                 <td class="px-6 py-4">
                                    <div class="w-max">
                                       <div class="add-row cursor-pointer relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md" style="opacity: 1;">
                                          <span class="">Add</span>
                                        </div>
                                     </div>
                                 </td>
                              </tr>
                        </tbody>
                      </table>
             </div>
          `); 
  
          // Append the new project element to the document
          $('#ProjContainer').prepend(projectElement);
  
          // Clear the input values and reset the image input
          $('input[placeholder="Title"]').val('');
          $('input[placeholder="Description"]').val('');
          $('#dropzone-file').val('');
          $('#dropLabel').removeClass('hidden');
          $('#uploadedImage').children("img").remove();
          // projectPopup hidden
          $("#projectPopup").addClass("hidden");
        };
  
        // Read the image file as a data URL
        reader.readAsDataURL(imageFile);
      } else {
        // Handle case where no image is uploaded
        alert('Please upload an image before saving.');
      }
    });
    
});

$(document).on("click", '#exitAddPrj', function () {
  // Clear input values and close popup when the "Delete" button is clicked
    // Clear input values
    $("#projectPopup input").val("");
    $("#uploadedImage").children('img')[0].remove();
    $('#dropLabel').removeClass('hidden').val("");
    // Close the popup
    $("#projectPopup").addClass("hidden");
});

$(document).on("click", '.toggle-button', function () {
  // Toggle the table when the toggle-button is clicked

    var targetId = $(this).data("target");
    console.log(targetId);
    $("#" + targetId).slideToggle();
}); 

$(document).on("click", '.remove-row', function () {
  // Add the fade-out class and remove the element after animation
    $(this).closest('tr').addClass('fade-out').fadeOut(500, function () {
        $(this).remove();
    });
});


$(document).on("click", '.remove-Proj', function () {
  // Remove the Project element when the img is clicked
    $(this).closest('.Proj').remove();
});




$(document).on('click', '.add-row',  function () {
  // Event listener for the "Add" button
    // Get values from the current row
    var taskTitle = $(this).closest('tr').find('.task-title').val().trim();
    var deadline = $(this).closest('tr').find('.deadline').val().trim();

    // Check if input fields are not empty
    if (taskTitle === '' || deadline === '') {
      alert('Please fill in all fields before adding a new row.');
      return;
    }

    // Create a new row with the extracted values
    var newRow = `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          ${taskTitle}
        </th>
        <td class="px-6 py-4">
          <div class="w-max">
            <div class="toggle-status relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md" style="opacity: 1;">
              <span class="">Active</span>
            </div>
          </div>
        </td>
        <td class="px-6 py-4">
          ${deadline}
        </td>
        <td class="px-6 py-4">
          <div class="w-max">
            <div class="cursor-pointer remove-row relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md" style="opacity: 1;">
              <span class="">Remove</span>
            </div>
          </div>
        </td>
      </tr>
    `;

    // Insert the new row before the current row
    $(this).closest('tr').before(newRow);

    // Clear input fields after adding a new row
    $(this).closest('tr').find('.task-title').val('');
    $(this).closest('tr').find('.deadline').val('');
  });


$(document).on("click", '.toggle-status', function () {
  // Event listener for the toggle-status element
    var $status = $(this);
    var $span = $status.find('span');

    // Toggle between Completed and Active
    if ($span.text() === 'Completed') {
      $span.text('Active');
      $status.removeClass('bg-green-500/20 text-green-600').addClass('bg-yellow-500/20 text-yellow-600');
    } else {
      $span.text('Completed');
      $status.removeClass('bg-yellow-500/20 text-yellow-600').addClass('bg-green-500/20 text-green-600');
    }

});


$(document).on('click', '.remove-row', function () {
  // Add the fade-out class and remove the element after animation
  $(this).closest('tr').addClass('fade-out').fadeOut(500, function () {
      $(this).remove();
  });
});

//<img src="./img/hero1.jpg" class="max-w-md mx-auto"></img>
$(document).ready(function() {
  $('#dropzone-file').change(function() {
    var input = $('#dropzone-file');
    var file = $(this)[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      // Display the image preview above the form
      $('#dropLabel').addClass('hidden');
      $('#uploadedImage').prepend('<img src="' + e.target.result + '" class="max-w-md mx-auto" alt="Uploaded Image" />');
    }
    reader.readAsDataURL(file);
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
  

