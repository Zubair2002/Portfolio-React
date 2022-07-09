import React from 'react'
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback,useMemo } from 'react';

const ParticlesAnimation = () => {
  const options = useMemo(() => {
    return {
      background: {
        color:"#000",
      },
      fullScreen: {
        enable: true,
        zIndex:-1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode:"push",
          }
        },
        onHover: {
          enable: true,
          mode:"repulse",
        }
      },
      particles: {
        links: {
          enable:true,
        },
        move: {
          enable: true,
          speed:{min:1,max:3},
        },
        opacity: {
          value: {min:0.3,max:0.7},
        },
        size: {
          value: {min:1,max:3}
        }
      }
    };
  }, []);


  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
  })


  return (
    <div>
      <Particles init={particlesInit} options={options} />
    </div>
  )
}

export default ParticlesAnimation