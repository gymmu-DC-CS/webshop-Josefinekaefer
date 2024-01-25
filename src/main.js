import { jsonLoader } from "./utils"

function render(data, targetElement) {
  targetElement.innerHTML += `
<div class="article">
    <h3>${data.title}</h3>
    <div class="description">
        ${data.description}
    </div>
    <div class="description">
        ${data.price}
    </div>
</div>
`// links to the style.css say how the data should look
}

async function main() {
  const artList = document.getElementById("article-list")

  const data = await jsonLoader("/level-02.json") // links to the data base 

  for (let i = 0; i < data.length; i++) {
    render(data[i], artList)
  } // cycles through the data base 
}

document.addEventListener("DOMContentLoaded", main)
