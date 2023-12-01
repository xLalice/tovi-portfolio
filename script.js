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

function showSection(selector) {
    document.querySelectorAll("nav ul li").forEach(function (tab) {
        tab.classList.remove("activeTab");
    });

    document.querySelector("button").classList.remove("activeTab");
    document.querySelector(selector).classList.add("activeTab");
}

function showHome() {
    clearContent();
    let content = `
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="./Change.jpg">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="./works/4.jpeg">
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="./works/14.jpeg">
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    `;
    section.innerHTML = content;
    showSection("#home");
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
    showSection("#works");
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
    showSection("button[class='dropbtn']");
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
    showSection("#more");
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
    showSection("#about");
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
    showSection("#contact");
}

document.querySelector("#works").addEventListener("click", showWorks);
document.querySelector("#sketches").addEventListener("click", showSketches);
document.querySelector("#models").addEventListener("click", show3dModels);
document.querySelector("#about").addEventListener("click", showAbout);
document.querySelector("#contact").addEventListener("click", showContact);
document.querySelectorAll(".home").forEach(item => {
    item.addEventListener("click", showHome);
})
