/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      /*
      colors: {
        'teal-400': '#38A169',
      }, */

      zIndex: {
        100: "100",
      },

      height: {
        100: "32rem",
        110: "45rem",
      },

      fontFamily: {
        syncopate: ["SYNCOPATE", "sans-serif"],
        syncopatebold: ["SYNCOPATE-BOLD", "sans-serif"],
        enochian: ["ENOCHIAN", "sans-serif"],
        ubuntulight: ["UBUNTULIGHT", "sans-serif"],
        ubuntumedium: ["UBUNTUMEDIUM", "sans-serif"],
        ubuntubold: ["UBUNTUBOLD", "sans-serif"],
        andarion: ["ANDARION", "sans-serif"],
      },

      keyframes: {
        tique: {
          "0%": { transform: "skewX(-15deg)" },
          "5%": { transform: "skewX(15deg)" },
          "10%": { transform: "skewX(-15deg)" },
          "15%": { transform: "skewX(15deg)" },
          "20%": { transform: "skewX(0deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
        icons: {
          "0%": { "text-shadow": "6px 4px 0px #16BDCA;" },
          "50%": { "text-shadow": "rgba(253, 7, 220, 0) -3px 3px  0px" },
          "100%": { "text-shadow": "6px 4px 0px #16BDCA;" },
        },
        iconsgreen: {
          "0%": { "text-shadow": "6px 4px 0px #34D399;" },
          "50%": { "text-shadow": "rgba(253, 7, 220, 0) -3px 3px  0px" },
          "100%": { "text-shadow": "6px 4px 0px #34D399;" },
        },
        cego: {
          from: { filter: "blur(10px)" },
          to: { filter: "blur(0)" },
        },
        bluegreen: {
          "0%": { "background-color": "#16BDCA;" },
          "50%": { "background-color": "#34D399;" },
          "100%": { "background-color": "#16BDCA;" },
        },
        escrever: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        piscacursor: {
          from: { "border-color": "transparent" },
          to: { "border-color": "transparent" },
          "50%": { "border-color": "black" },
        },
      },
      animation: {
        tiques: "tique 2s linear infinite",
        iconbrilha: "icons 8s infinite",
        iconbrilhagreen: "iconsgreen 8s infinite",
        descegar: "cego 5s ease-in-out",
        azulverde: "bluegreen 15s infinite",
        azulverdefast: "bluegreen 5s infinite",
        escrevetexto: "escrever 5s steps(111,end)",
        cursorblink: "piscacursor 1s step-end infinite",
      },

      backgroundImage: {
        angelico: "url('./images/angelico3.png')",
        fanuel: "url('./images/fanuel2.png')",
        logogif: "url('./images/logogif.gif')",
        godofredo: "url('./images/godofredo2.png')",
        cosmicqueen: "url('./images/cosmicqueen22.png')",
        gigachad: "url('./images/gigachad2.png')",
        video: "url('./videos/vidbg.mp4')",
      },
    },
  },

  plugins: [require("flowbite/plugin")],

  important: true,
};
