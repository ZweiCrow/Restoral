class chef {
    constructor(name,job,photo) {
        this.name = name
        this.job = job
        this.photo = photo
    }
}


const path = document.querySelector("#chefs");
let html = "";

const chef1 = new chef("Kaneshiro Yoshie",  "Founder",        "assets/images/photos/Chef1.jpg")
const chef2 = new chef("Augusto Miniati",   "Administrator",  "assets/images/photos/Chef2.jpg")
const chef3 = new chef("Joseph Grondin",    "Sous Chef",      "assets/images/photos/Chef3.jpg")
const chef4 = new chef("Eugène Perreault",  "Pastry chef",    "assets/images/photos/Chef4.jpg")
const chef5 = new chef("Bertram Vonnegut",  "Head Chef",      "assets/images/photos/Chef5.jpg")
const chef6 = new chef("Celino Bonilla",    "Assistant Chef", "assets/images/photos/Chef6.jpg")

let chefs = [chef1,chef2,chef3,chef4,chef5,chef6];

arrToHtml(chefs);
path.innerHTML = html;

function arrToHtml(arr) {
    for (const el of arr) {
        html += `<li>
                    <img src="${el.photo}" alt="">
                    <h3>${el.name}</h3>
                    <p>${el.job}</p>
                    <div>
                        <ul>
                            <li><a href=""><img src="assets/images/instagram.svg" alt=""></a></li>
                            <li><a href=""><img src="assets/images/facebook.svg" alt=""></a></li>
                            <li><a href=""><img src="assets/images/twitter.svg" alt=""></a></li>
                            <li><a href=""><img src="assets/images/google.svg" alt=""></a></li>
                        </ul>
                    </div>
                  </li>
                  `
      }
}