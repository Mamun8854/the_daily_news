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
      "lg:flex",
      "justify-between",
      "text-black",
      "text-center"
    );

    newCatagoryDiv.innerHTML = `
        <button class="font-bold text-slate-200" onclick="catagoryNews(${catagory.category_id})">${catagory.category_name}</button>
    `;
    catagoryMenuContainer.appendChild(newCatagoryDiv);
  });
};

// Catagory News code For Click News Catagory
const catagoryNews = (id) => {
  //   console.log(id);

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
    <img class="lg:w-5/12 w-full h-80" src="${news.thumbnail_url}" alt="Album">
    <div class="card-body">
      <h2 class="card-title font-extrabold	text-white">${
        news === null || news == "" ? "No Information Found" : news.title
      }</h2>
      <p class="text-ellipsis overflow-hidden">${
        news.details ? news.details.slice(0, 200) : "No data found"
      }...</p>  



      <div class="lg:flex justify-between items-center text-center">
      <div class="lg:flex justify-start justify-items-center">
        <div class="avatar">
          <div
            class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img src="${news.author ? news.author.img : "No author data found"}"
            />
          </div>
        </div>
        <div class="ml-5 pt-2.5">
          <p>
            ${
              news.author.name === null || news.author.name === ""
                ? "No author data found"
                : news.author.name
            }"
          </p>
          <p>${
            news.author.published_date === null ||
            news.author.published_date === ""
              ? "No published date data found"
              : news.author.published_date
          }</p>
        </div>
      </div>
      <div>
            <p> <i class="fa-solid fa-eye"></i> ${news.total_view}</p>    
        </div>
      <div>
        <button class="text-black"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>

    </div>
    </div>
    
    
</div>


    `;
    newsBody.appendChild(newNewsDiv);
  });
};
loadNewsData();
