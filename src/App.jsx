import logo from "./logo.svg";
import "./App.css";
import Combined from "./CombinedComp/combined";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from './Login/login'
import Signup from './Signup/signup'
import Profile from './Profile/profile'
const App = () => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Combined />}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>

        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
