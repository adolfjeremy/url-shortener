import "./components/Header.js";
import "./components/Hero.js";
import "./components/ShortenUrlList.js";
import "./components/FeatureList.js";
import "./components/Footer.js";

import { composeData } from "./data/ComposeData.js";
import toogleMobileMenu from "./action/toggleMobileMenu.js";
import heroImage from "./../images/illustration-working.svg";
import copyLink from "./action/copy.js";
import featureData from "../featureData.js";
import socialImages from "../socialImage.js";

document.body.onclick = () => {
    document.body.classList.contains("no-scroll") && toogleMobileMenu();
};

const headerMenuElement = document.querySelector("header-menu");
headerMenuElement.clickEvent = toogleMobileMenu;

const heroElement = document.querySelector("hero-section");
heroElement.backgroundImage = heroImage;

const searchBarElement = document.querySelector("search-bar");
searchBarElement.submitEvent = composeData;

const urlItemElement = document.querySelector("url-list");
urlItemElement.onClick = copyLink;

const featureListElement = document.querySelector("feature-list");
featureListElement.datas = featureData;

const footerElement = document.querySelector("footer-bar");
footerElement.socialImages = socialImages;
