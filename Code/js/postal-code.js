var postal_Input = document.querySelector("#postal_Input");
var search_Postal = document.querySelector("#search_Postal");
var search_Postal_type = document.querySelector("#search_Postal_type");
var postal_error = document.querySelector("#postal_error");
var postal_success = document.querySelector("#postal_success");
var bind_postal_list = document.querySelector("#bind_postal_list");
var postal_list_heading = document.querySelector("#postal_list_heading");

search_Postal.addEventListener("click", displayPostalResult);

function displayPostalResult() {
    search_Postal.value = "Searching...";
    var type = search_Postal_type.value;
    var postal_text = postal_Input.value;
    console.log(type);
    if (type == "pin") {
        fetch_pin_result(postal_text);
    } else {
        fetch_office_result(postal_text);
    }
}

function fetch_pin_result(pin) {
    // to fetch postal report based on PIN code
    try {
        fetch(`https://api.postalpincode.in/pincode/${pin}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                search_Postal.value = "Search";
                console.log(data);
                binding_result(data);
            });
    } catch (error) {
        alert(error);
    }
}

function fetch_office_result(offc_name) {
    // to fetch postal report based on PIN code
    try {
        fetch(`https://api.postalpincode.in/postoffice/${offc_name}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                search_Postal.value = "Search";
                console.log(data);
                binding_result(data);
            });
    } catch (error) {
        alert(error);
    }
}

function binding_result(data) {
    if (data[0].Status == "Success") {
        postal_error.innerHTML = "";
        var res_html = "";
        for (var i = 0; i < data[0].PostOffice.length; i++) {
            console.log(data[0].PostOffice[i]);
            postal_list_heading.innerHTML = data[0].Message;
            postal_list_heading.setAttribute("class", "text-center");
            res_html += `<li class="list-group-item d-flex align-items-start my-2" style="border-left-width: 1px; max-width:max-content">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold fs-0 text-decoration-underline">${
                          data[0].PostOffice[i].Name
                        }</div>
                        
                        <div class="my-2">
                            <span class="fw-bold">Delivery: </span>
                            <span class="badge bg-success">${
                              data[0].PostOffice[i].DeliveryStatus
                            }</span>
                        </div>
                        <div class="my-2">
                            <span class="fw-bold">Circle: </span>
                            <span class="badge bg-warning text-dark">${
                              data[0].PostOffice[i].Circle
                            }</span>
                        </div>
                        <div class="my-2">
                            <span class="fw-bold">District: </span>
                            <span class="badge bg-primary">${
                              data[0].PostOffice[i].District
                            }</span>
                        </div>
                        <div class="my-2">
                            <span class="fw-bold">Division: </span>
                            <span class="badge bg-dark">${
                              data[0].PostOffice[i].Division
                            }</span>
                        </div>
                        <div class="my-2"><span class="fw-bold">Region: </span>
                            <span class="badge bg-secondary">${
                              data[0].PostOffice[i].Region
                            }</span>
                        </div>
                        <div class="my-2">
                            <span class="fw-bold">State: </span>
                            <span class="badge bg-light text-dark">${
                              data[0].PostOffice[i].State
                            }</span>
                        </div>
                        <div class="my-2">
                            <span class="fw-bold">Country: </span>
                            <span class="badge bg-blue">${
                              data[0].PostOffice[i].Country
                            }</span>
                        </div>
                    </div>
                    <span class="badge bg-danger rounded-pill">${i + 1}</span>
                </li>`;
            bind_postal_list.innerHTML = res_html;
        }
    } else {
        bind_postal_list.innerHTML = "";
        postal_list_heading.innerHTML = "";
        var res_html = `
                    <div class="row">
                        <div class="col-lg-2 col-sm-12 col-md-12"></div>
                        <div class="col-lg-8 col-sm-12 col-md-12">
                            <div class="alert alert-danger" role="alert">
                                ${data[0].Message}. 
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-12 col-md-12"></div>
                    </div>`;
        postal_error.innerHTML = res_html;
    }
}