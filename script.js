// sudo code
// 1. Display the Hour Date and Year on the calendar after opening the planner 
// 2. Display 9 am -5 pm to allow users to input their task on each hour
// 3. Display timeblock in different colors based on past, present, and future ( past: gray, present: red, future: green)
// 4. Note: test the code for color changes by changing computer time if needed 
// 5. User inputs the hourly task into a specific hour 
// 6. Click on the save button and store data in the local storage
// 7. Refresh the page to persist the saved events  
// Note: doesn’t need to show a specific date on the local storage 

$(function () {
  var displayDateTime = $('#currentDay');
// Use dayjs().formart() to handle displaying the date and time
// https://day.js.org/docs/en/display/format
function displayTime() {
  var currentDateTime = dayjs().format('MMM DD, YYYY [at] HH:mm:ss A');
  displayDateTime.text(currentDateTime);
}
// display time with interval 1s
displayTime();
setInterval(displayTime, 1000);

// run once the page DOM is ready to execute JavaScript code
$(document).ready(function() {
  // Get the current hour using Day.js. 
  // .hour() to obtain hours of the date
  // https://day.js.org/docs/en/get-set/hour
  var currentHr = dayjs().hour();
  // Loop through each time block
  // use .each() to iterate each time block 
  $(".time-block").each(function() {
    // Use parseInt to convert string to integers to compare in next lines of code 
    // $(this) to refer to current element 
    // use attr to call for ID selector 
    // split to the string into substrings ex: ['hour'] ['9']
    // use [1] to acess second element of this array ex ['9']
    var assignedHr = parseInt($(this).attr("id").split("-")[1]);

    // Compare the hours with assigend tasks to the current hour to assign different background color based on time
    // Define past present and future in the CSS file 
    if (assignedHr < currentHr) {
      $(this).addClass("past");
    } else if (assignedHr === currentHr) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Add event listener to the save button in this time block
    // find() method to select the save button within the current time block. 
    var saveBtn= $(this).find(".saveBtn");
    saveBtn.on("click", function() {
      // Get all of the user input text value from the textarea
      var taskText = $(this).siblings(".description").val();
      // Get the closest ID of the time block which is hour-*
      var timeBkId = $(this).closest(".time-block").attr("id");
      // Save the text value to local storage using the time block ID as the key with localStorage.setItem
      localStorage.setItem(timeBkId, taskText);
    });

    // Retrieve saved descriptions from local storage and populate the textareas
    // use the time block ID to retrieve the saved text from the local storage using the localStorage.getItem() method
    // Use .val to set value as text if storedTexte is true after find all desciption from previous storage
    var timeBkId = $(this).attr("id");
    var storedText = localStorage.getItem(timeBkId);
    if (storedText) {
      $(this).find(".description").val(storedText);
    }
  });
});
});

