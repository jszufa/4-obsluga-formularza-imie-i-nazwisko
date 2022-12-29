let form = document.getElementById('form')

const formFunction = (event) => {

  event.preventDefault();
  //console.log('prevented');

  let value1 = document.getElementsByName('fname')[0].value;
  let value2 = document.getElementsByName('lname')[0].value;
  console.log(`Imię: ${value1}`);
  console.log(`Nazwisko: ${value2}`);

}


form.addEventListener('submit', formFunction)

