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
        ['link', { rel: 'icon', href: `/logo.svg` }]
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