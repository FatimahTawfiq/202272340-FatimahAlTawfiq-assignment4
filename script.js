
/*     Greating by day time     */

let currentTime= new Date().getHours();
/* Using if-else if-else condition to write the suitable greeting message based on the time */
let message;
if (currentTime < 12) {
    message = "Good Morning";
} else if (currentTime < 18) {
    message = "Good Afternoon";
} else {
    message = "Good Evening";
}

/* Locate the greeting message and update its text content */
let greetingMessage = document.getElementById('greeting');
if (greetingMessage) {
    greetingMessage.textContent = `${message}!`;
}

/*     API handeling    */
async function fetchQuote() {
  try {
      const response = await fetch('https://quoteslate.vercel.app/api/quotes/random?tags=motivation&maxLength=100');
      
      if (!response.ok) {
        throw new Error('API responded with error');
      }
      
      const data = await response.json();
      // adding the quote in the the html file
      document.getElementById('quote').innerHTML = `"${data.quote}" — ${data.author}`;
      
    } catch (error) {
      // showing an error messsage to the user
      document.getElementById('quote').innerHTML = `Soory we have problem with the API connection`;
    }
}

fetchQuote()

/*     graduation countdown    */

// graduation day
const targetDate = new Date(2027, 5, 7, 0, 0, 0); 

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
        document.getElementById('countdown-timer').innerHTML = "I have graduated!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately



/*    Skills section    */
const queueContent = document.querySelector('.queue-content');
const innerContent = queueContent.innerHTML;
// Append the same content twice to make the loop seamless
queueContent.innerHTML =innerContent+ innerContent;



/*    Filtering and sorting projects     */

let filterItems = document.querySelectorAll('#projectFiltering li');
let projectCards = document.querySelectorAll('.pCard');


let sortBtns = document.querySelectorAll('.sort-btn');
let currentSort = 'newest'; // Track current sort order

// function to apply sorting
function applySort() {
    // get currently visible projects
    let visibleCards = Array.from(projectCards).filter(card => 
        card.style.display !== 'none'
    );
    
    // sort visible cards by date
    visibleCards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        
        if (currentSort === 'newest') {
            return dateB - dateA; // Newest first
        } else {
            return dateA - dateB; // Oldest first
        }
    });
    
    const container = document.querySelector('.projects-container');
    visibleCards.forEach(card => {
        container.appendChild(card);
    });
}

// filter logic
filterItems.forEach(item => {
  item.addEventListener('click', () => {
    
    // moving the 'active' class to the currently clicked category
    document.querySelector('#projectFiltering li.active').classList.remove('active');
    item.classList.add('active');

    // getting the category name from the 'data-filter' attribute
    let filterValue = item.getAttribute('data-filter');
    
    // loop through cards: show if they match the filter or if 'all' is selected
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'flex'; // display the card
      } else {
        card.style.display = 'none'; // hide the card
      }
    });
    
    // after filtering, apply current sort to the visible cards
    applySort();
  });
});

// sort button logic
sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class on sort buttons
        sortBtns.forEach(b => b.classList.remove('active-sort'));
        btn.classList.add('active-sort');
        
        // Update current sort
        currentSort = btn.getAttribute('data-sort');
        
        // re-apply sort to currently visible projects
        applySort();
    });
});
// Initial sort on page load
applySort();

/*    displaying input error message     */

let form=document.getElementById("contactForm")

form.addEventListener('submit', (event) => {
  // create eValid to check email validity and mValid to check that the message is not empty
  let eValid = true;
  let mValid=true;
    
  // Clear previous error messages
  document.querySelectorAll('.errorMessage').forEach(el => el.textContent = '');
    

  // Check Email
  const email = document.getElementById('email');
  if (!email.validity.valid) {
      document.getElementById('emailError').textContent = "Please enter a valid email address.";
      eValid = false;
  }

  // Check email
  let userMesage = document.getElementById('message');
  if (userMesage.value.trim() === "") {
      document.getElementById('messageError').textContent = "Please enter a message content.";
      mValid = false;
  }

  // If any field is invalid, stop the form from submitting
  if (!eValid || !mValid) {
      event.preventDefault();
  }
  else{alert("Your subbmition has been sent correctly")}
});

/*     Dark/Light modes      */

const toggleBtn = document.getElementById("mode_icon");
const body = document.body;

// Check LocalStorage to see if the user previously chose dark mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  // Add or remove the 'dark-mode' class on the body tag
  body.classList.toggle("dark-mode");
  
  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});