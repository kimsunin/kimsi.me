"use client";
import { useEffect, useState, ReactNode } from "react";
import { SoundContext } from "@/hook/useSound";
import useStickyState from "@/hook/useStickyState";

// Define a type for the context value

interface SoundProviderProps {
  children: ReactNode;
  initialSound?: boolean;
}

function SoundProvider({ children, initialSound = true }: SoundProviderProps) {
  const [sound, setSound] = useStickyState(initialSound, "sound");
  const [isMount, setMount] = useState(false);

  useEffect(() => {
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
