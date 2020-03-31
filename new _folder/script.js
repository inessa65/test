let box = [
    {
      title: "monday",
      color: "ye",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "tuesday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "wednesday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "thursday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "friday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "saturday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    },
    {
      title: "sunday",
      color: "",
      cards: [{ text: "" }, { text: "" }, { text: "" }]
    }
  ];
  const input = document.querySelector(".input");
  const list = document.getElementById("list");
  for (let i = 0; i < box.length; i++) {
    list.insertAdjacentHTML(
      `beforeend`,
      `<li id="li">
     <h1>${box[i].title} </h1>
     <input class="input" type="text"><button class="btn" >add</button>
      <div class='cards'>
      </div>
       </li>`
    );
  
    const divs = document.getElementsByClassName("cards");
    const div = divs[divs.length - 1];
  
    for (let j = 0; j < box[i].cards.length; j++) {
      div.insertAdjacentHTML(`beforeend`, `<div>${box[i].cards[j].text}</div>`);
    }
  }
  const btns = document.querySelectorAll(".btn");
  //btns.innerHTML="";
  for (let k = 0; k < btns.length; k++) {
    btns[k].addEventListener("click", function() {
      const j = btns[k].previousElementSibling.value;
  
      btns[k].nextElementSibling.insertAdjacentHTML(
        `beforeend`,
        `<p class="p">${j} 
       
  
     
        <button class="btn2">delete</button>
        </p>`
      );
      const btn2 = document.querySelectorAll(".btn2");
      for (let f = 0; f < btn2.length; f++) {
        btn2[f].onclick = function() {
          this.parentNode.remove();
        };
      }
      const p = document.querySelectorAll(".p");
      for (let d = 0; d < p.length; d++) {
        p[d].addEventListener("contextmenu", function(e) {
          e.preventDefault();
  
          const div = document.createElement("div");
  
          p[d].appendChild(div);
          div.innerHTML = ` <div id="menu"><textarea id="red"> ${j}</textarea>
      <button  id="gold">cansel</button>
      <button id="green">remove</botton>
      <button id="green">update</botton></div>`;
        });
      }
    });
  }
  
  const date = document.getElementById("date");
  const options = { weekday: "long", day: "numeric", month: "long" };
  const today = new Date();
  date.innerHTML = today.toLocaleDateString("en-Us", options);
  