let divContainer = document.querySelector("div");

function clock() {
  let now = new Date();
  divContainer.innerHTML = "<div><h1>India</h1></div>";
  divContainer.innerHTML += `<p class="date">Current Date And Time ${now.toLocaleString()}.</p>`;
}

clock();
