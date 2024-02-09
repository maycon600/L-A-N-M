import React, { createContext, useContext, useState } from "react";
import { TextureLoader } from "three";

export const TextureContext = createContext<any>({});
interface TextureContextType {
  setWallpaperMaterial: React.Dispatch<React.SetStateAction<any>>;
  changeTexture: (texturePath: string) => void;
}
export const TextureContextProvider = ({ children }: any) => {
  const [wallpaperMaterial, setWallpaperMaterial] = useState<any>(null);

  const changeTexture = (texturePath: any) => {
    if (wallpaperMaterial) {
      new TextureLoader().load(texturePath, (texture: any) => {
        wallpaperMaterial.map = texture;
        wallpaperMaterial.needsUpdate = true;
      });
    }
  };

  return (
    <TextureContext.Provider value={{ setWallpaperMaterial, changeTexture }}>
      {children}
    </TextureContext.Provider>
  );
};

export const useTextureContext = () => useContext(TextureContext);
