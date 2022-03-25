import "./ShortenUrlItem.js";
class ShortenUrlList extends HTMLElement {
    set datas(datas) {
        this._datas = datas;
        this.render();
    }

    set onClick(onClick) {
        this._onClick = onClick;
    }

    render() {
        this._datas.forEach((data) => {
            const shortenUrlItemElemet = document.createElement("url-item");
            shortenUrlItemElemet.data = data;
            this.append(shortenUrlItemElemet);
        });
        this.querySelectorAll(".copy_button").forEach((element) => {
            element.addEventListener("click", this._onClick);
        });
    }
}

customElements.define("url-list", ShortenUrlList);
