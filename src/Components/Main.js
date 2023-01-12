import { useEffect } from "react";
import { useState } from "react";
import Layout from "./Layout";


export default function Main() {

    const [contador, setContador] = useState(0);
    const [disable, setDisable] = useState(false);
    const [disableReset, setDisableReset] = useState(true);

    function aumentarContador() {
        setContador(contador + 1);
    }

    function resetContador() {
        setContador(0);
    }

    useEffect(() => {
        contador === 10 ? setDisable(true) : setDisable(false);
        contador > 0 ? setDisableReset(false) : setDisableReset(true);
    }, [contador]);

    return (
        <Layout>
            <div className="mainStyle">
                <h1>Contador: {contador}</h1>
                <button disabled={disable} onClick={aumentarContador}>Aumentar contador</button>
                <button disabled={disableReset} onClick={resetContador}>Reset</button>
            </div>
        </Layout>
    );
};