import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import ExerciseScreen from "./components/ExerciseScreen";
import Pushups from "./components/exercises/Pushups";
import Jumpingjacks from "./components/exercises/Jumpingjacks";
import Highknees from "./components/exercises/Highknees";
import Squats from "./components/exercises/Squats";
import Lunges from "./components/exercises/Lunges";

function App() {
  return (
    <Router>
      <main>
        <div>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/home" component={LandingScreen} />
          <Route path="/exercises" component={ExerciseScreen} />
          <Route path="/pushups" component={Pushups} />
          <Route path="/jumpingjacks" component={Jumpingjacks} />
          <Route path="/highknees" component={Highknees} />
          <Route path="/squats" component={Squats} />
          <Route path="/lunges" component={Lunges} />
        </div>
      </main>
    </Router>
  );
}

export default App;
