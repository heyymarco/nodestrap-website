import { config as iconConfig } from '@nodestrap/icon'
import { createSheet, globalDef, rules, rule, atRoot, fontFace, vars } from '@cssfn/cssfn'
import { createCssVar } from '@cssfn/css-var'
import { colors, defineTheme, defineForeg } from '@nodestrap/colors'
import Color from 'color'



interface SiteVars {
    windowHeight   : any
    headerHeight   : any
    footerHeight   : any
    viewportHeight : any
}
export const [siteVars, siteVarDecls] = createCssVar<SiteVars>({ minify: false });



createSheet(() => [
    globalDef([
        rule('*', {
            boxSizing : 'border-box',
        }),
        
        rule('html', {
            blockSize: '100%',
        }),
        rule(['html', 'body'], {
            padding : '0px',
            margin  : '0px',
        }),
        rule('body>*>header', {
            zIndex          : 1020,
            position        : 'sticky',
            insetBlockStart : '0px',
        }),

        atRoot([
            vars({
                [siteVarDecls.viewportHeight] : `calc(${siteVars.windowHeight} - ${siteVars.headerHeight})`,
            }),
        ]),
    ]),
])
.attach();



// const primary = Color('#FE90C3');
// defineTheme('primary', primary);

// const secondary = primary.rotate(-30).darken(0.2);
// defineTheme('secondary', secondary);

// const textColor = Color('#491D31');
// colors.dark = textColor as any;
// colors.primaryText = textColor as any;
// colors.primaryBold = textColor as any;
// (colors as any).primaryThinner = primary.alpha(0.2) as any;
// defineForeg(textColor);



iconConfig.img.files.push('nodestrap.svg');