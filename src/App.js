import "./app.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App({ dialogsData, messageData, postsData }) {
    return (
        <BrowserRouter>
            <div className="wrapper-app">
                <Header title="Social media" />
                <Navbar />
                <div className="wrapper-app-content">
                    <Routes>
                        <Route
                            path="/profile"
                            element={<Profile postsData={postsData} />}
                        />
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs
                                    dialogsData={dialogsData}
                                    messageData={messageData}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
