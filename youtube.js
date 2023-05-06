// key =  AIzaSyDq1ThuKd63CGMc178rIvnscNriIww6L4A
// play list = PLYOPkdUKSFgVaH3wgkzGpMuGb29dDZl6j

const main = document.querySelector("main");
const key = "AIzaSyDq1ThuKd63CGMc178rIvnscNriIww6L4A";
const playListId = "PLYOPkdUKSFgVaH3wgkzGpMuGb29dDZl6j";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

/*
json 객체 
{
  "name" : "식빵",
  "family" : "웰시코기",
}

json 배열
"배열이름" : [
  {"name" : "식빵",  "family" : "웰시코기",},
  {"name" : "식빵",  "family" : "웰시코기",},
  {"name" : "식빵",  "family" : "웰시코기",},
]

*/

fetch(url)
  .then((data) => {
    // console.log(data);
    return data.json();

  })
  .then((json) => {
    //console.log(json);
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