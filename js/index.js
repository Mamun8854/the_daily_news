const loadNewsData = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json().catch((error) => console.log(error));
  displayData(data.data.news_category);
};

const displayData = (catagorys) => {
  catagorys.forEach((catagory) => {
    console.log(catagory);
  });
};
loadNewsData();
