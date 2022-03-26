import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cuisine">Cuisine</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App