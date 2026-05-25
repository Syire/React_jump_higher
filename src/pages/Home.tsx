import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSettings } from "../app/SettingsContext";
import "./css/HomeTony.css";

const MOTIVATIONAL_QUOTES = [
  "Non è il salto, è lo stile!",
  "Solo chi osa Pitony, vola alto!",
  "Con la cravatta si salta meglio!",
  "Rayban e via verso il successo!",
  "Un salto elegante vale doppio!",
  "Sorridi e salta, Pitony!",
  "La classe non è acqua, è salto!",
  "Più in alto, più Pitony!",
];

export default function Home() {
  const [quote, setQuote] = useState("");
  const { openSettings } = useSettings();

  useEffect(() => {
    const randomQuote =
      MOTIVATIONAL_QUOTES[
        Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)
      ];

    setQuote(randomQuote);
  }, []);

  const tonyImgUrl = new URL("../assets/tony.png", import.meta.url).href;

  return (
    <div className="home tony-theme">
      <div className="tony-settings-bar">
        <button
          className="tony-settings-bar-btn"
          onClick={openSettings}
          title="Impostazioni"
          aria-label="Impostazioni"
          type="button"
        >
          ⚙️
        </button>
      </div>

      <img className="tony-img" src={tonyImgUrl} alt="Tony Pitony" />

      <h1 className="tony-title tony-animated">Tony Jump</h1>

      <p className="tony-sub">Il salto più pitony della storia!</p>

      <p className="tony-quote">{quote}</p>

      <div className="tony-card">
        <div className="tony-actions">
          <Link to="/game" className="tony-btn">
            GIOCA ORA
          </Link>

          <Link to="/leaderboard" className="tony-btn-secondary">
            CLASSIFICA
          </Link>
        </div>
      </div>

      <footer className="tony-footer">Made with react &amp; Culo</footer>
    </div>
  );
}