# Topan Lang - Kamal Alert

Topan Lang provides a simple solution for showing alert popups using the KamalAlert class. Below you'll find examples on how to use it in your React application.

### Installation

To install Topan Lang, run:

```bash
npm install topan-lang
```

### Basic Example

```ts
import KamalAlert from 'topan-lang/lib/kamal-frontend/lib';
import './App.css';

function App() {
  const popup = new KamalAlert();  // Using KamalAlert instance

  const handleErrorPopup = () => {
    popup.showError({
      onClose: () => {
        console.log('Popup closed!');
      },
    });
  };

  const handleSuccessPopup = () => {
    popup.showSuccess({
      onClose: () => {
        console.log('Popup closed!');
      },
    });
  };

  return (
    <div>
      <button onClick={handleErrorPopup}>Show Error Popup</button>
      <button onClick={handleSuccessPopup}>Show Success Popup</button>
    </div>
  );
}

export default App;
```

### TypeScript Declaration

If you're using TypeScript, make sure you include the following type declaration to avoid any errors:

```ts
// src/topan-lang.d.ts

declare module 'topan-lang/lib/kamal-frontend/lib' {
    class KamalAlert {
        showError(options: {
            onClose?: () => void;
        }): void;
        showSuccess(options: {
            onClose?: () => void;
        }): void;
    }

    export default KamalAlert;
}
```

### Example: Handling Errors When Fetching Data

You can also use the `KamalAlert` to show error alerts when data fetching fails. Here’s an example:

```ts
import { useEffect, useState } from 'react';
import KamalAlert from 'topan-lang/lib/kamal-frontend/lib';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const popup = new KamalAlert();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.example.com/data');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
      showErrorPopup();
    } finally {
      setLoading(false);
    }
  };

  const showErrorPopup = () => {
    popup.showError({
      onClose: () => {
        console.log('Error popup closed');
      },
    });
  };

  return (
    <div>
      <h1>Data Fetching Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {data && <div>Data: {JSON.stringify(data)}</div>}

      {/* Button to simulate fetching data again */}
      <button onClick={fetchData}>Try Fetching Data Again</button>
    </div>
  );
}

export default App;
```

### Apologies for Customization Limitations

We would like to sincerely apologize for the current limitations in customizing the alerts. At the moment, the alert behavior is fixed and cannot be fully customized. We understand this may not fit every use case, and we are working on adding more customization options in the future.

Please feel free to create an issue on the GitHub repository if you encounter any problems or need additional features.

[GitHub Repository](https://github.com/RizqullahY/topan-lang/issues)

---
