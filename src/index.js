import "regenerator-runtime/runtime.js";
import { DataManagement, urls } from "./js/data/DataManagement.js";
import "./js/main.js";
import "./styles/style.scss";

window.onload = () => {
    DataManagement.loadUrlData();
    DataManagement.loadUrlData();
    const shortenUrlListElement = document.querySelector("url-list");
    shortenUrlListElement.datas = urls;
};
