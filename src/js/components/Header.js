import "./MobileMenu.js";

class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(clickEvent) {
        this._clickEvent = clickEvent;
        this.hamburger();
    }

    render() {
        const mobileMenuElement = document.createElement("mobile-menu");
        const appName = document.createElement("a");
        appName.setAttribute("class", "app_name");
        appName.setAttribute("href", "/");
        appName.innerText = "Shortly";

        const hamburgerButtonElement = document.createElement("button");
        hamburgerButtonElement.setAttribute("id", "hamburgerButton");
        hamburgerButtonElement.innerHTML = `
            <div class="inner-line"></div>
        `;

        const navBar = document.createElement("nav");

        const leftContainer = document.createElement("div");
        leftContainer.setAttribute("class", "left_container");
        leftContainer.innerHTML = `
            <a>Features</a>
            <a>Pricing</a>
            <a>Resources</a>
        `;
        const rightContainer = document.createElement("div");
        rightContainer.setAttribute("class", "right_container");
        rightContainer.innerHTML = `
            <a>Login</a>
            <a class="button">Sign Up</a>
        `;

        navBar.append(leftContainer, rightContainer);
        this.append(appName, hamburgerButtonElement, mobileMenuElement, navBar);
    }

    hamburger() {
        this.querySelector("#hamburgerButton").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define("header-menu", Header);
