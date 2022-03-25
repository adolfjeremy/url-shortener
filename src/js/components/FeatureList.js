import "./FeatureItem.js";

class FeatureList extends HTMLElement {
    set datas(datas) {
        this._datas = datas;
        this.render();
    }

    render() {
        this._datas.forEach((data) => {
            const featureItemElement = document.createElement("feature-item");
            featureItemElement.data = data;
            this.append(featureItemElement);
        });
    }
}

customElements.define("feature-list", FeatureList);
