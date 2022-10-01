function res() {
    var headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "access-control-allow-origin",
    };
    try {
        fetch(`http://127.0.0.1:3000/data`, {
                method: "get",
                mode: "cors",
                headers: headers,
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => console.log(data));
    } catch (error) {
        console.log(error);
    }
}

res();