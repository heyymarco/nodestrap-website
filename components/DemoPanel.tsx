// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    imports,
    
    
    
    // rules:
    rule,
    
    
    
    //combinators:
    children,
    nextSiblings,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import { ContentProps, Content } from '@nodestrap/content'
import { ButtonIconProps, ButtonIcon } from '@nodestrap/button-icon'
import { Group, GroupProps } from '@nodestrap/group'
import { Radio } from '@nodestrap/radio'
import { Range } from '@nodestrap/range'
import { expandBorderRadius, expandBorderStroke, OrientationName, ThemeName, usesBorderRadius, usesBorderStroke } from '@nodestrap/basic'
import { useRef, useState } from 'react'
import type { Dictionary } from '@cssfn/types'
import { ResponsiveProvider, useResponsiveCurrentFallback } from '@nodestrap/responsive'
import spacers from '@nodestrap/spacers'
import { isScreenWidthSmallerThan } from '@nodestrap/breakpoints'
import { Label } from '@nodestrap/label'



export const useDemoPanelSheet = createUseSheet(() => {
    const [borderStroke] = usesBorderStroke();
    const [borderRadius, , borderRadiusDecls] = usesBorderRadius();

    
    
    return [
        mainComposition(
            rule('&&', { // makes `.DemoPanel` is more specific than `.Content`
                ...style({
                    display             : 'grid',
                    gridTemplateColumns : [['auto', 'minmax(600px, max-content)']],
                    gridTemplateRows    : [['1fr']],
                    gridTemplateAreas   : [[
                        '"preview options"',
                    ]],
                    ...isScreenWidthSmallerThan('xl', {
                        gridTemplateColumns : [['1fr']],
                        gridTemplateRows    : [['auto', 'max-content']],
                        gridTemplateAreas   : [[
                            '"preview"',
                            '"options"',
                        ]],
                    }),
                    
                    
                    gap                 : spacers.lg,
    
                    ...children('.preview', {
                        gridArea          : 'preview',
    
                        display           : 'flex',
                        flexDirection     : 'column',
                        justifyContent    : 'stretch',
                        alignItems        : 'stretch',
                        
                        background: [
                            'url("/images/tile-1.svg")',
                            'url("/images/soft-rainbow.svg")',
                        ],
                        
                        ...imports([
                            borderStroke(),
                            borderRadius(),
                        ]),
                        ...expandBorderStroke(), // expand borderStroke css vars
                        ...expandBorderRadius(), // expand borderRadius css vars
                        overflow          : 'hidden',
                        
                        gap               : 0,
                        padding           : spacers.lg,
    
                        ...children(':first-child', {
                            flex          : [[0, 0, 'fit-content']],

                            
                            justifySelf   : 'center',
                            alignSelf     : 'center',
                            
                            margin        : 0,
                        }),
                        ...children('pre', {
                            flex          : [[1, 1, 'auto']],
                            
                            marginInline     : `calc(0px - ${spacers.lg})`,
                            marginBlockStart : spacers.lg,
                            marginBlockEnd   : `calc(0px - ${spacers.lg})`,

                            ...expandBorderStroke(), // expand borderStroke css vars
                            ...style({
                                borderInlineWidth   : 0,
                                borderBlockEndWidth : 0,
                            }),
                        }),
                    }),
                    ...children('.options', {
                        gridArea            : 'options',
                        
                        display             : 'grid',
                        gridTemplateColumns : [['max-content', '1fr']],
                        gridAutoFlow        : 'row',
                        gridAutoRows        : 'max-content',
                        columnGap           : 0,
                        rowGap              : '1em',
    
                        ...children(['span'], {
                            display        : 'flex',
                            justifyContent : 'left',
                            alignItems     : 'center',
                            
                            borderInlineEndWidth: '0px',
                            [borderRadiusDecls.borderStartEndRadius]: '0px',
                            [borderRadiusDecls.borderEndEndRadius  ]: '0px',

                            ...nextSiblings('*', {
                                [borderRadiusDecls.borderStartStartRadius]: '0px',
                                [borderRadiusDecls.borderEndStartRadius  ]: '0px',
                            }),
                        }),
                    }),
                    
                    ...children(['.busy', 'hr'], {
                        gridColumn : '1 / -1', // span from first column to last column
                    }),
                }),
            }),
        ),
    ];
}, /*sheetId :*/'s8amjun6ag'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



export type Fallback = OrientationName
export const DemoPanel = (props: ContentProps) => {
    const sheet = useDemoPanelSheet();
    
    return (
        <ResponsiveProvider<Fallback>
            fallbacks={['inline', 'block']}
        >
            <Content
                {...props}
                classes={[...(props.classes ?? []),
                    sheet.main,
                ]}
            >
                { props.children }
            </Content>
        </ResponsiveProvider>
    );
}
export default DemoPanel;



export const ResponsiveGroup = (props: GroupProps) => {
    const currentFallback = useResponsiveCurrentFallback<Fallback>();
    return (
        <Group
            {...props}
            
            orientation={props.orientation ?? currentFallback}
        />
    );
}



export interface OptionProps extends GroupProps {
    name     : string
    options  : any[]
    value    : any
    setValue : React.Dispatch<any>
}
export const Option = (props: OptionProps) => {
    const {
        name,
        options,
        value,
        setValue,
        
        ...groupProps
    } = props;
    
    
    
    return (<>
        {name && <Label>{ name }</Label>}
        <ResponsiveGroup            
            {...groupProps}
        >
            {
                options
                .map((option, index) =>
                    <Radio
                        key={index}
                        theme='primary'
                        mild={true}
                        enableValidation={false}
                        nude={false}
                        
                        name={name}
                        active={value === option}
                        onActiveChange={(active) => { if (active) setValue(option) }}
                    >
                        { (option === undefined) ? 'unset' : `${option}` }
                    </Radio>
                )
            }
        </ResponsiveGroup>
    </>);
}

export interface ThemeOptionProps extends GroupProps {
    name     ?: string
    value     : ThemeName|undefined
    addUnset ?: boolean
    showName ?: boolean
    setValue  : React.Dispatch<ThemeName|undefined>
}
export const ThemeOption = (props: ThemeOptionProps) => {
    const {
        name = 'theme',
        value,
        addUnset,
        showName = true,
        setValue,
        
        ...groupProps
    } = props;
    
    const currentFallback = useResponsiveCurrentFallback<Fallback>();
    
    
    
    return (<>
        {name && <Label>{ name }</Label>}
        <Group
            orientation={currentFallback}
            
            {...groupProps}
        >
            {
                [...(addUnset ? [undefined] : []), 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
                .map((option, index) =>
                    <Radio
                        key={index}
                        theme={option ?? 'secondary'}
                        mild={showName ? true : false}
                        enableValidation={false}
                        nude={false}
                        checkStyle={showName ? 'togglerBtn' : undefined}
                        
                        name={name}
                        active={value === option}
                        onActiveChange={(active) => { if (active) setValue(option) }}
                    >
                        { showName && ((option === undefined) ? 'unset' : `${option}`) }
                    </Radio>
                )
            }
        </Group>
    </>);
}



export interface SliderProps {
    name     : string
    min      : number
    max      : number
    step     : number
    value    : number
    setValue : React.Dispatch<number>
}
export const Slider = (props: SliderProps) => {
    const {
        name,
        min,
        max,
        step,
        value,
        setValue,
    } = props;
    
    
    
    return (<>
        {name && <Label>{ name }</Label>}
        <Range
            nude={false}
            
            enableValidation={false}
            
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={({currentTarget}) => setValue(currentTarget.valueAsNumber)}
        />
    </>);
}



export type ResetableState<S, P extends number|undefined = undefined> = [
    S,
    React.Dispatch<S>,
    () => void,
    S,
    P,
];
export const useResetableState = <S, P extends number|undefined = undefined>(initial: S | (() => S), precision?: P): ResetableState<S, P> => {
    const [value, setValue] = useState<S>(initial);
    const { current: initialValue } = useRef(value);
    const { current: resetValue   } = useRef(() => setValue(initialValue));
    
    return [
        value,
        setValue,
        
        resetValue,
        
        initialValue,
        precision as P,
    ];
}



export const ResetButton = (props: ButtonIconProps & { states: Dictionary<ResetableState<any, any>> }) => {
    const { states } = props;
    
    
    
    return (<>
        <Label>Reset</Label>
        <ButtonIcon
            {...props}
            theme={props.theme ?? 'success'}
            icon={props.icon ?? 'restore'}

            enabled={props.enabled ?? (
                Object.values(states).some(({0: value, 3: initialValue, 4: precision}) => (
                    (typeof(precision) === 'number')
                    ?
                    (Math.abs(value - initialValue) >= precision)
                    :
                    (value !== initialValue)
                ))
            )}
            onClick={(e) => {
                props.onClick?.(e);

                Object.values(states).forEach(({2: resetValue}) => resetValue())
            }}
        >
            { props.children ?? 'Reset to Default' }
        </ButtonIcon>
    </>);
}
