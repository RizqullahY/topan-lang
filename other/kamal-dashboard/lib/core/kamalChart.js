class KamalChart {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Element with ID "${containerId}" not found.`);
    }

    // Create a canvas element inside the container
    this.canvas = document.createElement("canvas");
    this.container.appendChild(this.canvas);

    // Default options
    this.options = {
      width: options.width || 500,
      height: options.height || 300,
      backgroundColor: options.backgroundColor || "#ffffff",
      barColor: options.barColor || "#3498db",
      axisColor: options.axisColor || "#333333",
      labelColor: options.labelColor || "#000000",
      ...options,
    };

    // Apply canvas size
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;

    // Get the drawing context
    this.ctx = this.canvas.getContext("2d");
  }

  render(data) {
    if (!Array.isArray(data)) {
      throw new Error("Data must be an array of numbers.");
    }

    const { ctx } = this;
    const { width, height, barColor, axisColor, labelColor } = this.options;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    ctx.fillStyle = this.options.backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Calculate bar dimensions
    const maxData = Math.max(...data);
    const barWidth = (width / data.length) * 0.8; // 80% of available space
    const barSpacing = (width / data.length) * 0.2; // 20% for spacing

    // Draw X and Y axes
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 10); // Y-axis
    ctx.lineTo(40, height - 40);
    ctx.lineTo(width - 10, height - 40); // X-axis
    ctx.stroke();

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = (value / maxData) * (height - 60); // Scale to fit within canvas
      const x = 40 + index * (barWidth + barSpacing);
      const y = height - 40 - barHeight;

      // Draw bar
      ctx.fillStyle = barColor;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw bar labels
      ctx.fillStyle = labelColor;
      ctx.font = "12px Arial";
      ctx.fillText(value, x + barWidth / 4, y - 5);
    });
  }
}

export default KamalChart;
