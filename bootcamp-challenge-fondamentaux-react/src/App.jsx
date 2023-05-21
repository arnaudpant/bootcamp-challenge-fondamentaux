import { useState } from "react";
import Login from "./Components/Login";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  const [userLogin, setUserLogin] = useState(null);

    return (
        <div>
            {userLogin && <Header userLogin={userLogin} />}
            {userLogin ? <Container userLogin={userLogin} /> : <Login setUserLogin={setUserLogin} />}
        </div>
    );
}

export default App;
