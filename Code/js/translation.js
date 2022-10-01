var language_option = document.querySelectorAll("select");

var convert_from_text = document.querySelector("#convert_from_text");
var convert_to_text = document.querySelector("#convert_to_text");

var language_from = document.querySelector("#language_from");
var language_to = document.querySelector("#language_to");

var speak_from = document.querySelector("#speak_from");
var speak_to = document.querySelector("#speak_to");

var copy_from = document.querySelector("#copy_from");
var copy_to = document.querySelector("#copy_to");

fetch("./json/language.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        var lang_arr = data;
        language_option.forEach((tag, id) => {
            for (const code in lang_arr) {
                let selected;

                if (id == 0 && code == "en-GB") {
                    selected = "selected";
                } else if (id == 1 && code == "ta-LK") {
                    selected = "selected";
                }
                // console.log(lang_arr[code]);
                let option = `<option value="${code}">${lang_arr[code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });
    });

convert_from_text.addEventListener("keyup", translate1);
language_to.addEventListener("change", translate1);

speak_from.addEventListener("click", () => {
    var lang = "en-US",
        value = convert_from_text.value;
    speak_lang(lang, value);
});

speak_to.addEventListener("click", () => {
    var lang = language_to.value,
        value = convert_to_text.value;
    speak_lang(lang, value);
});

function translate1() {
    if (
        convert_from_text.value == "" ||
        convert_from_text.value == undefined ||
        convert_from_text.value == null
    ) {
        convert_to_text.value = "";
    }
    let apiUrl = `https://api.mymemory.translated.net/get?q=${convert_from_text.value}!&langpair=en-GB|${language_to.value}`;

    try {
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                convert_to_text.value = data.responseData.translatedText;
            });
    } catch (error) {
        console.log(error);
    }
}

function speak_lang(lang, value) {
    let synth = window.speechSynthesis;
    let utter = new SpeechSynthesisUtterance();
    utter.lang = lang;
    utter.text = value;
    utter.volume = 1;

    // event after text has been spoken
    utter.onend = function() {
        // alert("Speech has finished");
    };

    // speak
    window.speechSynthesis.speak(utter);
}

copy_from.addEventListener("click", () => {
    copy_text(convert_from_text);
});

copy_to.addEventListener("click", () => {
    copy_text(convert_to_text);
});

function copy_text(text_value) {
    /* Select the text field */
    text_value.select();
    text_value.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(text_value.value);

    /* Alert the copied text */
    //alert("Copied the text: " + text_value.value);
}