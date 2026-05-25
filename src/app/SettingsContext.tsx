import React, { createContext, useContext, useMemo, useState } from "react";

type SettingsContextValue = {
    musicOn: boolean;
    setMusicOn: (value: boolean) => void;
    effectsOn: boolean;
    setEffectsOn: (value: boolean) => void;
    motionEnabled: boolean;
    setMotionEnabled: (value: boolean) => void;
    settingsOpen: boolean;
    openSettings: () => void;
    closeSettings: () => void;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [musicOn, setMusicOn] = useState(false);
    const [effectsOn, setEffectsOn] = useState(true);
    const [motionEnabled, setMotionEnabled] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const value = useMemo(
        () => ({
            musicOn,
            setMusicOn,
            effectsOn,
            setEffectsOn,
            motionEnabled,
            setMotionEnabled,
            settingsOpen,
            openSettings: () => setSettingsOpen(true),
            closeSettings: () => setSettingsOpen(false),
        }),
        [musicOn, effectsOn, motionEnabled, settingsOpen]
    );

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error("useSettings deve essere usato dentro SettingsProvider");
    }

    return context;
}