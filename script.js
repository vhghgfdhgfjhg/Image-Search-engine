const searchbtn = document.getElementById("search");
const inputbox = document.getElementById("inputbox");
const outputblock = document.querySelector(".output");
// const loadbtnblock = document.querySelector(".btn");

let keyword = "";
var page = 1;
// function loadbtngen(){
//     var loadbtn = document.createElement("button");
//     loadbtn.className = "more";
//     loadbtn.textContent = "Load more";
//     loadbtnblock.appendChild(loadbtn);
//     loadbtn.addEventListener('click',function(){
//         var page = 1;
//         var pages = page++; 
//         console.log(pages);
//      })    
// }

const accesskey = "diwo361Y8z_IfuLE8xSqubUdVGWkCZBbxxCOPe5VMd8";

async function searchImg() {
  keyword = inputbox.value;
  console.log(inputbox.value);
  
  const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesskey}`;

  const res = await fetch(url);
  var data = await res.json();
  var result = data.results;
    console.log(result);
    
//   for (let index = 0; index < 20; index++) {
//     const element = result[index].preview_photos[page].urls.small;
    // console.log(element);
    var photo = [""];
    photo.map(() => {
    for (let index = 0; index < 20; index++) {
        const element = result[index].preview_photos[page].urls.small;
      const img = document.createElement("img");
      img.className = "box";
      img.src = element;
      outputblock.appendChild(img);
        }
    });
  }
//   console.log(pre);
//   element = ' ';
  
// }

searchbtn.addEventListener("click", function (e) {
  e.preventDefault();
  page = 1;
  searchImg();
  loadbtngen();
  inputbox.value = "";

  console.log(inputbox.value);

  function loadbtngen() {
    var loadbtn = document.createElement("button");
    loadbtn.className = "more";
    loadbtn.textContent = "Load more";
    loadbtnblock.appendChild(loadbtn);
}
  
});



loadbtn.addEventListener('click',function(){
    var pages = page++; 
    console.log(pages);
    
 })
