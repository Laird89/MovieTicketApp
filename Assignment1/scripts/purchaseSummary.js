function updatePage() {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");

  header.innerHTML = `<p class="header">Fall 2023 Assignment #1 for Chris Laird from Canada</p>`;
  footer.innerHTML = `<p class="footer">My Login: lairdch / My ID: 991279847 / My Program: Computer Programming</p>`;

  showSummary();
}

function showSummary() {
  let content = document.getElementById("content");
  let summary = document.getElementById("summary");
  let city = localStorage.city;
  let location = localStorage.location;

  summary.innerHTML += `<h3 id="summaryTitle">Ticket Purchase Summary</h3>
                         <ul style="list-style-type: none;">
                         <li>City: ${city}</li>
                         <li>Theatre: ${location}</li>
                         <li>Movie: ${localStorage.movie}</li>
                         <li>Date: ${localStorage.date}</li>
                         <li>Showtime: ${localStorage.showtime}</li>
                         <li>Name: ${localStorage.firstName} ${localStorage.lastName}</li>
                         <li>Cost: $${localStorage.totalCost}</li>
                         </ul>
                         <button id="back" onclick="backToMain()">Go Back</button>`;
}

function backToMain() {
  location.assign("../index.html");
}
