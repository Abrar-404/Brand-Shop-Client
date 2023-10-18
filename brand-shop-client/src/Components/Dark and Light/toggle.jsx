
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const handleCheckboxChange = () => {
      document.body.classList.toggle('dark');
    };

    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', handleCheckboxChange);

    return () => {
      checkbox.removeEventListener('change', handleCheckboxChange);
    };
  }, []);

  return (
    // Your JSX for the component
    <div>
      <input type="checkbox" id="checkbox" />
      {/* Other JSX content */}
    </div>
  );
}

export default App;
