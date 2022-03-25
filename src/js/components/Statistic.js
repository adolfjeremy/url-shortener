class Statistic extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const headingContainer = document.createElement("div");
        headingContainer.setAttribute("class", "heading_container");
        headingContainer.innerHTML = `
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performning across the web with our advanced statistics dashboard</p>
        `;
        const featureList = document.createElement("div");
        featureList.setAttribute("class", "feature-list");
    }
}
