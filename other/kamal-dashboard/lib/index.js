class KamalDashboard {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Element with ID "${containerId}" not found.`);
    }

    // Default options
    this.options = {
      columns: options.columns || 3,
      gap: options.gap || "10px",
      widgetStyle: options.widgetStyle || {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      },
    };

    // Apply styles to the container
    this.container.style.display = "grid";
    this.container.style.gridTemplateColumns = `repeat(${this.options.columns}, 1fr)`;
    this.container.style.gap = this.options.gap;

    this.widgets = [];
  }

  addWidget(content) {
    const widget = document.createElement("div");
    Object.assign(widget.style, this.options.widgetStyle);
    widget.innerHTML = content;
    this.container.appendChild(widget);
    this.widgets.push(widget);
  }

  removeWidget(index) {
    if (index >= 0 && index < this.widgets.length) {
      const widget = this.widgets[index];
      this.container.removeChild(widget);
      this.widgets.splice(index, 1);
    } else {
      throw new Error("Invalid widget index.");
    }
  }

  clear() {
    this.container.innerHTML = "";
    this.widgets = [];
  }
}

export default KamalDashboard;
