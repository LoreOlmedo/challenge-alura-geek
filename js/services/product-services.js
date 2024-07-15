const productList = () => {
  return fetch("http://localhost:3000/products")
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};

const createProducts = (name, price, image) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      image,
    }),
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};

const deleteProducts = (id) => {
  return fetch("http://localhost:3000/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => err.condole.log(err));
};

///

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  servicesProducts
    .createProducts(name, price, image)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
});

//
const btnEliminar = document.querySelector(".products-container");

btnEliminar.addEventListener("click", eliminarCard);
function eliminarCard() {
  alert("diste click en eliminar");
}

export const servicesProducts = {
  productList,
  createProducts,
  deleteProducts,
};
