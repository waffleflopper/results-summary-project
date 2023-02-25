const dynamic = document.getElementById("breakdown");

if (dynamic) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((result) => {
        dynamic.innerHTML += `
              <div class="result-item ${result.color}">
          <img
            src="${result.icon}"
            alt="${result.category} icon" />
          <span class="category">${result.category}</span>

          <span class="score">${result.score} </span><span class="total">/ 100</span>
        </div>

              `;
      });
    })
    .catch((error) => console.log(error));
}
