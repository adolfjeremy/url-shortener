class ShortenUrlItem extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="unshorten_link">
            <p>${this._data.shortedOriginalUrl}</p>
            </div>
            <div class="shorten_link">
            <a class="short_link" href="https://${this._data.shortenUrl}/" target="_blank" rel="noopener noreferrer">${this._data.shortenUrl}</a>
            </div>
            <form id="copyForm">
            <input type="hidden" id="copy" value="${this._data.shortenUrl}">
            <button type="submit" class="copy_button">Copy</button>
            </form>
        `;
    }
}

customElements.define("url-item", ShortenUrlItem);
