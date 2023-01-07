function showQuote(response) {
  console.log(response);

  let adviceId = response.data.slip.id;
  let id = document.querySelector("#adviceId");
  id.innerHTML = adviceId;

  let currentAdvice = response.data.slip.advice;
  let currentQuote = document.querySelector("#advice");
  currentQuote.innerHTML = currentAdvice;
}

function handleClick() {
  let apiUrl = `https://api.adviceslip.com/advice`;
  axios.get(apiUrl).then(showQuote);
}

let quote = document.querySelector("#button");
quote.addEventListener("click", handleClick);
