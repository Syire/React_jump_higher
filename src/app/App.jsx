import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MusicPlayer from "../components/MusicPlayer";
import SettingsModal from "../components/SettingsModal";
import { SettingsProvider, useSettings } from "./SettingsContext";

function AppShell() {
  const { musicOn } = useSettings();

  return (
    <>
      <MusicPlayer musicOn={musicOn} />
      <SettingsModal />
      <RouterProvider router={router} />
    </>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <AppShell />
    </SettingsProvider>
  );
}