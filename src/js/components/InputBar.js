class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector(".input_field").value;
    }

    set submitEvent(submitEvent) {
        this._submitEvent = submitEvent;
        this.runEvent();
    }

    render() {
        const formElement = document.createElement("form");
        formElement.setAttribute("id", "submitForm");
        const inputElement = document.createElement("input");
        inputElement.setAttribute("placeholder", "Shorten a link here...");
        inputElement.setAttribute("class", "input_field");
        const submitButton = document.createElement("button");
        const inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input_container");
        inputContainer.append(inputElement);
        submitButton.setAttribute("type", "button");
        submitButton.innerText = "Shorten it!";
        formElement.append(inputContainer, submitButton);
        this.append(formElement);
    }

    runEvent() {
        this.querySelector("button").addEventListener(
            "click",
            this._submitEvent
        );
    }

    renderError(message) {
        const errorElement = document.createElement("span");
        errorElement.innerText = message;
        this.querySelector(".input_container").append(errorElement);
    }
}

customElements.define("search-bar", SearchBar);
