import { Route, Routes } from "react-router-dom";
import { Login } from "./components/pages/login/login";
import { Register } from "./components/pages/regester/register";
import { MainLayout } from "./components/layout/main-layout";
import { Messages } from "./components/pages/messages/messages";
function App() {
  return <>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/app" element={<MainLayout/>}>
      <Route index element={<Messages />}/>
    </Route>
   </Routes>
  </>;
}

export default App;
