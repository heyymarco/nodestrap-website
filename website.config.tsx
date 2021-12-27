import { config as iconConfig } from '@nodestrap/icon'
import { createSheet, globalDef, rules, rule, atRoot, fontFace, layout, vars } from '@cssfn/cssfn'
import { createCssVar } from '@cssfn/css-var'
import { colors, defineTheme, defineForeg } from '@nodestrap/colors'
import Color from 'color'



interface SiteVars {
    bodyHeight     : any
    headerHeight   : any
    footerHeight   : any
    viewportHeight : any
}
export const [siteVars, siteVarDecls] = createCssVar<SiteVars>({ minify: false });



createSheet(() => [
    globalDef([
        rule('*', [
            layout({
                boxSizing : 'border-box',
            }),
        ]),
        
        rule('html', [
            layout({
                blockSize: '100%',
            }),
        ]),
        rule(['html', 'body'], [
            layout({
                padding : '0px',
                margin  : '0px',
            }),
        ]),
        rule('body>*>header', [
            layout({
                zIndex          : 1020,
                position        : 'sticky',
                insetBlockStart : '0px',
            }),
        ]),

        rule('a', [
            layout({
                color          : 'inherit',
                textDecoration : 'none',
            }),
        ]),
        rule(':is(h1, h2, h3, h4, h5, h6) code', [
            layout({
                fontSize: 'inherit',
            }),
        ]),

        atRoot([
            vars({
                [siteVarDecls.viewportHeight] : `calc(${siteVars.bodyHeight} - ${siteVars.headerHeight})`,
            }),
        ]),
    ]),
])
.attach();


iconConfig.img.files.push('nodestrap.svg');