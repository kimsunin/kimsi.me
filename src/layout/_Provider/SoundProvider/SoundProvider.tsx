"use client";
import React from "react";
import { SoundContext } from "@/hook/useSound";
import useStickyState from "@/hook/useStickyState";

// Define a type for the context value

interface SoundProviderProps {
  children: React.ReactNode;
  initialSound?: boolean;
}

function SoundProvider({ children, initialSound = true }: SoundProviderProps) {
  const [sound, setSound] = useStickyState(initialSound, "sound");
  const [isMount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
