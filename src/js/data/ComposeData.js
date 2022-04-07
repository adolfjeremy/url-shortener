import ApiRequest from "./ApiRequest";
import { DataManagement } from "./DataManagement";
import { urls } from "./DataManagement";
import "../components/InputBar.js";

const searchBarElement = document.querySelector("search-bar");
const inputField = document.querySelector(".input_field");

export const composeData = async () => {
    if (searchBarElement.value.includes("https://")) {
        const request = await ApiRequest.ShortingUrl(searchBarElement.value);
        const urlObject = DataManagement.composeUrlObject(
            request.original_link,
            request.short_link
        );
        DataManagement.isUrlsLenghtBiggerThanThree() && urls.shift();
        urls.push(urlObject);
        DataManagement.updateStorageData();
        window.location.reload();
    } else {
        inputField.classList.add("error");
        searchBarElement.renderError("please add a link");
    }
};
