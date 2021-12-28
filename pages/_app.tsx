import { siteVarDecls } from '../website.config';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, NavbarMenu } from '@nodestrap/navbar';
import { Icon, config as iconConfig } from '@nodestrap/icon'
import { ButtonIcon as Button } from '@nodestrap/button-icon'
import { useElementCssSize, UseWindowCssSize } from '../components/dimensions';
import { Section } from '../components/Section';
import { useMemo } from 'react';

iconConfig.img.files.push('nodestrap.svg');



function Header() {
    const setHeaderRef = useElementCssSize({ varHeight: siteVarDecls.headerHeight });
    
    
    
    return (
        <header ref={setHeaderRef}>
            {useMemo(() => (
                <Navbar
                    theme='primary'
                    // eslint-disable-next-line
                    logo={<NavbarMenu><Link href='/'><Icon icon='nodestrap' size='lg' /></Link></NavbarMenu>}
                >
                    <NavbarMenu><Link href='/'>Home</Link></NavbarMenu>
                    <NavbarMenu><Link href='/docs'>Docs</Link></NavbarMenu>
                    <NavbarMenu><Link href='/download'>Download</Link></NavbarMenu>
                    <NavbarMenu><Link href='/about'>About</Link></NavbarMenu>
                    <NavbarMenu href='https://github.com/nodestrap' target='_blank'>GitHub</NavbarMenu>
                    <NavbarMenu href='https://www.npmjs.com/org/nodestrap' target='_blank'>NPM</NavbarMenu>
                </Navbar>
            ), [])}
        </header>
    );
}

function Footer() {
    const setFooterRef = useElementCssSize({ varHeight: siteVarDecls.footerHeight });
    
    
    
    return (
        <footer ref={setFooterRef}>
            <Section titleTag='h5' title='Support Us' theme='primary'>
                <p>
                    Nodestrap is open source project (ISC-licensed).
                    It&apos;s created and maintained by single person: <Button btnStyle='link' theme='primary' href='https://www.instagram.com/heyyy.marco/' target='_blank'>Hey Marco</Button>.
                </p>
                <p>
                    If you feel our lib is useful for your projects,<br />
                    please make a donation to avoid our project from extinction.
                </p>
                <Button icon='volunteer_activism' theme='primary' href='https://ko-fi.com/heymarco' target='_blank'>Make a donation</Button>
            </Section>
        </footer>
    );
}

function MyApp({ Component, pageProps }: AppProps) {
    const Outlet = Component;
    return (<>
        <UseWindowCssSize options={{ varHeight: siteVarDecls.windowHeight }} />
        
        <Head>
            <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        </Head>
        
        <Header />
        
        <main>
            <Outlet {...pageProps} />
        </main>
        
        <Footer />
    </>);
}

export default MyApp
