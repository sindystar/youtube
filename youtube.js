// key =  AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY
// play list =  PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu

const main = document.querySelector("main");
const key = "AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY";
const playListId = "PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxReseults=${num}`;

/*
json 객체
{
  "name" : "식빵",
  "family" : "웰시코기",
}

json 배열 
"배열이름"  : [
  {"name" : "식빵", "family" : "웰시코기",},
  {"name" : "식빵", "family" : "웰시코기",},
  {"name" : "식빵", "family" : "웰시코기",},  
]

*/

fetch(url)
  .then((data) => {
    // console.log(data);
    return data.json();
    
  })
  .then((json) => {
    // console.log(json);
    let items = json.items;
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