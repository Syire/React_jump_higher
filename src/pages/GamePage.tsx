
import GameCanvas from "../components/GameCanvas";
import "./css/GamePage.css";
import React, { useState } from "react";

declare global {
    interface Window {
        playerTilt: number;
    }
}

export default function GamePage() {
    const [sensorsEnabled, setSensorsEnabled] = useState(false);

    function handleEnableSensors() {
        if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof (DeviceOrientationEvent as any).requestPermission === "function"
        ) {
            (DeviceOrientationEvent as any).requestPermission().then((response: string) => {
                if (response === "granted") {
                    window.addEventListener("deviceorientation", handleOrientation, true);
                    setSensorsEnabled(true);
                }
            });
        } else {
            window.addEventListener("deviceorientation", handleOrientation, true);
            setSensorsEnabled(true);
        }
    }
    function handleOrientation(event: DeviceOrientationEvent) {
        const gamma = event.gamma ?? 0;
        window.playerTilt = Math.max(-1, Math.min(1, gamma / 30));
    }
    return (
        <div className="gamepage-center">
            <div className="gamepage-box">
                {!sensorsEnabled && (
                    <button className="sensor-button" onClick={handleEnableSensors}>
                        Abilita sensori movimento
                    </button>
                )}
                <GameCanvas />
            </div>
        </div>
    );
}