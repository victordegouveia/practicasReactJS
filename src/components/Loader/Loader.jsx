import './Loader.css';

function Loader({ size = 40 }) {
    return (
        <span
            className="loader"
            role="status"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                minWidth: "30px",
                minHeight: "30px",
            }}
            aria-label="Cargando..."
        ></span>
    );
}

export default Loader;
