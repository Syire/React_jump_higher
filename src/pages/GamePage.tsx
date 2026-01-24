import GameCanvas from "../components/GameCanvas";
import "./css/GamePage.css";

export default function GamePage() {
    return (
        <div className="gamepage-center">
            <div className="gamepage-box">
                <GameCanvas />
            </div>
        </div>
    );
}