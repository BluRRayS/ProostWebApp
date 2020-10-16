module.exports = {
    // … other Vue CLI plugin options …
    pwa: {
        name: "Proost!",
        themeColor: "#E91E63",
        msTileColor: "#E91E63",
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            description: "Het drank spelletje dat je avond een leuke en gekke twist geeft.",
            icons: [{
                    "src": "./img/icons/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./img/icons/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            start_url: ".",
            display: "fullscreen",
            background_color: "#9A21F7"
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png',
        },
        workboxOptions: {
            cacheId: 'phrasebook',
            importWorkboxFrom: 'local',
            navigateFallback: 'shell.html',
            navigateFallbackWhitelist: [/^((?!\/404).)*$/],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/base.scss";`
            }
        }
    }
};