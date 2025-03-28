(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
          week = day * 7;

    const eventDate = "10/15/2025"
    const itTickets = 213
    const webmasterRequests = 324
  
    startCountdown(eventDate);
    populateEventInfo(itTickets, webmasterRequests);
    
  
    // Function to start the countdown based on the selected date
    function startCountdown(eventDate) {
        const countDown = new Date(eventDate).getTime();
        const x = setInterval(function() {    
            const now = new Date().getTime(),
                  distance = countDown - now;
  
            let w = Math.floor(distance / (week));
            let d = Math.floor((distance % (week)) / (day));
            let h = Math.floor((distance % (day)) / (hour))
            let m = Math.floor((distance % (hour)) / (minute))
            let s = Math.floor((distance % (minute)) / second)
  
            document.getElementById("weeks").innerText = w,
            document.getElementById("days").innerText = d,
            document.getElementById("hours").innerText = h,
            document.getElementById("minutes").innerText = m,
            document.getElementById("seconds").innerText = s;
            
        }, 0);
    }

    // List of IT jokes
    const jokes = [
        "Why do programmers prefer dark mode? \n\n Because light attracts bugs!",
        "Why do Java developers wear glasses? \n\n Because they can't C#.",
        "Why don't programmers like nature? \n\n It has too many bugs.",
        "An SQL statement walks into a bar and sees two tables. It approaches, and asks 'May I join you?'",
        "Why did the developer go broke? \n\n Because he used up all his cache.",
        "What’s a programmer’s favourite hangout place? \n\n The breakpoint.",
        "Our team had a debate about the best names for looping variables... \n\n i won",
        "I'd tell you a joke about UDP, but you probably wouldn't get it.",
        "Did you hear the joke about the null pointer? \n\n That's okay, you wouldn't get dereference.",
        "!false \n\n It's funny because it's true.",
        "Why was the developer unhappy at their job? \n\n They wanted arrays.",
        "What's the second movie about a database engineer called? \n\n The SQL.",
        "When do front end developers go out to eat? \n\n On their lunch `<br>`.",
        "How does a developer make a cheer? \n\n[\"hip\",\"hip\"]",
        "Got any funny DNS jokes? \n\n Yeah, but it may take 24 hours to get it.",
        "What’s a Jedi’s favourite programming language? \n\n JabbaScript"
    ];
    
    // Fetch a random joke from the list
    function getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
    }
    
    // Display the joke
    function displayJoke() {
        const joke = getRandomJoke();
        document.getElementById('joke-text').innerHTML = joke.replace(/\n/g, "<br>");
    }
  
    // Function to populate IT Tickets and Webmaster Requests
    function populateEventInfo(itTickets, webmasterRequests) {
        document.getElementById("it-tickets").innerText = itTickets;
        document.getElementById("webmaster-requests").innerText = webmasterRequests;
    }

    function init() {
        displayJoke(); // Show a joke when the page loads
        setInterval(displayJoke, 24 * 60 * 60 * 1000); // Display a new joke every 24 hours
      }

    init();
  
  }());
  