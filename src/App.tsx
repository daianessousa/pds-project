import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider} from './contexts/AuthContext'
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Cursos } from "./pages/Cursos"
import { Forum } from "./pages/Forum"
import { Room } from "./pages/Room/Room"
import { AdminRoom } from "./pages/AdminRoom/AdminRoom"


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/cursos" component={Cursos}/>
          <Route path="/forum" component={Forum}/>
          <Route path="/rooms/:id" component={Room}/>
          <Route path="/admin/rooms/:id" component={AdminRoom}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
