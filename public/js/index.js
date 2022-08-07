const testAPI = "https://icanhazdadjoke.com/";
const jokeHandler = document.getElementById("joke__handler");
const spinner = document.getElementById("fetchingdata-spinner");
const fetchBtn = document.getElementById("jokeButton");
const loader = document.getElementById("loader");

function setData(newData) {
  jokeHandler.innerText = newData;
}

async function getData() {
  setTimeout(async () => {
    await fetch(testAPI, {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res.joke);
        fetching();
      });
  }, 2500);
}

function fetching() {
  if (spinner.style.display !== "none") {
    spinner.style.display = "none";
    fetchBtn.disabled = false;
    loader.style.animation = "none";
  } else {
    spinner.style.display = "block";
    fetchBtn.disabled = true;
    loader.style.animation = "loader 1.5s infinite ease";
  }
}

async function fetchIt() {
  fetching();
  try {
    await getData();
  } catch (err) {
    console.error(err);
  }
}
