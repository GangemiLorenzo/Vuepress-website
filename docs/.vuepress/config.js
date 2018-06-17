module.exports = {
    locales: {
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Insurance Portfolio Manager',
            description: 'The official website'
        },
        '/it/': {
            lang: 'it',
            title: 'Gestore Portafoglio di Polizze',
            description: 'Il sito ufficiale'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.svg` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig:{
        //navbar: false,
        locales: {
            '/': {
              label: 'English',
              selectText: 'Languages',
              logo: '/logo.svg',
              nav: [
                { 
                    text: 'Home', 
                    link: '/' 
                },
                { 
                    text: 'Documentation', 
                    link: '/documentation/' 
                }
              ],
              sidebar: 'auto'
            },
            '/it/': {
              label: 'Italiano',
              selectText: 'Lingua',
              logo: '/logo.svg',
              nav: [
                { 
                    text: 'Home', 
                    link: '/it/' 
                },
                { 
                    text: 'Documentazione', 
                    link: '/it/documentation/' 
                }
              ],
              sidebar: 'auto'
            }
        }
    }
}