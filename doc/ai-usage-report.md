# AI Integration
## AI tools used on HW-1,2,3,4

This report documents the AI tools utilized in HW-1 and HW-2, detailing how each contributed to the development process, along with benefits, challenges, and key learnings.

### 1-ChatGPT:
ChatGPT has been used to understand how to change the greeting message on the web page after getting the time and generating the greeting message. ChatGPT provides me with this code

in html file:

h1 id="header1"

in JS file:

// 1. Select the element
const title = document.getElementById('header1');

// 2. Change the content
title.textContent = "Hello, World!";

This code helped me to have a clear understanding of the process about how to change the text from the JS file where I apply it with some changes here:

let greetingMessage = document.getElementById('greeting');
greetingMessage.textContent = message;

### 2-Gemini:
I used Gemini in this assignment for debugging. Especially when I faced a problem which is not changing the greeting message even after connecting the JS with the html file.

Gemini reviews the code on both files and state that nothing wrong on both, but the problem might occur because the JS file script is on the head of the html file but the place of greeting message on the body, so the h2 with the id= greeting literally does not exist in the browser's memory yet. In addition, it suggests adding the defer attribute to the script to download it now but not run it until the entire HTML page has finished loading.

For device compatibility, Gemini advise me to add meta data for taking the screen size in the html header, where it can be used in the CSS for styling in different screen size. It also suggests that using clamp function for font size, margins, and padding. Clamp works by assigning minimum value and maximum value for the attribute, and a preferred  value based on the screen size. Its mechanism is first calculating the preferred  value and then compare it to the minimum and the maximum. If the value is in between, the preferred  value is assigned, otherwise the minimum or the maximum is assigned.

To add the counter in the website I asked Gemini to give me a way to call a function frequantly in a predefined time interval to abdate the time. It respounce with giving me the setInterval function with this example:

// Runs every 3 seconds forever

setInterval(() => console.log("This runs repeatedly"), 3000);

where the first parameter for the function and the second one for the time interval in milliseconds.

I added my countdown function inside the setInterval with 1000 to execute the updateCountdown every 1 second.


### 3-Deepseek:
I used Deepseek for getting suggestions on how can I edit the CSS file to have different color for dark and light modes. It suggests that using variables is the best choice for assigned different values of the page and text colors. 

I search for how to apply data filtering for my project section, the response is to use the data attributes by adding a data-filter attribute in the filtering button and match it with the data-category attribute for each of the project cards.

It is also used for knowing how to store user preferences for dark or light modes. Deepseek provide me with these to line of codes

// Store data
localStorage.setItem('username', 'JohnDoe');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // "JohnDoe"

The parameter for localStorage.setItem are string key and string value stored in the browser's local storage.
The parameter for localStorage.getItem is only the key and return the key value

I asked Deepseek for a posible API quote that can be added to my personal profile. It list multible API but after seeing come of there quotes I choose
```
http://quoteslate.vercel.app/api/quotes/random
```

## Benefits & Challenges:

Using AI in programming projects improve the productivity and reduce the development time by efficiently and accurately find the code bugs and errors and even suggest possible solutions for fixing faults.
However, AI may not give the best results because it did not have the full code and in some cases the written prompt to the AI might be misleading.

## Learning Outcomes

* I learned how to modify existing text on HTML file by JS code using the id.

* I gained a deeper understanding of the HTML parsing lifecycle, specifically why placing scripts in the head without defer can lead to "null" reference errors because the body hasn't loaded yet.

* I gained an experience in storing user preferences in local storage for better user experiance.

* I learned how to execute a function rpeatedly in a setted time interval.


## Responsible Use & Modifications

The AI tools were used as learning assistants rather than as complete solution generators. I made sure to understand the suggested code before applying it to my project. Instead of copying the responses directly, I reviewed the explanations, tested the code, and modified it to fit my specific implementation. AI was used responsibly to support learning and problem-solving while maintaining academic integrity and personal understanding of the material. I adjust the code for the localStorage from DeepSeek to fit with my work in color theme, by first checking if there is a previous stored data for chosing dark mode. In addition setting the theme when the sun or the moon are clicked with the proper value. 

After browsing and choosing the API, I add a filter for the quotes with the tage motivation and the length to be at most 100 charechter for better visibility, where they have been added to the API URL by adding a question mark after the path.
