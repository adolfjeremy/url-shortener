class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set backgroundImage(backgroundImage) {
        this._backgroundImage = backgroundImage;
        this.renderBackgroundImage();
    }

    render() {
        const textContainer = document.createElement("div");
        const imageContainer = document.createElement("div");
        textContainer.setAttribute("class", "text_container");
        textContainer.innerHTML = `
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insight on how your links are performing.</p>
            <a class="button">Get Started</a>
        `;
        imageContainer.setAttribute("class", "hero_image_container");
        imageContainer.innerHTML = `
            <img class="hero_image" alt="working illustration"/>
        `;
        this.append(textContainer, imageContainer);
    }

    renderBackgroundImage() {
        this.querySelector(".hero_image").setAttribute(
            "src",
            `${this._backgroundImage}`
        );
    }
}

customElements.define("hero-section", Hero);
