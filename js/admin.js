const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const userInfo = document.getElementById("list");
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.disabled = false;

const form = document.forms[0];
const products = [];
function tekshirish() {
  if (title.value && price.value && description.value) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

title.addEventListener("input", tekshirish);
price.addEventListener("input", tekshirish);
description.addEventListener("input", tekshirish);

form.onsubmit = function (event) {
  tekshirish();
  event.preventDefault();

  const newProduct = {
    id: Date.now(),
    title: title.value,
    price: price.value,
    description: description.value,
  };

  title.value = "";
  price.value = "";
  description.value = "";

  products.push(newProduct);
  updateProductList();
};

function updateProductList() {
  userInfo.innerHTML = "";

  products.map((item) => {
    const li = document.createElement("li");
    const listItem = document.createElement("div");
    const pri = document.createElement("div");
    const div = document.createElement("div");
    listItem.textContent = item.title;
    pri.textContent = item.price;
    div.textContent = item.description;

    li.appendChild(listItem);
    li.appendChild(pri);
    li.appendChild(div);
    userInfo.appendChild(li);
  });
}
