class MobileMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
        <hr>
        <a>Login</a>
        <a class="mobile_sign_up button">Sign Up</a>
    `;
    }
}

customElements.define("mobile-menu", MobileMenu);
