const btn = document.getElementById("btn-turnLeft");
const input = document.getElementById("input-command");
const returnInfo = document.getElementById("returned-value");
const turtlesList = document.getElementById("turtles-list")
const btnUpdateTurtleList = document.getElementById("btn-updateTurtleList")
const baseUrl = "http://localhost:3000";

btn.addEventListener("click", post);
btn.addEventListener("click", getInfo);
btnUpdateTurtleList.addEventListener("click", getTurltes)

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

async function getTurltes(e) {
    e.preventDefault();
    const res = await fetch(baseUrl + "/turtles", {method: "GET"});
    const data = await res.json();
    console.log(data);
    const turtle = data.turtle;
    turtlesList.innerHTML = `<div class="turtle">${turtle}</div>`;
    
}