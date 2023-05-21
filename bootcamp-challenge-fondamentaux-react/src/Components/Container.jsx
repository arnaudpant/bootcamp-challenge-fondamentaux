import { useState } from "react";

const Container = () => {
    const [langages, setLangages] = useState([]);
    const [reactValue, setReactValue] = useState(50);

    const selectHandle = (e) => {
        const langageSelect = e.target.innerText;
        setLangages([...langages, langageSelect]);
    };
    
    const handleRange = (e) => {
        setReactValue(e.target.value)
    }

    return (
        <div className="container">
            <h1>Questionnaire</h1>
            <div className="box-techno">
                <h2>Clic sur les langages que tu maitrises</h2>
                <div className="box-techno__langages">
                    <div className="card" onClick={selectHandle}>
                        HTML
                    </div>
                    <div className="card" onClick={selectHandle}>
                        CSS
                    </div>
                    <div className="card" onClick={selectHandle}>
                        Javascript
                    </div>
                </div>
            </div>

            <div className="box-react">
                <h2>Evalue ton niveau en React</h2>
                <div className="box-react__input">
                    <div className="box-react__input__value">
                        {reactValue} %
                    </div>
                    <div className="box-react__input__input">
                        <input type="range" step="10" onChange={handleRange} />
                    </div>
                </div>
            </div>
            <div className="box-valid">
                <input type="submit" />
            </div>
        </div>
    );
};

export default Container;
