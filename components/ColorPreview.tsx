// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    vars,
    imports,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import {
    createCssVar,
}                           from '@cssfn/css-var'     // Declares & retrieves *css variables* (css custom properties).

// nodestrap components:
import {
    // hooks:
    usesBackg,
    usesBorderRadius,
    usesPadding,
    
    
    // react components:
    Basic,
}                           from '@nodestrap/basic'
import {
    // styles:
    usesBadgeLayout,
}                           from '@nodestrap/badge'



// styles:
interface ColorPreviewVars {
    color : any
}
const [colorPreviewRefs, colorPreviewDecls] = createCssVar<ColorPreviewVars>({ minify: false });

export const usesColorPreviewLayout = () => {
    // dependencies:
    
    // colors:
    const [, , backgDecls       ] = usesBackg();
    
    // borders:
    const [, , borderRadiusDecls] = usesBorderRadius();
    
    // spacings:
    const [, , paddingDecls     ] = usesPadding();
    
    
    
    return style({
        ...imports([
            // layouts:
            usesBadgeLayout(),
        ]),
        ...style({
            // borders:
            [borderRadiusDecls.borderStartStartRadius] : '0.6em',
            [borderRadiusDecls.borderStartEndRadius  ] : '0.6em',
            [borderRadiusDecls.borderEndStartRadius  ] : '0.6em',
            [borderRadiusDecls.borderEndEndRadius    ] : '0.6em',
            
            
            
            // spacings:
            [paddingDecls.paddingInline] : '0px', // discard padding
            [paddingDecls.paddingBlock ] : '0px', // discard padding
        }),
        ...vars({
            [backgDecls.backgCol] : colorPreviewRefs.color,
        }),
    });
};
export const useColorPreviewSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // layouts:
            usesColorPreviewLayout(),
        ]),
    ),
], /*sheetId :*/'z6dy6e24h4'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



export interface ColorPreviewProps {
    name  ?: string,
    value  : string,
}
export function ColorPreview(props: ColorPreviewProps) {
    // styles:
    const sheet = useColorPreviewSheet();
    
    
    return (
        <>
            <Basic
                {...props}
                
                
                // classes:
                mainClass={sheet.main}
                
                
                tag='span'
                style={{
                    [colorPreviewDecls.color]: props.value
                }}
            />
            { props.name && '\xa0' /* &nbsp; */ }
            { props.name && <code>{ props.name }</code>}
        </>
    )
}
export default ColorPreview;
