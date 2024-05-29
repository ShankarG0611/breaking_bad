let showp = fetch("https://api.breakingbadquotes.xyz/v1/quotes/500");

showp.then((response)=>{
  return response.json();
}).then((response)=>{
  let htmlprint = " ";
  for (items in response){
    console.log(response[items]);

    htmlprint += `
      <div class="cardbrakingbad" title="${response[items].author}">
          <p>${response[items].quote}</p>
          <h6>${response[items].author}</h6>
      </div>
    `;
  }

  document.getElementById("quoteshere").innerHTML = htmlprint;
});