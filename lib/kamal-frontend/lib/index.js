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

    show({title = 'Title', message = 'Message', image = null, onClose = null} = {}) {
        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay');

        const container = document.createElement('div');
        container.classList.add('popup-container');

        container.innerHTML =
            `<img src="../src/img/kamal.jpg" alt="Popup Image">
      <h2>${title}</h2>
      <p>${message}</p>
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
