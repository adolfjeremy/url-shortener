import "../components/ShortenUrlList.js";
const copyLink = (event) => {
    navigator.clipboard.writeText(event.target.previousElementSibling.value);
    event.target.innerText = "Copied!";
    event.target.style.background = "hsl(257, 27%, 26%)";
    setTimeout(() => {
        event.target.innerText = "Copy";
        event.target.removeAttribute("style");
    }, 1500);
    event.preventDefault();
};

export default copyLink;
