/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00bfff", // Deep Sky Blue
                "primary-light": "#33ccff",
                "primary-dark": "#0080aa",
                "background-light": "#f0f9ff",
                "background-dark": "#081b29",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem", // 8px
            },
            boxShadow: {
                'glow': '0 0 15px 5px rgba(0, 191, 255, 0.4), 0 0 30px 10px rgba(0, 191, 255, 0.2)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
