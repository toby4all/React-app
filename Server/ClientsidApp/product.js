function loadData() {
  fetch("http://localhost:6001/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.map((ele)=>{
        var card = document.createElement("div");
      var imgContainer = document.createElement("div");
      var contentContainer = document.createElement("div");
      var img = document.createElement("img");
      var h3 = document.createElement("h3");
      var p = document.createElement("p");
      var h4 = document.createElement("h4");

      card.appendChild(imgContainer);
      card.appendChild(contentContainer);

      card.style.width = "300px";
      card.style.height = "400px";
      card.style.padding = "20px";
      card.style.textAlign = "center";
      card.style.boxShadow = "0 0 10px black";

      img.src = ele.image;

      img.height = "200";
      img.alt = "Product Image";

      h3.innerText = ele.title;
      p.innerText = "$ " + ele.price;
      h4.innerText = ele.category;

      imgContainer.appendChild(img);
      contentContainer.appendChild(h3);
      contentContainer.appendChild(p);
      contentContainer.appendChild(h4);

      document.getElementById("products").appendChild(card);
      })
    });
};
