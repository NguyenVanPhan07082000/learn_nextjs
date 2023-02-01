import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { loadFull } from "tsparticles";

export interface ITestProps {}

export default function Test(props: ITestProps) {
  const customInit = async (engine: Engine): Promise<void> => {
    await loadFireworksPreset(engine);
  };
  const options = {
    preset: "fireworks",
  };
  return (
    <Particles
      id="tsparticles"
      init={customInit}
      //   loaded={particlesLoaded}
      options={options}
    />
  );
}
