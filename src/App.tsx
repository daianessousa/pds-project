import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider} from './contexts/AuthContext'
import { Home } from "./pages/Home";
import { Novidades } from "./pages/Novidades";
import { Register } from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/novidades" component={Novidades}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
