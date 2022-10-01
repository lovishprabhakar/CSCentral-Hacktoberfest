const result_data = document.querySelector("#result_data");
const input = document.querySelector("#input");
const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("click", function() {
    var text = input.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var resultData = data;

            var word = resultData.word;

            var res_html = "";
            if (resultData.length > 0) {
                for (var i = 0; i <= resultData.length; i++) {
                    var phonetics = resultData[i].phonetics.find((x) => x.audio != "");

                    var meanings = resultData[i].meanings;
                    res_html += `  <div class="d-flex flex-wrap justify-content-evenly my-3">
        <audio controls>
            <source src="${phonetics.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
    </div>

    <div class="d-flex flex-wrap justify-content-evenly">
    `;
                    for (var i = 0; i < meanings.length; i++) {
                        res_html += `  
        <div class="p-2 bd-highlight">
            <div class="bd-highlight">
                <h4> Part of Speech: ${meanings[i].partOfSpeech}</h4>
            </div>
            <details>
                <summary>Definition</summary>
                <p> ${meanings[i].definitions[0].definition}</p>
            </details>
        </div>`;
                    }
                    res_html += `
    </div>`;
                }
                result_data.innerHTML = res_html;
            } else {
                result_data.innerHTML = resultData.title;
                result_data.setAttribute("class", "text-center text-dark");
            }
        });
});