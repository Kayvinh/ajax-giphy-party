// http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

// get form input value
// dig thru for img

async function getGiphy(evt) {
    evt.preventDefault();
    let urlGiphy = `http://api.giphy.com/v1/gifs/search?q=${getInput()}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    let giphy = await axios.get(urlGiphy);
    
    addGiphy(giphy.data.data[0].images.original.url);
}

async function addGiphy(url) {
    let addUrl = `<img src=${url}>`
    $("#giphy-container").append(addUrl);
}

function getInput() {
    return inputValue = $('#form-input').val();
}

$("#search-button").on('click', getGiphy);

