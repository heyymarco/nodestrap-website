import Link from 'next/link'
import { ActionControl } from '@nodestrap/action-control';
import { Navbar } from '@nodestrap/navbar';
import { Nav, NavItem } from '@nodestrap/nav';
import { Icon } from '@nodestrap/icon'



export default function SiteNavbar() {
    return (
        <Navbar
            classes={['siteNavbar']}
            theme='primary'
            mild={false}
            // eslint-disable-next-line
            logo={<ActionControl nude={true} mild={false}><Link href='/'><Icon icon='nodestrap' size='lg' /></Link></ActionControl>}
        >{(compact) =>
            <Nav orientation={compact ? 'block' : 'inline'}>
                <NavItem><Link href='/'>Home</Link></NavItem>
                <NavItem><Link href='/docs'>Docs</Link></NavItem>
                <NavItem><Link href='/download'>Download</Link></NavItem>
                <NavItem><Link href='/about'>About</Link></NavItem>
                <NavItem href='https://github.com/nodestrap' target='_blank'>GitHub</NavItem>
                <NavItem href='https://www.npmjs.com/org/nodestrap' target='_blank'>NPM</NavItem>
            </Nav>
        }</Navbar>
    );
}