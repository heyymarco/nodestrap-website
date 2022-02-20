import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptionProps, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { List, ListItem, ListStyle, OrientationName } from '@nodestrap/list'
import { TypeScriptCode } from './Code';



export const listInitials = {
    orientation : 'block'  as OrientationName|undefined,
    listStyle1 : undefined as ListStyle|undefined,
    listStyle2 : undefined as ListStyle|undefined,
    actionCtrl : undefined as boolean|undefined,
};
export type ListInitials = typeof listInitials & Partial<IndicatorInitials>
export const useListStates = (initials ?: Partial<ListInitials>) => {
    const initials2 : ListInitials = {
        ...listInitials,
        ...initials
    };
    
    const orientation = useResetableState(initials2.orientation);
    const listStyle1  = useResetableState(initials2.listStyle1);
    const listStyle2  = useResetableState(initials2.listStyle1);
    const actionCtrl  = useResetableState(initials2.actionCtrl);

    return {
        ...useIndicatorStates(initials2),

        orientation,
        listStyle1,
        listStyle2,
        actionCtrl,
    }
}
export type ListOptionProps = { states: ReturnType<typeof useListStates> } & IndicatorOptionProps
export const ListOptions = (props: ListOptionProps) => {
    const { states } = props;
    
    
    
    return (<>
        <Option
            name='orientation'
            options={['block', 'inline']}
            value={states.orientation[0]}
            setValue={states.orientation[1]}
        />
        <Option
            orientation='block'
            name='listStyle'
            options={[undefined, 'flat','flush','joined']}
            value={states.listStyle1[0]}
            setValue={states.listStyle1[1]}
        />
        <Option
            orientation='block'
            name='listStyle'
            options={[undefined, 'content','btn','tab','breadcrumb','bullet','numbered']}
            value={states.listStyle2[0]}
            setValue={states.listStyle2[1]}
        />
        <Option
            name='actionCtrl'
            options={[undefined, false, true]}
            value={states.actionCtrl[0]}
            setValue={states.actionCtrl[1]}
        />

        <IndicatorOptions
            {...props}
        />
    </>);
}



export const DemoList = () => {
    const states = useListStates();
    
    const listStyle : ListStyle[] = [
        states.listStyle1[0],
        states.listStyle2[0]
    ].filter((ls): ls is ListStyle => !!ls);
    return (
        <>
            <div className='preview'>
                <List
                    orientation={states.orientation[0]}
                    listStyle={listStyle}
                    actionCtrl={states.actionCtrl[0]}
                    
                    enabled={states.enabled[0]}
                    active={states.active[0]}
                    
                    size={states.size[0]}
                    nude={states.nude[0]}
                    theme={states.theme[0]}
                    gradient={states.gradient[0]}
                    outlined={states.outlined[0]}
                    mild={states.mild[0]}
                >
                    <ListItem>
                        A first item (inherit theme)
                    </ListItem>
                    <ListItem>
                        A second item (inherit theme)
                    </ListItem>
                    <ListItem theme='danger'>
                        A third item (danger theme)
                    </ListItem>
                    <ListItem theme='success'>
                        A fourth item (success theme)
                    </ListItem>
                    <ListItem active={true}>
                        A fifth item (active)
                    </ListItem>
                    <ListItem enabled={false}>
                        A sixth item (disabled)
                    </ListItem>
                    <ListItem active={true} enabled={false}>
                        A seventh item (active + disabled)
                    </ListItem>
                    <ListItem actionCtrl={true} active={true}>
                        A eighth item (actionCtrl + active)
                    </ListItem>
                    <ListItem actionCtrl={true} enabled={false}>
                        A nineth item (actionCtrl + disabled)
                    </ListItem>
                    <ListItem actionCtrl={true} active={true} enabled={false}>
                        A tenth item (actionCtrl + active + disabled)
                    </ListItem>
                </List>
                <TypeScriptCode collapsable={false}>{`
<List
    orientation=${states.orientation[0] ? `'${states.orientation[0]}'` : '{undefined}'}
    listStyle=${listStyle.length ? ((listStyle.length === 1) ? `'${listStyle}'` : `{[${listStyle.map((ls) => `'${ls}'`).join(', ')}]}`) : '{undefined}'}
    actionCtrl={${states.actionCtrl[0]}}
    
    enabled={${states.enabled[0]}}
    active={${states.active[0]}}
    
    size=${states.size[0] ? `'${states.size[0]}'` : '{undefined}'}
    nude={${states.nude[0]}}
    theme='${states.theme[0]}'
    gradient={${states.gradient[0]}}
    outlined={${states.outlined[0]}}
    mild={${states.mild[0]}}
>
    <ListItem>
        A first item (inherit theme)
    </ListItem>
    <ListItem>
        A second item (inherit theme)
    </ListItem>
    <ListItem theme='danger'>
        A third item (danger theme)
    </ListItem>
    <ListItem theme='success'>
        A fourth item (success theme)
    </ListItem>
    <ListItem active={true}>
        A fifth item (active)
    </ListItem>
    <ListItem enabled={false}>
        A sixth item (disabled)
    </ListItem>
    <ListItem active={true} enabled={false}>
        A seventh item (active + disabled)
    </ListItem>
    <ListItem actionCtrl={true} active={true}>
        A eighth item (actionCtrl + active)
    </ListItem>
    <ListItem actionCtrl={true} enabled={false}>
        A nineth item (actionCtrl + disabled)
    </ListItem>
    <ListItem actionCtrl={true} active={true} enabled={false}>
        A tenth item (actionCtrl + active + disabled)
    </ListItem>
</List>
                `}</TypeScriptCode>
            </div>
            
            <div className='options'>
                <ListOptions states={states} />
                
                <ResetButton states={states} />
            </div>
        </>
    );
}
export { DemoList as default }
