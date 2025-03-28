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
  
    // Function to populate IT Tickets and Webmaster Requests
    function populateEventInfo(itTickets, webmasterRequests) {
        document.getElementById("it-tickets").innerText = itTickets;
        document.getElementById("webmaster-requests").innerText = webmasterRequests;
    }
  
  }());
  