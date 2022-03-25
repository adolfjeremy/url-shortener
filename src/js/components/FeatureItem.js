class FeatureItem extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="feature_item">
                        <div class="img_container">
                            <img src="${this._data.image}" alt="chart image">
                        </div>
                        <div class="feature_desc">
                            <h3>${this._data.title}</h3>
                            <p>${this._data.description}</p>
                        </div>
                    </div>
            `;
    }
}

customElements.define("feature-item", FeatureItem);
