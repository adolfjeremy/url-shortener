class FooterBar extends HTMLElement {
    set socialImages(socialImages) {
        this._socialImages = socialImages;
        this.render();
    }

    render() {
        this.innerHTML = `
             <h2>Shortly</h2>
                <div class="container">
                    <h3>Features</h3>
                    <a src="#">Link Shortening</a>
                    <a src="#">Branded Links</a>
                    <a src="#">Analytics</a>
                </div>
                <div class="container">
                    <h3>Resources</h3>
                    <a src="#">Blog</a>
                    <a src="#">Developers</a>
                    <a src="#">Support</a>
                </div>
                <div class="container">
                    <h3>Company</h3>
                    <a src="#">About</a>
                    <a src="#">Our Team</a>
                    <a src="#">Careers</a>
                    <a src="#">Contact</a>
                </div>
        `;
        const socialContainer = document.createElement("div");
        socialContainer.setAttribute("class", "social container");
        this._socialImages.forEach((image) => {
            const img = document.createElement("img");
            img.setAttribute("src", image);
            socialContainer.append(img);
        });
        this.append(socialContainer);
    }
}

customElements.define("footer-bar", FooterBar);

export default FooterBar;
