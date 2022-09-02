// ---->Load data Code<----
const loadNewsData = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json().catch((error) => console.log(error));
  displayData(data.data.news_category);
};
// Display Data code
const displayData = (catagorys) => {
  const catagoryMenuContainer = document.getElementById("catagory-menu");
  catagorys.forEach((catagory) => {
    // console.log(catagory);

    const newCatagoryDiv = document.createElement("div");

    catagoryMenuContainer.classList.add(
      "flex",
      "justify-between",
      "text-black"
    );

    newCatagoryDiv.innerHTML = `
        <button class="   
        " onclick="catagoryNews(${catagory.category_id})">${catagory.category_name}</button>
    `;
    catagoryMenuContainer.appendChild(newCatagoryDiv);
  });
};

// Catagory News code For Click News Catagory
const catagoryNews = (id) => {
  console.log(id);

  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatagoryNews(data.data))
    .catch((error) => console.log(error));
};
// ----->display news body<----
const displayCatagoryNews = (newses) => {
  //   console.log(newses);
  const newsBody = document.getElementById("news-body");
  newsBody.innerHTML = ``;
  newses.forEach((news) => {
    console.log(news);
    const newNewsDiv = document.createElement("div");
    newNewsDiv.innerHTML = `
    <div class="card lg:card-side bg-base-100 shadow-xl mt-10 mb-20">
        <img class="w-5/12 h-80" src="${news.thumbnail_url}" alt="Album">
        <div class="card-body">
            <h2 class="card-title font-extrabold	text-black">${news.title}</h2>
             <p class="text-ellipsis overflow-hidden">${news.details.slice(
               0,
               200
             )}...</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary text-black">Details</button>
            </div>
        </div>
    </div>
  
    `;
    newsBody.appendChild(newNewsDiv);
  });
};
loadNewsData();
