/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.html", "./src/**/*.html"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                'primary-blue': '#0056b3',
                'secondary-blue': '#6c757d',
                'light-blue': '#e6f2ff',
                'dark-blue': '#003366',
                'primary-green': '#27AE60',
                'light-green': '#2ECC71',
                'lime-green': '#c7eEa0',
                'secondary-green': '#1ABC9C',
                'dark-green': '#34495E',
                'primary': 'primary-blue'
            }
        }
    },
}


