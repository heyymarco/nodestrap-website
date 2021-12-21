import { ContentProps, Content } from '@nodestrap/content'
import { ButtonIconProps, ButtonIcon } from '@nodestrap/button-icon'
import styles from './DemoPanel.module.scss'
import { Group } from '@nodestrap/group'
import { Radio } from '@nodestrap/radio'
import { Range } from '@nodestrap/range'
import { ThemeName } from '@nodestrap/basic'




export function DemoPanel(props: ContentProps) {
    return (
        <Content
            {...props}
            classes={[...(props.classes ?? []),
                styles.panel,
            ]}
            theme={props.theme ?? 'secondary'}
        >
            { props.children }
        </Content>
    );
}
export default DemoPanel;



export interface OptionProps {
    name     : string
    options  : any[]
    value    : any
    setValue : React.Dispatch<any>
}
export function Option(props: OptionProps) {
    const {
        name,
        options,
        value,
        setValue,
    } = props;
    
    
    
    return (<>
        <label>{ name }</label>
        <Group>
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

export interface ThemeOptionProps {
    name     ?: string
    value     : ThemeName|undefined
    addUnset ?: boolean
    setValue  : React.Dispatch<ThemeName|undefined>
}
export function ThemeOption(props: ThemeOptionProps) {
    const {
        name,
        value,
        addUnset,
        setValue,
    } = props;
    
    
    
    return (<>
        <label>{ name ?? 'theme' }</label>
        <Group>
            {
                [...(addUnset ? [undefined] : []), 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
                .map((option, index) =>
                    <Radio
                        key={index}
                        theme={option}
                        mild={true}
                        enableValidation={false}
                        nude={false}
                        checkStyle='togglerBtn'
                        
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



export interface SliderProps {
    name     : string
    min      : number
    max      : number
    step     : number
    value    : number
    setValue : React.Dispatch<number>
}
export function Slider(props: SliderProps) {
    const {
        name,
        min,
        max,
        step,
        value,
        setValue,
    } = props;
    
    
    
    return (<>
        <label>{ name }</label>
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



export function ResetButton(props: ButtonIconProps) {
    return (<>
        <span>Reset</span>
        <ButtonIcon
            {...props}
            theme={props.theme ?? 'success'}
            icon={props.icon ?? 'restore'}
        >
            { props.children ?? 'Reset to Default' }
        </ButtonIcon>
    </>);
}