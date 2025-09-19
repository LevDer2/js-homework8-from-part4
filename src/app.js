const input = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let urlList = [];

const render = function () {
  listRef.innerHTML = urlList
    .map(
      (url, index) =>
        `<li>
      <a target="_blank" href="${url}">${url}</a>
      <button type="button" data-index="${index}" class="delete">Del</button>
      <button type="button" data-index="${index}" class="edit">Edit</button>
    </li>`
    )
    .join("");
};

addBtn.addEventListener("click", function () {
  const url = input.value.trim();
  // console.log(url);
  if (url) {
    urlList.push(url);
    // console.log(urlList);
    input.value = "";
    render();
  }
});

listRef.addEventListener("click", (event) => {
  // console.log(event.target.nodeName);
  const index = event.target.dataset.index;
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  if (event.target.classList.contains("edit")) {
    const newUrl = prompt("Редагуйте посилання", urlList[index]);
    if (newUrl) {
      urlList[index] = newUrl;
      render();
    }
  }

  if (event.target.classList.contains("delete")) {
    urlList.splice(index, 1);
    render();
  }
});
