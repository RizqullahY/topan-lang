class KamalAlert {
    constructor() {
        this.initStyles();
    }

    initStyles() {
        const style = document.createElement('style');
        style.textContent = `
      .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
      .popup-container {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 90%;
        position: relative;
      }
      .popup-container img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 5px;
      }
      .popup-container h2 {
        margin: 0 0 10px;
        font-size: 24px;
      }
      .popup-container p {
        margin: 0 0 20px;
        font-size: 16px;
      }
      .popup-container button {
        padding: 10px 20px;
        background: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      .popup-container button:hover {
        background: #0056b3;
      }
    `;
        document.head.appendChild(style);
    }

    showError({ onClose = null } = {}) {
        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');

        const container = document.createElement('div');
        container.classList.add('popup-container');

        container.innerHTML = `
      <img src="https://private-user-images.githubusercontent.com/104709795/402356860-274fd359-d072-40f0-ba93-caf70b1c9bfb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY2ODcxODEsIm5iZiI6MTczNjY4Njg4MSwicGF0aCI6Ii8xMDQ3MDk3OTUvNDAyMzU2ODYwLTI3NGZkMzU5LWQwNzItNDBmMC1iYTkzLWNhZjcwYjFjOWJmYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExMlQxMzAxMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MWQ3YWM3MmNlNTBlMDdhMjZkNjAyYWIyNWFiN2M2NDQxMmU4MjkyNDUzN2FmYzU0NzkyMDBhNDRmNzg5ODdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pkOzli-Mz-OfBrPIsQ5FevRkS03jWYgJHdu3TOzkeRA" alt="Popup Image">
      <h2>Ada Yang Error NICHH</h2>
      <p>Buka console.log</p>
      <button>OK</button>
    `;

        container.querySelector('button').addEventListener('click', () => {
            document.body.removeChild(overlay);
            if (typeof onClose === 'function') onClose();
        });

        overlay.appendChild(container);
        document.body.appendChild(overlay);
    }
}

export default KamalAlert;
