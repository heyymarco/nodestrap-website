// cssfn:
import {
    // compositions:
    composition,
    mainComposition,
    imports,
    
    
    
    // layouts:
    layout,
    vars,
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
}                           from '@nodestrap/basic'
import {
    // styles:
    usesBadgeLayout,
    
    
    // react components:
    Badge,
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
    
    
    
    return composition([
        imports([
            // layouts:
            usesBadgeLayout(),
        ]),
        layout({
            // borders:
            [borderRadiusDecls.borderStartStartRadius] : '0.6em',
            [borderRadiusDecls.borderStartEndRadius  ] : '0.6em',
            [borderRadiusDecls.borderEndStartRadius  ] : '0.6em',
            [borderRadiusDecls.borderEndEndRadius    ] : '0.6em',
            
            
            
            // spacings:
            [paddingDecls.paddingInline] : '0px', // discard padding
            [paddingDecls.paddingBlock ] : '0px', // discard padding
        }),
        vars({
            [backgDecls.backgCol] : colorPreviewRefs.color,
        }),
    ]);
};
export const useColorPreviewSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesColorPreviewLayout(),
        ]),
    ]),
]);



export interface ColorPreviewProps {
    name  ?: string,
    value  : string,
}
export function ColorPreview(props: ColorPreviewProps) {
    // styles:
    const sheet = useColorPreviewSheet();
    
    
    const [, , backgDecls] = usesBackg();
    return (
        <>
            <Badge
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
