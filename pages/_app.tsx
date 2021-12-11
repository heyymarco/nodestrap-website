import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { Navbar, NavbarMenu } from '@nodestrap/navbar';
import { Icon, config as iconConfig } from '@nodestrap/icon'
import { Container } from '@nodestrap/container'
import { ButtonIcon as Button } from '@nodestrap/button-icon'

iconConfig.img.files.push('nodestrap.svg');



function MyApp({ Component, pageProps }: AppProps) {
    const Outlet = Component;
    return (
        <>
            <header>
                <Navbar
                    theme='primary'
                    logo={<Icon icon='nodestrap' size='lg' />}
                >
                    <NavbarMenu><Link href='/'>Home</Link></NavbarMenu>
                    <NavbarMenu><Link href='/docs'>Docs</Link></NavbarMenu>
                    <NavbarMenu><Link href='/download'>Download</Link></NavbarMenu>
                    <NavbarMenu><a href='https://github.com/nodestrap'>GitHub</a></NavbarMenu>
                    <NavbarMenu><a href='https://www.npmjs.com/org/nodestrap'>NPM</a></NavbarMenu>
                </Navbar>
            </header>
            <Outlet {...pageProps} />
            <Container tag='footer' theme='primary'>
                <h3 className='h5'>Support Us</h3>
                <p>
                    Nodestrap is open source project (ISC-licensed).
                    It&apos;s created and maintained by single person: <Button btnStyle='link' theme='primary' href='https://www.instagram.com/heyyy.marco/'>Hey Marco</Button>.
                </p>
                <p>
                    If you feel our lib is useful for your projects,<br />
                    please make a donation to avoid our project from extinction.
                </p>
                <Button theme='primary' href='https://ko-fi.com/heymarco'>Make a donation</Button>
            </Container>
        </>
    );
}

export default MyApp
