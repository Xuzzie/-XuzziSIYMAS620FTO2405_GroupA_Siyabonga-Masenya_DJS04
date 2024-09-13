//this creates web element seprated from the scripts.js
class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
