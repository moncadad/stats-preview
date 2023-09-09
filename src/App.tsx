import "./App.sass";
function App() {
  return (
    <div className="wrapper">
      <div className="img"></div>
      <main className="main">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <ul className="stats">
          <li>
            <h2>10k+</h2>
            <p>COMPANIES</p>
          </li>
          <li>
            <h2>314</h2>
            <p>TEMPLATES</p>
          </li>
          <li>
            <h2>12M+</h2>
            <p>QUERIES</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
