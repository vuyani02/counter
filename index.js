let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    document.getElementById("no").textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    document.getElementById("no").textContent = 0
}
