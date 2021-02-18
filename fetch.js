class Fetch {

    async getCurrent(input) {

        const key= "c4fed54966ae63713807720a6b251a11";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`
        );

        const data = await response.json();

        console.log(data);

        return data;

     }
}
