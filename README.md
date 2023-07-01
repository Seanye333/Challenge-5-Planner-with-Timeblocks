# Challenge-5-Planner-with-Timeblocks
## Challenge-5-Planner-with-Timeblocks
## Link to application 
https://seanye333.github.io/Challenge-5-Planner-with-Timeblocks/ 

## Description
This repository contains the code for a planner to allow users adding their important events to the calendar. Scheduled event past due will displayed with gray backgroud, current event with red, and future event with green. 

The sequence of operation is described below: 
1. Display the Hour Date and Year on the calendar after opening the planner 
2. Display 9 am -5 pm to allow users to input their task on each hour
3. Display timeblock in different colors based on past, present, and future ( past: gray, present: red, future: green)
4. Note: test the code for color changes by changing computer time if needed 
5. User inputs the hourly task into a specific hour 
6. Click on the save button and store data in the local storage
7. Refresh the page it will still persist the saved events  

From this assignment: I learned how to use Jquery to store data to local storage, persist the saved local storage, utilize bootstrap layouts, and apply Dom Traversal, etc. 

## Installation
To install this project within your computer, please follow the instruction below
1. Open git bash
2. Create your own file
3. To clone the repository: type in git clone https://github.com/Seanye333/Challenge-5-Planner-with-Timeblocks
4. Navigate to the project directory: cd <project_directory>
5. Open the file in the web browser: open index.html
6. Website will display on your default browser

## Usage
Please open the HTML file (index.html) in a web browser to view the homepage. The CSS file (style.css) and javascript file are referenced in the HTML file and automatically applied to the webpage in the web browser. The website will be deployed for all users to use by simply copy and paste to browser.

![alt text](images/Challenge-5-Planner-with-Timeblocks-ScreenShot.png) 

## Credits
To understand how to randomly generate passwords , mdn web was utilized to learn the concepts: 
https://www.tutorialspoint.com/What-is-document-ready-method-in-jQuery; 
https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator

## License
This project is licensed under the MIT License.

## Features
Following features are from original acceptance criteria from the project: 

 ```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## How to Contribute
Contributions to this project are not avaiable currently.
