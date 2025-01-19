import Head from 'next/head'
import Script from 'next/script'
import usersInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {
        return (
            // eslint-disable-next-line @next/next/no-script-component-in-head
            <Head>
                    <title>{`${usersInfo.github_username} Portfolio - ${pageName}`}</title>
                    <meta name="title" content="Benrobo- Personal Portfolio." />
                    <meta name="description" content="Generated using BaayMax." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://github.com/benrobo/portfolio-v3/" />
                    <meta property="og:title" content="Benrobo- Personal Portfolio" />
                    <meta property="og:description" content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set." />
                    <meta property="og:image" content="https://github.com/Benrobo/baaymax-assets/blob/main/app.png?raw=true" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Benrobo- Personal Portfolio" />
                    <meta property="twitter:description" content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set." />
                    <meta property="twitter:image" content="https://github.com/Benrobo/baaymax-assets/blob/main/app.png?raw=true" />
                    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
                    <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
                    <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
            </Head>
        )
}