const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1:

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.classList.add("subheading");

// Question 5:

const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  console.dir(paragraphs[i].innerHTML);
  paragraphs[i].style.color = "red";
}

// Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

// Question 7:

