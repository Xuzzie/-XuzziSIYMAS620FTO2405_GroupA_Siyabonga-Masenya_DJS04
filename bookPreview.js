//this creates web element seprated from the scripts.js
class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // ADDED INTERTEXT HTML
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .preview {
          border: none;
          display: block;
          padding: 10px;
          background-color: #f9f9f9;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .preview__image {
          width: 100px;
          height: 150px;
          object-fit: cover;
        }
        .preview__info {
          margin-top: 10px;
        }
        .preview__title {
          font-size: 16px;
          font-weight: bold;
        }
        .preview__author {
          color: grey;
        }
      </style>
      <button class="preview">
        <img class="preview__image" />
        <div class="preview__info">
          <h3 class="preview__title"></h3>
          <div class="preview__author"></div>
        </div>
      </button>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const author = this.getAttribute("author");

    this.shadowRoot.querySelector(".preview__image").src = image;
    this.shadowRoot.querySelector(".preview__title").innerText = title;
    this.shadowRoot.querySelector(".preview__author").innerText = author;
  }
}

customElements.define("book-preview", BookPreview);
