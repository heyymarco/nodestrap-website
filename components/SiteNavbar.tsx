import Link from 'next/link'
import { Navbar, NavbarMenu } from '@nodestrap/navbar';
import { Icon } from '@nodestrap/icon'



export default function SiteNavbar() {
    return (
        <Navbar
            classes={['siteNavbar']}
            theme='primary'
            mild={false}
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
    );
}