import { useState } from "react";
import Login from "./Components/Login";
import Container from "./Components/Container";

function App() {
  const [userLogin, setUserLogin] = useState(null);

    return (
        <div>
            {userLogin ? <Container userLogin={userLogin} /> : <Login setUserLogin={setUserLogin} />}
        </div>
    );
}

export default App;
