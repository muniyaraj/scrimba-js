
let count = 0

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    console.log("button clicked")
    count += 1
    // countEl.innerText = count
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.textContent = count
}