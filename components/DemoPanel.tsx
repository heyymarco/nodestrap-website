// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    
    
    
    // rules:
    rule,
    
    
    
    //combinators:
    children,
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
import type { OrientationName, ThemeName } from '@nodestrap/basic'
import { useRef, useState } from 'react'
import type { Dictionary } from '@cssfn/types'
import { ResponsiveProvider, useResponsiveCurrentFallback } from '@nodestrap/responsive'



export const useDemoPanelSheet = createUseSheet(() => [
    mainComposition(
        rule('&&', { // makes `.DemoPanel` is more specific than `.Content`
            ...style({
                display             : [['grid'], '!important'],
                gridTemplateColumns : [['max-content', '1fr']],
                gridAutoFlow        : 'row',
                gridAutoRows        : 'auto',
                gap                 : '1em',
                
                background          : 'linear-gradient(90deg, #eeeeee, #aaaaaa)',
                
                ...children(['span:not(:nth-child(2))', 'code'], {
                    display        : 'flex',
                    justifyContent : 'left',
                    alignItems     : 'center',
                }),
                ...children(['hr', '.busy'], {
                    gridColumnStart : 1,
                    gridColumnEnd   : -1,
                }),
            }),
        }),
    ),
], /*sheetId :*/'s8amjun6ag'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



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
    
    const currentFallback = useResponsiveCurrentFallback<Fallback>();
    
    
    
    return (<>
        {name && <span>{ name }</span>}
        <Group
            orientation={currentFallback}
            
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
        </Group>
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
        {name && <span>{ name }</span>}
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
        {name && <span>{ name }</span>}
        <Range
            enableValidation={false}
            
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={({currentTarget}) => setValue(currentTarget.valueAsNumber)}
        />
    </>);
}



export type ResetableState<S, P extends number|undefined = undefined> = readonly [
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
        <span>Reset</span>
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
