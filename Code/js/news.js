var news_cards = document.querySelector("#news_cards");
var loading = document.querySelector("#loading");

var news_all = document.querySelector("#all");
var news_national = document.querySelector("#national");
var news_business = document.querySelector("#business");
var news_sports = document.querySelector("#sports");
var news_world = document.querySelector("#world");
var news_politics = document.querySelector("#politics");
var news_technology = document.querySelector("#technology");
var news_startup = document.querySelector("#startup");
var news_entertainment = document.querySelector("#entertainment");
var news_miscellaneous = document.querySelector("#miscellaneous");
var news_science = document.querySelector("#science");

function fetchNews(category) {
    news_cards.innerHTML = "";
    loading.innerHTML =
        "We are fetching the latest stuffs around you! Please wait....";
    var addStyle = "btn-dark";
    var removeStyle = "btn-outline-dark";
    btnStyleSetting(category, addStyle, removeStyle);
    try {
        fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data);
                loading.innerHTML = "";
                var res_html = "";
                for (var i = 0; i < data.data.length; i++) {
                    res_html += `<div class="card mb-3" style="height: max-content;">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        ${i + 1}
                    </span>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img style="
                                object-fit: cover;
                                width: 100%;
                                height: 26vw;
                            " src="${
                              data.data[i].imageUrl
                            }" class="img-fluid rounded-start" alt="${
            data.data[i].title
          }">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-black">${
                                  data.data[i].title
                                }</h5>
                                <p class="card-text text-lg-start bg-success p-2 text-dark"
                                style="border-radius: 10px;
                                border: 1px solid white;">${
                                  data.data[i].content
                                }
                                </p>
                                <p class="text-lg-end text-primary"><cite>- ${
                                  data.data[i].author
                                }</cite></p>
                                <div id="readMoreBtn">
                                    <a target="blank" href="${
                                      data.data[i].readMoreUrl
                                    }" class="btn btn-sm text-light bg-primary " >Read More</a>
                                </div>
    
                                <p class="card-text text-start"><small class="text-muted badge bg-dark">${
                                  data.data[i].date
                                } - ${data.data[i].time}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`;
                    news_cards.innerHTML = res_html;
                }
            });
    } catch (error) {
        console.log(error);
    }
}

fetchNews("all");

function btnStyleSetting(category, addStyle, removeStyle) {
    // var addStyle = "btn-dark";
    // var removeStyle = "btn-outline-dark";
    if (category == "all") {
        news_all.classList.add(addStyle);
        news_all.classList.remove(removeStyle);

        busines_style();
        entertainment_style();
        miscellaneous_style();
        national_style();
        politics_style();
        science_style();
        sports_style();
        startup_style();
        technology_style();
        world_style();
    } else if (category == "national") {
        news_national.classList.add(addStyle);
        news_national.classList.remove(removeStyle);

        all_style();
        busines_style();
        entertainment_style();
        miscellaneous_style();
        politics_style();
        science_style();
        sports_style();
        startup_style();
        technology_style();
        world_style();
    } else if (category == "business") {
        news_business.classList.add(addStyle);
        news_business.classList.remove(removeStyle);

        all_style();
        national_style();
        entertainment_style();
        miscellaneous_style();
        politics_style();
        science_style();
        sports_style();
        startup_style();
        technology_style();
        world_style();
    } else if (category == "sports") {
        news_sports.classList.add(addStyle);
        news_sports.classList.remove(removeStyle);

        all_style();
        national_style();
        entertainment_style();
        busines_style();
        miscellaneous_style();
        politics_style();
        science_style();
        startup_style();
        technology_style();
        world_style();
    } else if (category == "world") {
        news_world.classList.add(addStyle);
        news_world.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        entertainment_style();
        busines_style();
        miscellaneous_style();
        politics_style();
        science_style();
        startup_style();
        technology_style();
    } else if (category == "politics") {
        news_politics.classList.add(addStyle);
        news_politics.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        entertainment_style();
        busines_style();
        miscellaneous_style();
        science_style();
        startup_style();
        technology_style();
        world_style();
    } else if (category == "technology") {
        news_technology.classList.add(addStyle);
        news_technology.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        entertainment_style();
        busines_style();
        miscellaneous_style();
        science_style();
        startup_style();
        politics_style();
        world_style();
    } else if (category == "startup") {
        news_startup.classList.add(addStyle);
        news_startup.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        busines_style();
        technology_style();
        miscellaneous_style();
        science_style();
        entertainment_style();
        politics_style();
        world_style();
    } else if (category == "entertainment") {
        news_entertainment.classList.add(addStyle);
        news_entertainment.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        busines_style();
        technology_style();
        miscellaneous_style();
        science_style();
        startup_style();
        politics_style();
        world_style();
    } else if (category == "miscellaneous") {
        news_miscellaneous.classList.add(addStyle);
        news_miscellaneous.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        busines_style();
        technology_style();
        entertainment_style();
        science_style();
        startup_style();
        politics_style();
        world_style();
    } else if (category == "science") {
        news_science.classList.add(addStyle);
        news_science.classList.remove(removeStyle);

        sports_style();
        all_style();
        national_style();
        busines_style();
        technology_style();
        miscellaneous_style();
        entertainment_style();
        startup_style();
        politics_style();
        world_style();
    }

    function all_style() {
        news_all.classList.remove(removeStyle);
        news_all.classList.remove(addStyle);
    }

    function world_style() {
        news_world.classList.remove(removeStyle);
        news_world.classList.remove(addStyle);
    }

    function technology_style() {
        news_technology.classList.remove(removeStyle);
        news_technology.classList.remove(addStyle);
    }

    function startup_style() {
        news_startup.classList.remove(removeStyle);
        news_startup.classList.remove(addStyle);
    }

    function sports_style() {
        news_sports.classList.remove(removeStyle);
        news_sports.classList.remove(addStyle);
    }

    function science_style() {
        news_science.classList.remove(removeStyle);
        news_science.classList.remove(addStyle);
    }

    function politics_style() {
        news_politics.classList.remove(removeStyle);
        news_politics.classList.remove(addStyle);
    }

    function national_style() {
        news_national.classList.remove(removeStyle);
        news_national.classList.remove(addStyle);
    }

    function miscellaneous_style() {
        news_miscellaneous.classList.remove(removeStyle);
        news_miscellaneous.classList.remove(addStyle);
    }

    function entertainment_style() {
        news_entertainment.classList.remove(removeStyle);
        news_entertainment.classList.remove(addStyle);
    }

    function busines_style() {
        news_business.classList.remove(removeStyle);
        news_business.classList.remove(addStyle);
    }
}

function typingEffect(txt, htmlContent) {
    var i = 0;
    var speed = 50;
    if (i < txt.length) {
        htmlContent += txt.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
    }
}