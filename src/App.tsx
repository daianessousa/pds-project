import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider} from './contexts/AuthContext'
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Register } from "./pages/Register";
import { Cursos } from "./pages/Cursos"


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/news" component={News}/>
          <Route path="/cursos" component={Cursos}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
