const categoriesEl = document.querySelector("#categories");

const titleEl = categoriesEl.querySelectorAll("h2");

console.log("Number of categories:", titleEl.length);

const allCategory = categoriesEl.querySelectorAll(".item");

const allTitleEl = allCategory.forEach((title) => {
  const titleEl = title.querySelector("h2");
  const elementsLi = title.querySelectorAll("li");
  console.log("Category:", titleEl.textContent);
  console.log("Elements:", elementsLi.length);
});
