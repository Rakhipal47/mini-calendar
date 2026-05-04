document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("h1");
    const daysContainer = document.getElementById("days");
    const monthYear = document.getElementById("monthYear");
    const messageDiv = document.getElementById("message");

    // Typing effect text
    const headerText = "📅 Mini Calendar";
    let headerIndex = 0;

    // Function for typing effect
    function typeHeader() {
        if (headerIndex < headerText.length) {
            header.innerHTML += headerText.charAt(headerIndex);
            headerIndex++;
            setTimeout(typeHeader, 150);
        } else {
            // After typing completes, initialize the calendar
            initCalendar();
        }
    }

    // Initialize calendar
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Function to clear all day messages
    function clearAllMessages() {
        document.querySelectorAll('.day-message').forEach(span => {
            span.innerText = "";
        });
    }

    /**
     * Renders the calendar for a given year and month.
     */
    function renderCalendar(year, month) {
        daysContainer.innerHTML = "";
        // Update header
        monthYear.innerText = new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric"
        });
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            let day = document.createElement("div");
            day.classList.add("day");
            day.innerText = i;

            // Add message span
            const messageSpan = document.createElement("span");
            messageSpan.className = "day-message";
            messageSpan.innerText = "";
            day.appendChild(messageSpan);

            // Optional: add animation delay for each day
            day.style.animationDelay = `${i * 0.03}s`;

            day.addEventListener("click", () => {
                alert(`📅 Selected Date: ${i}`);
            });

            daysContainer.appendChild(day);
        }
    }

    /**
     * Show message on a specific day based on date string
     */
    function showEventMessageOnDay(dateStr, message) {
        const dateObj = new Date(dateStr);
        const dayNumber = dateObj.getDate();

        document.querySelectorAll('.day').forEach(dayEl => {
            if (parseInt(dayEl.innerText) === dayNumber) {
                const msgSpan = dayEl.querySelector('.day-message');
                if (msgSpan) {
                    msgSpan.innerText = message;
                }
            }
        });
    }

    // Add event handler for adding events
    document.getElementById("addEvent").addEventListener("click", () => {
        const eventDateStr = document.getElementById("eventDate").value;
        const eventText = document.getElementById("eventText").value;

        if (!eventDateStr || !eventText) {
            messageDiv.innerText = "⚠️ Fill all fields";
            messageDiv.style.color = "orange";
            return;
        }

        fetch("/api/events/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ date: eventDateStr, title: eventText })
        })
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then(() => {
            // Re-render calendar to update messages
            const eventDate = new Date(eventDateStr);
            currentMonth = eventDate.getMonth();
            currentYear = eventDate.getFullYear();

            clearAllMessages(); // Clear old messages
            renderCalendar(currentYear, currentMonth);
            showEventMessageOnDay(eventDateStr, "Event: " + eventText);
            messageDiv.innerText = "✅ Event Added!";
            messageDiv.style.color = "lightgreen";
        })
        .catch(() => {
            messageDiv.innerText = "❌ Error!";
            messageDiv.style.color = "red";
        });
    });

    // Start the typing effect
    typeHeader();
});