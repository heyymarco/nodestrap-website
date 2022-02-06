// react:
import {
    default as React,
}                           from 'react'         // base technology of our nodestrap components

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    vars,
    imports,
    
    
    
    // rules:
    rule,
    variants,
    
    
    
    //combinators:
    children,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
    usesSuffixedProps,
    overwriteProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap components:
import {
    // hooks:
    usesSizeVariant,
    
    OrientationName,
    OrientationRuleOptions,
    defaultBlockOrientationRuleOptions,
    normalizeOrientationRule,
    usesOrientationRule,
    OrientationVariant,
    useOrientationVariant,
    
    usesBorder,
    usesBorderStroke,
    expandBorderStroke,
    usesBorderRadius,
    expandBorderRadius,
    
    
    
    // styles:
    usesBasicVariants,
    
    
    
    // react components:
    Basic,
}                           from '@nodestrap/basic'
import {
    // hooks:
    usesBorderAsContainer,
}                           from '@nodestrap/container'
import {
    // styles:
    usesContentBasicLayout,
    usesContentBasicVariants,
    usesContentChildren,
}                           from '@nodestrap/content'
import {
    // general types:
    PopupPlacement,
    PopupModifier,
    PopupPosition,
}                           from '@nodestrap/popup'
import {
    // react components:
    AccordionItemProps,
    AccordionItem,
}                           from '@nodestrap/accordion'



// hooks:

// layouts:

export const defaultOrientationRuleOptions = defaultBlockOrientationRuleOptions;


// appearances:

export type DetailStyle = 'content' // might be added more styles in the future
export interface DetailVariant {
    detailStyle?: DetailStyle
}
export const useDetailVariant = (props: DetailVariant) => {
    return {
        class: props.detailStyle ? props.detailStyle : null,
    };
};



// styles:
export const usesDetailLayout = (options?: OrientationRuleOptions) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    
    
    
    // dependencies:
    
    // colors:
    const [border      ] = usesBorder();
    
    // borders:
    const [borderStroke] = usesBorderStroke();
    const [borderRadius] = usesBorderRadius();
    
    
    
    return style({
        ...imports([
            // colors:
            border(),
            
            // borders:
            borderStroke(),
            borderRadius(),
            usesBorderAsContainer(options), // make a nicely rounded corners
        ]),
        ...style({
            // layouts:
            ...rule(orientationBlockSelector,  { // block
                display           : 'flex',        // use block flexbox, so it takes the entire parent's width
                flexDirection     : 'column',      // items are stacked vertically
            }),
            ...rule(orientationInlineSelector, { // inline
                display           : 'inline-flex', // use inline flexbox, so it takes the width & height as needed
                flexDirection     : 'row',         // items are stacked horizontally
            }),
            
            
            
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
            
            
            
            // borders:
            ...expandBorderStroke(), // expand borderStroke css vars
            ...expandBorderRadius(), // expand borderRadius css vars
        }),
    });
};
export const usesDetailVariants = () => {
    // dependencies:
    
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    
    
    
    return style({
        ...imports([
            // variants:
            usesBasicVariants(),
            
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule('.content', { // content
                ...imports([
                    // variants:
                    usesContentBasicVariants(),
                ]),
                ...style({
                    // children:
                    ...children('*', {
                        ...imports([
                            // layouts:
                            usesContentBasicLayout(),
                            
                            // children:
                            usesContentChildren(),
                        ]),
                    }),
                }),
            }),
        ]),
    });
};

export const useDetailSheet = createUseSheet(() => [
    mainComposition(
        imports([
            // layouts:
            usesDetailLayout(),
            
            // variants:
            usesDetailVariants(),
        ]),
    ),
], /*sheetId :*/'sbxf5u9ilo'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        /* no config props yet */
    };
}, { prefix: 'dtl' });



// react components:

export interface DetailProps<TElement extends HTMLElement = HTMLElement>
    extends
        AccordionItemProps<TElement>,
        
        // layouts:
        OrientationVariant,
        
        // appearances:
        DetailVariant
{
}
export function Detail<TElement extends HTMLElement = HTMLElement>(props: DetailProps<TElement>) {
    // styles:
    const sheet                 = useDetailSheet();
    
    
    
    // variants:
    const orientationVariant    = useOrientationVariant(props);
    const orientationHorizontal = (orientationVariant.class === 'inline');
    
    const detailVariant         = useDetailVariant(props);
    
    
    
    // jsx:
    return (
        <Basic
            // semantics:
            semanticTag ='div'
            semanticRole='group'
            
            aria-orientation={props['aria-orientation'] ?? (orientationHorizontal ? 'horizontal' : 'vertical')}
            
            
            // variants:
            theme={props.theme}
            size={props.size}
            gradient={props.gradient}
            outlined={props.outlined}
            mild={props.mild}
            
            
            // classes:
            mainClass={props.mainClass ?? sheet.main}
            variantClasses={[...(props.variantClasses ?? []),
                orientationVariant.class,
                detailVariant.class,
            ]}
        >
            <AccordionItem
                // other props:
                {...props}
                
                
                // accessibilities:
                inheritActive={props.inheritActive ?? false} // change default value to `false` because there are no <List> container
                
                
                // popups:
                lazy={props.lazy}
            />
        </Basic>
    );
}
export { Detail as default }


export type { OrientationName, OrientationVariant }

export type { PopupPlacement, PopupModifier, PopupPosition }
