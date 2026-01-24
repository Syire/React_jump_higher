// @ts-ignore
import { Link } from "react-router-dom";
import "./css/HomeTony.css";
import { useEffect, useState } from "react";
import { getPlayerName, setPlayerName } from "../utils/playerName";


const MOTIVATIONAL_QUOTES = [
    "Non è il salto, è lo stile!",
    "Solo chi osa Pitony, vola alto!",
    "Con la cravatta si salta meglio!",
    "Rayban e via verso il successo!",
    "Un salto elegante vale doppio!",
    "Sorridi e salta, Pitony!",
    "La classe non è acqua, è salto!",
    "Più in alto, più Pitony!"
];

export default function Home() {
    const [name, setName] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setName(getPlayerName());
        setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
    }, []);

    function handleSave() {
        if (name.trim().length > 0) {
            setPlayerName(name.trim());
            alert("Nome salvato!");
        }
    }

    const tonyImgUrl = new URL('../assets/tony.png', import.meta.url).href;
    return (
        <div className="home tony-theme">
            <img src={tonyImgUrl} alt="Tony Pitony" className="tony-img" />
            <h1 className="title tony-title tony-animated">Tony Jump</h1>
            <p className="subtitle tony-sub">Il salto più pitony della storia!</p>
            <p className="tony-quote">{quote}</p>
            <div className="card tony-card">
                <div className="actions tony-actions">
                    <Link to="/game" className="btn tony-btn">
                        GIOCA ORA
                    </Link>
                    <Link to="/leaderboard" className="btn tony-btn-secondary">
                        CLASSIFICA
                    </Link>
                </div>
            </div>
            <div className="tony-nome-box">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Come ti chiami, pitony?"
                />
                <button onClick={handleSave} className="tony-btn-save">Salva Nome</button>
            </div>
        </div>
    );
}
