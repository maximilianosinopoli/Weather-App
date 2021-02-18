const ft = new Fetch;
const ui = new UI;

const search = document.querySelector('.search');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const city = search.value;
    console.log(city);

    ft.getCurrent(city).then((data) => {
        ui.populateUI(data)
    });  

});

