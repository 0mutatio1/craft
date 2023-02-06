import { Link } from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className='craft-app'>
      <h2>UI Project</h2>
      <button><Link to={`ui/install`}>Get Start</Link></button>
    </div>
  );
}

export default App;
