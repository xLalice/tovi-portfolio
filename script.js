const section = document.querySelector("section");

function clearContent(){
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}

function hideFooter(shouldHide) {
    const footer = document.querySelector("footer");
    footer.style.display = shouldHide ? "none" : "flex";
}

function showHome(){
    clearContent();
    let img = document.createElement("img");
    img.src = "./Change.jpg";
    section.appendChild(img);
}

function showWorks() {
    clearContent();
    let worksDiv = document.createElement("div");
    worksDiv.className = "works";
    let list = document.createElement("ul");
    for (let i = 1; i < 15; i++) {
        list.innerHTML += `<li><img src="./works/${i}.jpeg"/></li>`;
    }
    hideFooter(false);
    worksDiv.appendChild(list);
    section.appendChild(worksDiv);
}

function showSketches() {
    clearContent();
    let sketchDiv = document.createElement("div");
    sketchDiv.className = "works";
    let list = document.createElement("ul");
    for (let i = 1; i < 12; i++) {
        list.innerHTML += `<li><img src="./sketches/${i}.jpeg"/></li>`;
    }
    hideFooter(false);
    sketchDiv.appendChild(list);
    section.appendChild(sketchDiv);
}

function show3dModels() {
    clearContent();
    let div = document.createElement("div");
    div.className = "works";
    let list = document.createElement("ul");
    for (let i = 1; i < 14; i++) {
        list.innerHTML += `<li><img src="./3d-Models/${i}.jpeg"/></li>`;
    }
    hideFooter(false);
    div.appendChild(list);
    section.appendChild(div);
}

function showAbout() {
    clearContent();
    let div = document.createElement("div");
    div.classList.add("about");
    let content = `
        <h1>I am Euldriq, a Filipino Multimedia Arts student in STI.<br> More works coming soon...</h1>
        <h2>You can view my works in my Instagram Accounts</h2>
        <div>
            <img src="./icons8-instagram.gif"/> 
            <p>@v_24th</p>
            <p>@euldriq</p>
        </div>
    `
    hideFooter(true);
    div.innerHTML = content;
    section.appendChild(div);
}

function showContact() {
    clearContent();
    let div = document.createElement("div");
    div.classList.add("contact");
    let content = `
        <h1>Contact</h1>    
        <p>tovibandioque@gmail.com</p>
        <form>
        <input type="text" placeholder="Name*">
        <input type="email" placeholder="Email*">
        <input type="text" placeholder="Subject*">
        <textarea row="3">Message*</textarea>
        <button> Send </button>
        </form>
    `

    hideFooter(true);
    div.innerHTML = content;
    section.appendChild(div);
}

document.querySelector("#works").addEventListener("click", showWorks);
document.querySelector("#sketches").addEventListener("click", showSketches);
document.querySelector("#models").addEventListener("click", show3dModels);
document.querySelector("#about").addEventListener("click", showAbout);
document.querySelector("#contact").addEventListener("click", showContact);
document.querySelectorAll(".home").forEach(item => {
    item.addEventListener("click", showHome);
})
