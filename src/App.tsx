import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
     
    </BrowserRouter>
  );
}

export default App;
