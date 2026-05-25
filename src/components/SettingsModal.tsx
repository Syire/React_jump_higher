import React, { useState } from "react";
import { useSettings } from "../app/SettingsContext";
import {
  getPlayerName,
  setPlayerName,
  generateRandomName,
} from "../utils/playerName";

export default function SettingsModal() {
  const {
    settingsOpen,
    closeSettings,
    musicOn,
    setMusicOn,
    effectsOn,
    setEffectsOn,
  } = useSettings();

  const [name, setName] = useState(getPlayerName());

  if (!settingsOpen) {
    return null;
  }

  function handleSaveName() {
    setPlayerName(name);
    closeSettings();
  }

  function handleRandomName() {
    const randomName = generateRandomName();
    setName(randomName);
    setPlayerName(randomName);
  }

  return (
    <div className="tony-settings-modal-backdrop">
      <div className="tony-settings-modal">
        <button
          className="tony-settings-close"
          onClick={closeSettings}
          aria-label="Chiudi impostazioni"
        >
          ×
        </button>

        <h2>Impostazioni</h2>

        <div className="tony-setting-row">
          <div>
            <strong>Nome giocatore</strong>
            <p className="tony-setting-copy">
              Questo nome verrà usato nella classifica.
            </p>
          </div>
        </div>

        <input
          className="tony-settings-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Il tuo nome"
          maxLength={20}
        />

        <div className="tony-settings-actions">
          <button onClick={handleSaveName}>Salva nome</button>
          <button onClick={handleRandomName}>Nome casuale</button>
        </div>

        <div className="tony-setting-row">
          <div>
            <strong>Effetti sonori</strong>
            <p className="tony-setting-copy">
              Attiva o disattiva gli effetti del gioco.
            </p>
          </div>

          <label className="tony-switch">
            <input
              type="checkbox"
              checked={effectsOn}
              onChange={(event) => setEffectsOn(event.target.checked)}
            />
            <span className="tony-slider" />
          </label>
        </div>

        <div className="tony-setting-row">
          <div>
            <strong>Musica Tony</strong>
            <p className="tony-setting-copy">
              Mostra il player musicale laterale.
            </p>
          </div>

          <label className="tony-switch">
            <input
              type="checkbox"
              checked={musicOn}
              onChange={(event) => setMusicOn(event.target.checked)}
            />
            <span className="tony-slider" />
          </label>
        </div>
      </div>
    </div>
  );
}