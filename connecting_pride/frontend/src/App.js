import NavBar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import PostPage from "./pages/postPage/postPage"
import WritePost from "./pages/writePost/writePost"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import CreateAccount from "./pages/createAccount/CreateAccount"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
    const { currentUser } = useContext(Context);
    console.log(currentUser);
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route path="/posts" element={<Home />} >
                </Route>
                <Route path="/createAccount" element={currentUser ? <Home /> : <CreateAccount />}>
                </Route>
                <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route>
                <Route path="/post/:id" element={<PostPage />}>
                </Route>
                <Route path="/write" element={currentUser ? <WritePost /> : <WritePost />}></Route>
                <Route path="/settings" element={currentUser ? <Settings /> : <Login />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;