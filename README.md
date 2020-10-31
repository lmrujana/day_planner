# Day Planner

## Objective

To create an app that allows the user to saved information for specific working hours on a day. The app should visually tell the user if a time block is in the past, present or future. Also the app needs to save the content that the user inputs on local storage, so if the page is refreshed it still shows whatever information was saved for a specific time block.

## Development

Most of the code inside index.html and style.css files was provided as a staring point. Inside the HTML file there were links to Bootstrap, Fontawesome, Google Fonts and jQuery, which provided a staring layout for the app. We added an additional link to Moment.js which we used to do time related operations inside our script.js.

Inside script.js we created a moment.js object that we saved in a variable called 'now' which we used through the whole file as a time ref. We used now.format() to display the current day at the top of the page. From there, the rest of the code splits in three main blocks of code: the coloring of the text area, the saving buttons and the function that displays whatever is saved in local storage.

## Extra

Although it was not requiered in the acceptance criteria, we thought that the planner needed to be 'cleared' at the end of every day, so the user could start a new day with a clear planner. For that we added an aditional block of code inside the function displayDayPlans(), which checks if the date of the information saved inside local Storage is the same as the current date. If it's not it won't display the information inside the text areas and it will clear the info inside local storage.