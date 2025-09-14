const btn = document.getElementById("btn-turnLeft");
const input = document.getElementById("input-command");
const returnInfo = document.getElementById("returned-value");
const baseUrl = "http://localhost:3000";

btn.addEventListener("click", post);
btn.addEventListener("click", getInfo);

async function post(e) {
    e.preventDefault();
    const res = await fetch(baseUrl + "/command", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            command: input.value
        })
    });
}

async function getInfo(e) {
    e.preventDefault();
    const res = await fetch(baseUrl + "/return", {method: "GET"});
    const data = await res.json();
    console.log(data);
    const returnValue = data.returnValue;
    returnInfo.innerText = returnValue;
}