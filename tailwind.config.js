/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.html", "./src/**/*.html"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                // Primary Blues - Enhanced for better contrast (WCAG AA compliant)
                'primary-blue': '#0056b3',      // Good contrast on white (4.5:1+)
                'secondary-blue': '#4a5568',    // Improved from #6c757d for better contrast
                'light-blue': '#e6f2ff',
                'dark-blue': '#003366',         // High contrast for important text

                // Primary Greens - Adjusted for WCAG AA compliance
                'primary-green': '#1a8a4c',     // Darker green for better contrast (was #27AE60)
                'light-green': '#2ECC71',       // Kept for accents/dark mode
                'lime-green': '#c7eEa0',        // Background use only
                'secondary-green': '#148a6e',   // Darker teal for better contrast (was #1ABC9C)
                'dark-green': '#2d3e4a',        // Slightly lighter for better readability

                // Semantic colors
                'primary': '#0056b3',
            },
            // Font sizes optimized for seniors (larger base)
            fontSize: {
                'xs': ['0.875rem', { lineHeight: '1.5' }],      // 14px
                'sm': ['1rem', { lineHeight: '1.5' }],          // 16px (was 14px)
                'base': ['1.125rem', { lineHeight: '1.75' }],   // 18px (was 16px)
                'lg': ['1.25rem', { lineHeight: '1.75' }],      // 20px (was 18px)
                'xl': ['1.5rem', { lineHeight: '1.75' }],       // 24px (was 20px)
                '2xl': ['1.75rem', { lineHeight: '1.5' }],      // 28px (was 24px)
                '3xl': ['2rem', { lineHeight: '1.4' }],         // 32px (was 30px)
                '4xl': ['2.5rem', { lineHeight: '1.3' }],       // 40px (was 36px)
                '5xl': ['3rem', { lineHeight: '1.2' }],         // 48px
                '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px
            },
            // Improved line heights for readability
            lineHeight: {
                'relaxed': '1.75',
                'loose': '2',
            },
            // Larger spacing for touch targets
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            // Minimum tap target size for accessibility
            minHeight: {
                'touch': '44px',  // WCAG minimum touch target
            },
            minWidth: {
                'touch': '44px',
            },
            // Border radius for softer, friendlier appearance
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
        }
    },
    plugins: [],
}
