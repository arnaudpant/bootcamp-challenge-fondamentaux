/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Modal = ({ langages, reactValue }) => {
    return (
        <div className="modal">
            <h2>On récapitule:</h2>
            <p>Tu maitrises:</p>
            <ul>
                {langages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <p>Tu estimes ton niveau React a:</p>
            <span>{reactValue} %</span>
        </div>
    );
};

export default Modal;
