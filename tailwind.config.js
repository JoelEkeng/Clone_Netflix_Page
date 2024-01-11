module.exports = {
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
            contentAuto: {
                'content-visibility': 'auto',
            },
        },
    },

    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.content-auto': {
                    'content-visibility': 'auto',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};