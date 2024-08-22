/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#79BBFF', // 主色调
        warning: '#F89898', // 警告色
        success: '#8FCB7E', // 成功色
        mainLight: '#C6E2FF' // 主色调浅色
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

