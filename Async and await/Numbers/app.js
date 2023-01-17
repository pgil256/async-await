let number = 4;
let numbers = [4, 6, 11]
let URL = "http://numbersapi.com";


async function number() {
  let data = await $.getJSON(`${URL}/${number}?json`);
  console.log(data);
}
number();

async function numbers() {
  let data = await $.getJSON(`${URL}/${numbers}?json`);
  console.log(data);
}
numbers();

async function facts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
facts();