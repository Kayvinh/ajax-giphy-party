"use strict";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const URL_GIPHY = `http://api.giphy.com/v1/gifs/search`

/** gets a gif from the giphy API */
async function getGiphy(evt) {
    evt.preventDefault();
    let formInput = getInput();
    let queryParams = {params:{api_key:API_KEY,q:formInput}};
    let giphyResponse = await axios.get(URL_GIPHY, queryParams);
    
    addGiphy(giphyResponse.data.data[0].images.original.url);
}

/** adds a giphy gif to the page */
async function addGiphy(url) {
    let addUrl = `<img src="${url}">`;
    $("#giphy-container").append(addUrl);
}

/** returns the user's form input */
function getInput() {
    return $('#form-input').val();
}

/** removes all giphy gifs from the page */
function removeGiphys(evt) {
    evt.preventDefault();
    $('#giphy-container').empty();
}
$("#search-button").on('click', getGiphy);
$("#remove-button").on('click', removeGiphys);
