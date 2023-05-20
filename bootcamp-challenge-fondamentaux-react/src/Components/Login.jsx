// eslint-disable-next-line react/prop-types
const Login = ({ setUserLogin }) => {

    const handleSumit = (e) => {
        e.preventDefault()
        setUserLogin(e.target.loginSubmit.value)
    }

    return (
        <div className="login">
            <h2 className="login__title">Bonjour, veuillez entrer votre login</h2>
            <form onSubmit={handleSumit} className="login__form">
                <input type="text" id="login" name="loginSubmit" placeholder="Votre login"></input>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Login;
