let table = document.getElementsByClassName("table")[0]
const getResult = (jsonArr) => {
    console.log(jsonArr)
    for(obj of jsonArr){
        table.children[1].insertAdjacentHTML("beforeend", `
            <tr>
                <td>${obj.rank}</td>
                <td><img src="${obj.person.squareImage}">${obj.person.name}</td>
                <td>${obj.countryOfCitizenship}/${obj.city}</td>
                <td>${obj.finalWorth}</td>
            </tr>
        `)
    }
    document.querySelector(".loader").remove()
}
const getJSON = () => {
    fetch("https://forbes400.herokuapp.com/api/forbes400/")
        .then(response => response.json())
        .then(json => getResult(json))
        .catch(err => netErr())
}
function netErr(){
    console.log("Network Error")
    let spinner = document.getElementsByClassName("spinner-border")[0]
    let msg = document.querySelector("#msg")
    spinner.remove()
    msg.innerHTML = "Network Error"
    msg.classList.remove("text-primary")
    msg.classList.add("text-danger")
}
window.onload = getJSON