var axios = require("axios");

axios.get("https://www.nydailynews.com/ ").then(response) => {
    console.log(response.data)
};