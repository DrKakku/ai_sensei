import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import ExerciseScreen from "./components/ExerciseScreen";
import Pushups from "./components/exercises/Pushups";

function App() {
  return (
    <Router>
      <main>
        <div>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/home" component={LandingScreen} />
          <Route path="/exercises" component={ExerciseScreen} />
          <Route path="/pushups" component={Pushups} />
        </div>
      </main>
    </Router>
  );
}

export default App;
