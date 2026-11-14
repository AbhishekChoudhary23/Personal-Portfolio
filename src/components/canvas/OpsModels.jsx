import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useInView, useReducedMotion } from "framer-motion";
import styled from "styled-components";

const MINT = "#34e3a0";
const CYAN = "#38bdf8";
const BODY = "#1b2531";
const BODY_LIGHT = "#2b3a4b";

const Stage = styled.div`
  width: 100%;
  height: 240px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

/**
 * Wraps a model: slow idle motion, plus a lean toward the pointer while it is
 * over the canvas. `swing` rocks the model side to side instead of spinning
 * it, for models that only have one interesting face.
 */
const Rig = ({ children, spin = 0.25, tilt = 0.1, swing = 0 }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (swing) {
      const sway = Math.sin(state.clock.elapsedTime * spin * 2) * swing;
      group.current.rotation.y = sway + state.pointer.x * 0.5;
    } else {
      group.current.rotation.y += delta * spin;
    }
    const targetX = tilt - state.pointer.y * 0.35;
    const targetZ = state.pointer.x * -0.12;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.06;
  });

  return <group ref={group}>{children}</group>;
};

/* -------------------------------------------------------------------------- */
/* Server rack: six units, each with status lights that blink out of step.     */
/* -------------------------------------------------------------------------- */

const UNITS = 6;
const UNIT_HEIGHT = 0.3;
const UNIT_GAP = 0.08;

const StatusLight = ({ position, color, phase, speed }) => {
  const material = useRef();

  useFrame(({ clock }) => {
    if (!material.current) return;
    const wave = Math.sin(clock.elapsedTime * speed + phase);
    material.current.emissiveIntensity = wave > 0.2 ? 2.4 : 0.25;
  });

  return (
    <mesh position={position}>
      <boxGeometry args={[0.07, 0.07, 0.03]} />
      <meshStandardMaterial
        ref={material}
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};

const RackUnit = ({ y, index }) => (
  <group position={[0, y, 0]}>
    <mesh>
      <boxGeometry args={[1.3, UNIT_HEIGHT, 0.95]} />
      <meshStandardMaterial color={BODY_LIGHT} metalness={0.45} roughness={0.5} />
      <Edges color={index % 2 ? CYAN : MINT} transparent opacity={0.45} />
    </mesh>
    {/* Drive bays */}
    {[0, 1, 2, 3].map((bay) => (
      <mesh key={bay} position={[-0.12 + bay * 0.17, 0, 0.48]}>
        <boxGeometry args={[0.13, UNIT_HEIGHT * 0.55, 0.02]} />
        <meshStandardMaterial color="#0a0f14" metalness={0.3} roughness={0.7} />
      </mesh>
    ))}
    <StatusLight
      position={[-0.52, 0.04, 0.485]}
      color={MINT}
      phase={index * 1.7}
      speed={2.2 + (index % 3) * 0.7}
    />
    <StatusLight
      position={[-0.4, 0.04, 0.485]}
      color={index === 2 ? "#ffb347" : CYAN}
      phase={index * 0.9 + 1}
      speed={3.1 + (index % 2)}
    />
  </group>
);

export const ServerRack = () => {
  const pitch = UNIT_HEIGHT + UNIT_GAP;
  const height = UNITS * pitch + 0.14;

  return (
    <group scale={0.92}>
      {Array.from({ length: UNITS }, (_, index) => (
        <RackUnit
          key={index}
          index={index}
          y={(index - (UNITS - 1) / 2) * pitch}
        />
      ))}
      {/* Frame posts */}
      {[-0.7, 0.7].flatMap((x) =>
        [-0.5, 0.5].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0, z]}>
            <boxGeometry args={[0.07, height, 0.07]} />
            <meshStandardMaterial color={BODY} metalness={0.7} roughness={0.35} />
          </mesh>
        ))
      )}
      {/* Top and bottom plates */}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[0, (side * height) / 2, 0]}>
          <boxGeometry args={[1.47, 0.06, 1.07]} />
          <meshStandardMaterial color={BODY} metalness={0.7} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
};

/* -------------------------------------------------------------------------- */
/* Cluster: a control plane with six pods in orbit, each a hexagonal cell.     */
/* -------------------------------------------------------------------------- */

const PODS = 6;

export const Cluster = () => {
  const ring = useRef();
  const pods = useRef([]);

  useFrame(({ clock }, delta) => {
    if (ring.current) ring.current.rotation.y -= delta * 0.5;
    pods.current.forEach((pod, index) => {
      if (!pod) return;
      const beat = 1 + Math.sin(clock.elapsedTime * 2 + index * 1.05) * 0.08;
      pod.scale.setScalar(beat);
    });
  });

  return (
    <group rotation={[0.35, 0, 0.12]}>
      {/* Control plane */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.36, 6]} />
        <meshStandardMaterial
          color={BODY_LIGHT}
          metalness={0.5}
          roughness={0.35}
          emissive={CYAN}
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.04}>
        <cylinderGeometry args={[0.5, 0.5, 0.36, 6]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.55} />
      </mesh>

      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.32, 0.008, 8, 96]} />
        <meshBasicMaterial color={MINT} transparent opacity={0.4} />
      </mesh>

      <group ref={ring}>
        {Array.from({ length: PODS }, (_, index) => {
          const angle = (index / PODS) * Math.PI * 2;
          return (
            <group
              key={index}
              position={[Math.cos(angle) * 1.32, 0, Math.sin(angle) * 1.32]}
              ref={(node) => {
                pods.current[index] = node;
              }}
            >
              <mesh>
                <cylinderGeometry args={[0.22, 0.22, 0.26, 6]} />
                <meshStandardMaterial
                  color={BODY_LIGHT}
                  metalness={0.5}
                  roughness={0.4}
                  emissive={MINT}
                  emissiveIntensity={index % 3 === 0 ? 0.7 : 0.22}
                />
              </mesh>
              {/* Link back to the control plane */}
              <mesh
                position={[
                  -Math.cos(angle) * 0.55,
                  0,
                  -Math.sin(angle) * 0.55,
                ]}
                rotation={[0, -angle, Math.PI / 2]}
              >
                <cylinderGeometry args={[0.008, 0.008, 0.62, 6]} />
                <meshBasicMaterial color={MINT} transparent opacity={0.35} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

/* -------------------------------------------------------------------------- */
/* Pipeline: the continuous-delivery loop with builds travelling round it.     */
/* -------------------------------------------------------------------------- */

const BUILDS = 5;

export const Pipeline = () => {
  const builds = useRef([]);

  const curve = useMemo(() => {
    const points = [];
    for (let step = 0; step < 120; step += 1) {
      const t = (step / 120) * Math.PI * 2;
      const scale = 1.75 / (1 + Math.sin(t) ** 2);
      points.push(
        new THREE.Vector3(
          scale * Math.cos(t),
          scale * Math.sin(t) * Math.cos(t),
          Math.sin(t) * 0.28
        )
      );
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  useFrame(({ clock }) => {
    builds.current.forEach((build, index) => {
      if (!build) return;
      const progress = (clock.elapsedTime * 0.11 + index / BUILDS) % 1;
      build.position.copy(curve.getPointAt(progress));
      build.lookAt(curve.getPointAt((progress + 0.01) % 1));
    });
  });

  return (
    <group rotation={[0.25, 0, 0]}>
      <mesh>
        <tubeGeometry args={[curve, 240, 0.075, 12, true]} />
        <meshStandardMaterial
          color={BODY_LIGHT}
          metalness={0.65}
          roughness={0.3}
          emissive={CYAN}
          emissiveIntensity={0.12}
        />
      </mesh>
      {Array.from({ length: BUILDS }, (_, index) => (
        <mesh
          key={index}
          ref={(node) => {
            builds.current[index] = node;
          }}
        >
          <boxGeometry args={[0.2, 0.2, 0.3]} />
          <meshStandardMaterial
            color={index % 2 ? CYAN : MINT}
            emissive={index % 2 ? CYAN : MINT}
            emissiveIntensity={1.1}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
};

/* -------------------------------------------------------------------------- */

/**
 * Canvas for one model. Renders only while on screen, and holds a single
 * still frame for visitors who prefer reduced motion.
 */
const ModelStage = ({ children, label, spin, tilt, swing }) => {
  const stage = useRef(null);
  const inView = useInView(stage, { margin: "120px" });
  const reducedMotion = useReducedMotion();

  return (
    <Stage ref={stage} role="img" aria-label={label}>
      <Canvas
        dpr={[1, 2]}
        frameloop={reducedMotion ? "demand" : inView ? "always" : "never"}
        camera={{ position: [0, 0.4, 4.6], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <pointLight position={[-3, -1, 2]} intensity={14} color={MINT} />
        <pointLight position={[3, 2, -2]} intensity={10} color={CYAN} />
        <Rig spin={reducedMotion ? 0 : spin} tilt={tilt} swing={swing}>
          {children}
        </Rig>
      </Canvas>
    </Stage>
  );
};

export default ModelStage;
