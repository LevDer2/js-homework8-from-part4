const input = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let urlList = JSON.parse(localStorage.getItem("urlList")) || [];

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

const save = function () {
  localStorage.setItem("urlList", JSON.stringify(urlList));
  render()
};

addBtn.addEventListener("click", function () {
  const url = input.value.trim();
  // console.log(url);
  if (url) {
    urlList.push(url);
    // console.log(urlList);
    input.value = "";
    save();
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
      save();
    }
  }

  if (event.target.classList.contains("delete")) {
    urlList.splice(index, 1);
    save();
  }
});

render()

const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

userName.value = localStorage.getItem("userName") || "";
password.value = localStorage.getItem("password") || "";

userName.addEventListener("input", function () {
  return localStorage.setItem("userName", userName.value);
});
password.addEventListener("input", function () {
  return localStorage.setItem("password", password.value);
});

saveBtn.addEventListener("click", () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("password");
  userName.value = "";
  password.value = "";
});
