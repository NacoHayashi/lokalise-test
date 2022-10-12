const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      'aiopt-gray': '#748AA1',
      'aiopt-primary': '#4e61ff',
      'aiopt-dark': '#253648',
      'aiopt-dark-blue': '#404CB8',
      'aiopt-gray-25': '#748AA141',
      'aiopt-gray-35': 'rgba(116, 138, 161, 0.36)',
      'aiopt-gray-50': '#748AA180',
      'aiopt-gray-75': '#748aa1bf',
      'aiopt-good': '#00D656',
      'aiopt-wrong': '#FD5454',
      'aiopt-blue': '#0EE7DA',
      'aiopt-red': '#EB5757',
      'aiopt-green': '#0EE7DA',
      ...colors,
    },
    extend: {
      boxShadow: {
        'aiopt-shadow': '0px 8px 14px rgba(37, 38, 94, 0.105988)',
        'header-shadow': '0px 2px 16px rgba(37, 54, 72, 0.07)',
        card: '0px 16px 38px rgba(37, 38, 94, 0.0843805)',
        'circle-btn': '0px 8px 24px rgba(37, 38, 94, 0.0573372)',
        'chart-tooltip': '0px 5px 10px rgba(203, 209, 223, 0.5)',
      },
    },
  },
  plugins: [],
};
