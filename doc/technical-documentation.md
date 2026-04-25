# 1. Assignment Overview
This assignment is a  personal portfolio website built using HTML, CSS, and JavaScript. It includes three main sections (About Me, Projects, Contact). A dynamic greeting feature was implemented using JavaScript to personalize the user experience based on the current time of day and improved user experiance by implementing dark and light modes with local storage for user prefrence. An inspiration quote and a countdown to my graduation is also added to enhance the website. An innovation feature is added to the website in the way that skills appear to users.

# 2. Technologies Used
* HTML: building the website
* CSS: styling and responsive design
* Figma: createing the page design
* JavaScript: Dynamic content and interactivity
* Flexbox: Layout system
* GitHub: Version control

# 3. HTML File
On the head of the file the title was assigned to Fatimah Al Tawfiq Portfolio using the title tag and the css file and the JS files are linked using the link and script tags. Also a meta tag is used to extract the screed width for compatibility concerns.

The body section is divided into five main sections: Top bar, About, Skills, Projects, and Contact each one is on different section tag. On the top of the web page there is an introduction about me include greeting message, my name, hook, and a quote.

The topBar section is at the top of the page with a navigation to move from one part to another in the web page and an icon to change the color mode to dark or light that is changed to sun or monn based on the current color mode.

About me section consist of a heading for about me text and a p tag to include my information and a countdown to my graduation date from KFUPM in the next year.

Skills section is created by showing the my technical skills including the tool name and its logo in one row. The tools are moving from right to left in a contenues loop. This movement is done by the CSS and JS code.  

projects section has a project filter based on the project scope. The user can view all project or click on the buttons to see the intended project fields. A sorting method is also applied by the project date to improve the web functionality.
Each project has a card that contains an image in the left of the card with the project name and breif description for it in the left of the image. for smaller screen size the image will be shefted to the top of the project name. 

The last section on the web page is Contact me that is consest of a form tags. The form tag include label and input tags for the sender name and email the email has marked as required, a label and textare for the message which is also marked as required, two span tags for error messages if one of the required inputs are empty or the email is not valed, and an input tag for the submit button.

# 4. Figma
For this assignment, I re design the web page using figma and create two different page coloring. Th efirst one is for the thght mode and the second one is for dark mode. I also use the sun icon in the dark mode where the user click to change the appearance to light mode. In the light mode the moon icon is used to navigate to dark mode.

# 5. CSS File
The website’s styling is implemented using a dedicated external stylesheet that focuses on responsiveness, maintainability, and user experience.

One of the visualization improvements is The smooth scrolling where scroll-behavior smooth; property was applied to the html element. This ensures that when a user clicks a navigation link (e.g., "About Me" or "Contact"), the browser slides gracefully to that section instead of jumping instantly. This provides better visual continuity and helps the user understand their position on the long-scrolling page.

The core of the website's color logic is built using CSS custom variables defined in the root selector. This allows for a centralized management of the color palette where the light mode default and the dark mode is applyed when dark-mode class added to the body.

To ensure the website looks natural on all screen sizes without constant manual adjustments, the clamp() function was used extensively for Font Sizes and Layout Spacing. Moreover, the media queries with specific breakpoints for mobile and tablit sizes were used to ensure the web site compatibility by rearanging items in the page.

In addiition flexbox used for the navigation bar, project filters, and project cards to handle alignment and spacing efficiently.
For the navigation bar the position: sticky is used to keep the bar at the top of the page, tp ensure that the navigation is always accessible.

For the Skills Queue Section, the animation is driven by a continuous linear loop that utilizes @keyframes and translateX for a seamless scrolling effect, further optimized with will-change: transform to ensure smooth performance. To enhance the visual polish, a mask-image linear gradient is applied to the wrapper, creating a sophisticated fading effect at the edges that provides better visual continuity as items enter and exit the frame. The section remains interactive by using animation-play-state: paused on hover, allowing users to pause the motion for better readability, while the use of CSS custom variables ensures the section remains fully responsive to light and dark mode transitions.

# 6. JavaScript File
The JS file contain six functionalities: greeting messages, API handeling, graduation countdown, project filtering and sorting, error messages for the contact form, and moving to dark or light modes.

for the greeting messages, there is a date object to get the current time and generate a greeting message base on it using if condition. It also include inserting the message on the web page using greetingMessage.textContent.

An API handelilng to an inspiration quote is also added to the JS file by craeting a function that fetch the API URL with a filtering on the quote tag and length for better visulization. An error message is shown to the user if connection error happend.

For the skills animation, I dublicate the skills twice in JS, to make it more interactive, because the number of skills is small.

I added a countdown counter to my graduation from KFUPM at the end of About me section. I create a function that initalise the graduating date and calculate the difference between it and the current date and time. To make the counter changed dynamicly, I used the setInterval function that call my updateCountdown function every searten beriod and change the date and time in the html file.

To filter the project based on the field,the all filter is active where all projects are desplayed to the user and there is map for each list element to handel mouse clicking. If any element is clicked the data-filter value for that element is stored in the filterValue variable. Then, there is a loop to check if the filterValue match each progect from the projectCards list. At the end the mismatch elements are hide by setting the designe atribute to none. After filtering the project a sorting method is applyed to projects based on the project date. The defult one is sorting them from the newest to oldest, however the user can change the sorting method my clicking on the Old to new button, where the active serting methos is shown to the user with a green color in the sorting buttons.

The fifth functionality is the to desplay error messages when the user leave the message content empty or the used email is not in a valide format.
This has been done by creating two boolean variable eValid for the email and mValid for the message and set their value to true. First, the email is checked if it a valid email or not using email.validity.valid. If it is not valid, eValid changed to false and the error message message appears. After that, the message content is extracted and white spaces removed and see it it empty or not. If it is empty the mValid changed to false and the error message message appears. If eather eValid or mValid are not valid the form submition is prevented, otherwise the form submitted and an alart appears to the user that has a succesful message.

In the dark or light mode logic, I first check if there is stored data in localStorage to ensure the user's preference persists across page refreshes. When the icon is clicked, the body.classList.toggle("dark-mode") method is called. This automatically adds the dark-mode class if it is missing or removes it if it is already present.

After the toggle, I use an if statement with body.classList.contains("dark-mode") to check the new state of the page. Depending on the result, I update localStorage with either "dark" or "light" so that the browser remembers the user's choice for their next visit.

# 7. Browser Compatibility
The website was tested on Google Chrome with a simulatiom for veraity number of device screens including mobiles and tablits.

# 8. Web Preformance
To improve my web preformance I remove the redundent code in the CSS file by combining the similar parts in the wepage, and I compress multible images that have a larg size:

Student Impact Hup web interface image size reduced from 3052 KB to 379 KB.

KFUPM CAMPUS ROUTE & SCHEDULE VISUALIZATION APP image size reduced from 1944 KB to 309 KB.

Student Impact Hup web interface image size reduced from 249 KB to 51 KB.

Other images did not compressed because there size is already small.

I have tested my website preformance using Lighthouse and get these results.
On Desktop, it reched 98% on the preformance. While in the mobile, the preformance score is a litle bit lower with 91%. Overall, the website preformance can be consederd great since it is above 90% on both mobile and desktop, which play a role in the user experiance.