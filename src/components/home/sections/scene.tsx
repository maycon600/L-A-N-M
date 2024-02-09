import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTextureContext } from "./imageContext"; // Certifique-se de que o caminho está correto

gsap.registerPlugin(ScrollTrigger);

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../../3D-Model/scene.gltf");
  const { setWallpaperMaterial, changeTexture } = useTextureContext();
  const changeTextureRef = useRef(changeTexture);

  // Atualizar a referência de changeTexture quando ela mudar
  useEffect(() => {
    changeTextureRef.current = changeTexture;
  }, [changeTexture]);

  useEffect(() => {
    if (materials.Wallpaper) {
      setWallpaperMaterial(materials.Wallpaper);
    }
  }, [materials, setWallpaperMaterial]);

  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  // Configuração da animação GSAP
  useLayoutEffect(() => {
    camera.position.set(0, 2, 6);
    materials.Body.color.set("#9BB5CE");
    let fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em)`,
      },
      (context) => {
        let { isMobile }: any = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#phone-model",
            start: "top top",
            endTrigger: "#battery",
            end: "end end",
            scrub: 1,
            markers: true,
          },
        });
        t1.fromTo(
          camera.position,
          { y: 2, x: 1.2 },
          { y: 0, x: 1.2, duration: 0.1 },
          "key0",
        )
          .to(scene.rotation, { y: 3.2, duration: 0 }, "key0")
          .to(scene.rotation, { y: 3.2, duration: 0.6 })
          .to(scene.rotation, {
            onStart: () => changeTextureRef.current("../../bull.png"),
            onReverseComplete: () => changeTextureRef.current("../../soy.png"),
            y: 6.4,
            duration: 0.22,
          })
          .to(scene.rotation, { y: 6.4, duration: 0 })
          .to(scene.rotation, { y: 9.6, duration: 0.22 })
          .to(scene.rotation, { y: 9.6, duration: 0.6 })
          .to(camera.position, { x: -1, duration: 0.8 }, "key1")
          .to(
            scene.rotation,
            {
              onStart: () => changeTextureRef.current("../../farm.png"),
              onReverseComplete: () =>
                changeTextureRef.current("../../bull.png"),
              y: 3.2,
              duration: 0.8,
            },
            "key1",
          )
          .to(camera.position, { x: -1, duration: 0.5 })
          .to(camera.position, { x: -0, duration: 1.2 }, "key2")
          .to(
            scene.rotation,
            {
              onStart: () => changeTextureRef.current("../../products.png"),
              onReverseComplete: () =>
                changeTextureRef.current("../../farm.png"),
              y: -3.2,
              duration: 1.2,
            },
            "key2",
          )
          .to(scene.rotation, { y: -3.2, duration: 0.5 })
          .to(scene.rotation, {
            onStart: () => changeTextureRef.current("../../drone.png"),
            onReverseComplete: () =>
              changeTextureRef.current("../../products.png"),
            y: 3.2,
            duration: 0.6,
          });

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      },
    );
  }, []);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      className="pointer-events-none"
    >
      <group rotation={[-Math.PI / 2, 0, 0]} className="pointer-events-none">
        <group
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          className="pointer-events-none"
        >
          <group scale={100} className="pointer-events-none">
            <mesh
              geometry={nodes.Body_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              geometry={nodes.Body_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Body_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              geometry={nodes.Body_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Body_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Body_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Camera_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Camera_Camera_Frame001_0.geometry}
              material={materials["Camera_Frame.001"]}
            />
            <mesh
              geometry={nodes.Camera_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body001_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              geometry={nodes.Button_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Circle003_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              geometry={nodes.Camera001_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera001_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              geometry={nodes.Camera001_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Camera001_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              geometry={nodes.Camera003_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              geometry={nodes.Frame_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Frame_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              geometry={nodes.Frame_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Frame_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              geometry={nodes.Frame_Mic_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
