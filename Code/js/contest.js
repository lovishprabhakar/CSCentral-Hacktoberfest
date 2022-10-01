var platform1 = document.querySelector("#platform1");
var platform2 = document.querySelector("#platform2");
var platform3 = document.querySelector("#platform3");
var platform4 = document.querySelector("#platform4");
var loading = document.querySelector("#loading");

function callingAPI(platform) {
    loading.innerHTML = "Fetching Live and upcoming contest for you...";
    try {
        fetch(`https://kontests.net/api/v1/${platform}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                loading.innerHTML = "";
                if (platform == "codeforces") {
                    platform_carosuel(data, platform);
                } else if (platform == "hacker_rank") {
                    platform_carosuel(data, platform);
                } else if (platform == "hacker_earth") {
                    platform_carosuel(data, platform);
                } else if (platform == "leet_code") {
                    platform_carosuel(data, platform);
                }
            });
    } catch (error) {
        console.log(error);
    }
}

function platform_carosuel(result_data, platform) {
    console.log(result_data);
    if (platform == "codeforces") {
        var heading = `Code Force -  ${result_data.length} Premiering Coding(s)`;
    } else if (platform == "hacker_rank") {
        var heading = `Hacker Rank -  ${result_data.length} Premiering Coding(s)`;
    } else if (platform == "hacker_earth") {
        var heading = `Hacker Earth -  ${result_data.length} Premiering Coding(s)`;
    } else if (platform == "leet_code") {
        var heading = `Leet Code -  ${result_data.length} Premiering Coding(s)`;
    }
    var res_html = `<h3 class="my-2"><span class="badge bg-dark">${heading}</span></h3>
    
    <div id="coding_round_slide${platform}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">`;
    for (var i = 0; i < result_data.length; i++) {
        res_html += ` <button type="button" data-bs-target="#coding_round_slide${platform}" 
        data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide 1"></button>`;
    }
    res_html += `</div><div class="carousel-inner">`;
    for (var i = 0; i < result_data.length; i++) {
        res_html += `
            <div class="carousel-item" id="${platform + i}">
                <img src="${imageurl(
                  platform
                )}" class="d-block w-100" alt="..." style="height: 15vw; object-fit: cover;">
                <div class="carousel-caption d-block">
                    <h4 class=" text-dark">${result_data[i].name}</h4>
                    <div class="row text-dark">
                        <div class="col-lg-6 col-sm-12 col-md-12 "><strong>Starts At: </strong>${
                          new Date(
                            result_data[i].start_time
                          ).toLocaleDateString() +
                          " " +
                          new Date(
                            result_data[i].start_time
                          ).toLocaleTimeString()
                        }</div>
                        <div class="col-lg-6 col-sm-12 col-md-12"><strong>Ends At: </strong>${
                          new Date(
                            result_data[i].end_time
                          ).toLocaleDateString() +
                          " " +
                          new Date(result_data[i].end_time).toLocaleTimeString()
                        }</div>
                    </div>
                    <a href="${
                      result_data[i].url
                    }" target="_blank" class="text-warning fw-bold badge bg-dark p-1">Click here to Register Or Start </a>
                </div>
            </div>
        `;
    }
    res_html += `
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#coding_round_slide${platform}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#coding_round_slide${platform}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>`;
    if (platform == "codeforces") {
        platform1.innerHTML = res_html;
        document.querySelector("#codeforces0").classList.add("active");
    } else if (platform == "hacker_rank") {
        platform2.innerHTML = res_html;
        document.querySelector("#hacker_rank0").classList.add("active");
    } else if (platform == "hacker_earth") {
        platform3.innerHTML = res_html;
        document.querySelector("#hacker_earth0").classList.add("active");
    } else if (platform == "leet_code") {
        platform4.innerHTML = res_html;
        document.querySelector("#leet_code0").classList.add("active");
    }
}

callingAPI("codeforces");
callingAPI("hacker_rank");
callingAPI("hacker_earth");
callingAPI("leet_code");

function imageurl(platform) {
    // if (platform == "codeforces") {
    //     return "./assets/contest3bg.avif";
    // } else if (platform == "hacker_rank") {
    //     return "./assets/contest3bg.avif";
    // } else if (platform == "hacker_earth") {
    return "./assets/contest3bg.avif";
    // }
}