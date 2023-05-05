// key =  AIzaSyCuAyJp7mF1SltU9KSBUP0oc_OXszMzlk0
// play list =  PLfYNuKPjo-c-O_aCqmoSgbH4U48JD9SGsplay

const main = document.querySelector("main");
const key = "AIzaSyCuAyJp7mF1SltU9KSBUP0oc_OXszMzlk0";
const playListId = "PLfYNuKPjo-c-O_aCqmoSgbH4U48JD9SGsplay";
const num = 6;
const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxReseult=${num}`;

/*
jason 객체
{
  "name" : "식빵",
  "family" : "웰시코기",
}

jason 배열 
"배열이름"  : [
  {"name" : "식빵", "family" : "웰시코기",},
  {"name" : "식빵", "family" : "웰시코기",},
  {"name" : "식빵", "family" : "웰시코기",},  
]

*/

fetch(url)
  .then((data)=> {
    // consol.log(data);
    return data.jason();
    
  })
  .then((jason) => {
    // console.log(jason);
    let items = jason.items;
    console.log(items);

    let result = "";
    // a += c
    // a = a + c

    items.map((el) => {
      result += `
        <article>
          <img src="${el.snippet.thumbnails.medium.url}">
          <h1>${el.snippet.title}</h1>
        </article>
      `;
    });
    main.innerHTML = result;
  })