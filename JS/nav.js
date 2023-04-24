document.addEventListener("DOMContentLoaded", () => initializeMenu());

const menuItems = [
  { title: "Home", link: "/index.html" },
  { title: "Blog", link: "/HTML/blog.html" },
  { title: "Design", link: "/HTML/design.html" },
  { title: "Art", link: "/HTML/art.html" },
];

const initializeMenu = () => {
  const nav = document.querySelector("nav");

  const ul = document.createElement("ul");

  for (let item of menuItems) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
};
