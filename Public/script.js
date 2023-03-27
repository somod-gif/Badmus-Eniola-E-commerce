let screen = document.getElementById("screen");
let menscategory = document.getElementById("menscategory");
let womenscategory = document.getElementById("womensscategory");
let Jewelery = document.getElementById("Jewelery");
let Electronics = document.getElementById("Electronics");
let products = [];
        function dm() {
            if (document.body.style.backgroundColor == "white") {
                document.body.style.backgroundColor = "black"
                document.body.style.color = "white"

            } else {
                document.body.style.backgroundColor = "white"
                document.body.style.color = "black"
            }
        }

        let data = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    screen.innerHTML += `
                    <div class="each-products shadow mx-2 mt-4 rounded">
                        <div class="p-4">
                            <img class="products-img mx-3 mt-2" src="${element.image}" alt="">
                            <h3 class="category">${element.category}</h3>
                            <p class="Products">${element.title}</p>
                            <h1 class="price">$${element.price}</h1>
                            <span class="ratings"><i class="icofont-star"></i>${element.rating.count}</span> <br>
                        </div>
                        <button class="btn btn-primary">Add to  Cart</button>
                    </div>`;
                }
            })
        
        function mensclothing() {
            let data = fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    // console.log(json)
                    menscategory.innerHTML = ""
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        const category = element.category.toLowerCase();
                        console.log(menscategory);
                        if (category == "men's clothing") {
                            menscategory.innerHTML += `<div class="each-products shadow">
                        <img class="products-img" src="${element.image}" alt="">
                        <h1 class="category">${element.category}</h1>
                        <h3 class="Products">${element.title}</h3>
                        <h1 class="price">$${element.price}</h1>
                        <span class="ratings"><i class="icofont-star"></i>${element.rating.count}</span> <br>
                        <br>
                        <button class="btn btn-outline-primary mx-4" onclick="addtocart()">ADD TO CART</button>
                    </div>`
                            screen.style.display = "none";
                            menscategory.style.display = "block";
                            womenscategory.style.display = "none";
                            Jewelery.style.display = "none";
                            // Electronics.style.display = "none";
                        }
                    }
                })
        }

        function womensclothing() {

            let data = fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    // console.log(json)
                    womenscategory.innerHTML = "";
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        const category = element.category.toLowerCase();
                        // console.log(womenscategory);
                        if (category == "women's clothing") {
                            womenscategory.innerHTML += `<div class="each-products shadow">
                        <img class="products-img" src="${element.image}" alt="">
                        <h1 class="category">${element.category}</h1>
                        <h3 class="Products">${element.title}</h3>
                        <h1 class="price">$${element.price}</h1>
                        <span class="ratings"><i class="icofont-star"></i>${element.rating.count}</span> <br>
                        <br>
                        <button class="btn btn-outline-primary mx-4" onclick="addtocart()">ADD TO CART</button>
                    </div>`
                            screen.style.display = "none";
                            menscategory.style.display = "none";
                            womenscategory.style.display = "block";
                            Jewelery.style.display = "none";
                            Electronics.style.display = "none";
                        }
                    }
                })
        }
        function jewelery() {
            let data = fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    // console.log(json)
                    Jewelery.innerHTML = ""
                    for (let index = 0; index < json.length; index++) {
                        const element = json[index];
                        const category = element.category.toLowerCase();
                        // console.log(Jewelery);
                        if (category == "jewelery") {
                            Jewelery.innerHTML += `<div class="each-products shadow">
                        <img class="products-img" src="${element.image}" alt="">
                        <h1 class="category">${element.category}</h1>
                        <h3 class="Products">${element.title}</h3>
                        <h1 class="price">$${element.price}</h1>
                        <span class="ratings"><i class="icofont-star"></i>${element.rating.count}</span> <br>
                        <br>
                        <button class="btn btn-outline-primary mx-4" onclick="addtocart()">ADD TO CART</button>
                    </div>`
                            screen.style.display = "none";
                            menscategory.style.display = "none";
                            womenscategory.style.display = "none";
                            Jewelery.style.display = "block";
                            Electronics.style.display = "none";
                        }
                    }
                })
        }
        function electronics() {
            let data = fetch("https://fakestoreapi.com/products")
              .then((res) => res.json())
              .then((json) => {
                // console.log(json)
                Electronics.innerHTML = "";
                for (let index = 0; index < json.length; index++) {
                  const element = json[index];
                  const category = element.category.toLowerCase();
                  // console.log(Jewelery);
                  if (category == "electronics") {
                    Electronics.innerHTML += `<div class="each-products shadow">
                        <img class="products-img" src="${element.image}" alt="">
                        <h1 class="category">${element.category}</h1>
                        <h3 class="Products">${element.title}</h3>
                        <h1 class="price">$${element.price}</h1>
                        <span class="ratings"><i class="icofont-star"></i>${element.rating.count}</span> <br>
                        <br>
                        <button class="btn btn-outline-primary mx-4" onclick="addtocart()">ADD TO CART</button>
                    </div>`;
                    screen.style.display = "none";
                    menscategory.style.display = "none";
                    womenscategory.style.display = "none";
                    Jewelery.style.display = "none";
                    Electronics.style.display = "block";
                  }
                }
              });
        }
        // function addtocart() {
        //     // window.location.href = "cartpage.html"

        //     // ev.preventDefault();
        // }
        // function carts() {
        //     // ev.preventDefault();
        //     window.location.href = "cartpage.html"
        // }