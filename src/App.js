import { Switch, Route } from "react-router-dom";
import { Header, Footer, Home, Projects, CV } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CV} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
