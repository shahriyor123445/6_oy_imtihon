// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Formni jo'natishni to'xtatish

//     // Input qiymatlarini olish
//     const productTitle = document.getElementById('title').value;
//     const productPrice = document.getElementById('price').value;
//     const productDescription = document.getElementById('description').value;

//  console.log(productDescription, productPrice, productTitle)
//     // Obyekt yaratish,
//     const user = {
//         productTitle: productTitle,
//         productPrice: productPrice,
//         productDescription: productDescription
//     };

//     // userInfo div elementiga foydalanuvchi ma'lumotlarini qo'shish
//     const userInfoDiv = document.getElementById('userInfo');
//     const userDiv = document.createElement('div');
//     userDiv.textContent = user;
//     userInfoDiv.appendChild(userDiv);

//     // Formani tozalash
//     document.getElementById('userForm').reset();
// });

const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const userInfo = document.getElementById("list");

const form = document.forms[0];
const products = [];

form.onsubmit = function (event) {
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
    const li = document.createElement("li")
    const listItem = document.createElement("div");
    const pri = document.createElement("div");
    const div = document.createElement("div");
    listItem.textContent = item.title;
    pri.textContent = item.price;
    div.textContent = item.description;

    li.appendChild(listItem);
    li.appendChild(pri);
    li.appendChild(div);
    userInfo.appendChild(li)
  });
}


