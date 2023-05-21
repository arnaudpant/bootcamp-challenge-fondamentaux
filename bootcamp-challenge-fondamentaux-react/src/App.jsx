import { useState } from "react";
import Login from "./Components/Login";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
    const [userLogin, setUserLogin] = useState(null);

    return (
        <>
            {userLogin && <Header userLogin={userLogin} />}
            {userLogin ? (
                <Container userLogin={userLogin} />
            ) : (
                <Login setUserLogin={setUserLogin} />
            )}
            <Footer />
        </>
    );
}

export default App;
