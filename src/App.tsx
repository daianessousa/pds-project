import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider} from './contexts/AuthContext'
import { Home } from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </AuthContextProvider>
    
     
    </BrowserRouter>
  );
}

export default App;
