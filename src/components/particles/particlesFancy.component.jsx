import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

const ParticlesI = ({ backgroundColor = "#1a1a1a" }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: backgroundColor,
            },
          },
          fpsLimit: 240,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.6,
              },
            },
          },
          particles: {
            color: {
              value: "#ff9ff3", // pink-tint particles
            },
            links: {
              color: "#feca57", // warm-yellow links
              distance: 130,
              enable: true,
              opacity: 0.6,
              width: 1.2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3.5, // increased speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 90,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesI;