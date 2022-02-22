import { useRef } from 'react';

import { useResetableState, Option, ResetButton } from './DemoPanel';
import { IndicatorInitials, IndicatorOptionProps, IndicatorOptions, useIndicatorStates } from './DemoPanel@Indicator';

import { List, ListItem, ListStyle, OrientationName } from '@nodestrap/list'
import { TypeScriptCode } from './Code';



export const listInitials = {
    orientation : 'block'  as OrientationName|undefined,
    listStyle1  : undefined as ListStyle|undefined,
    listStyle2  : undefined as ListStyle|undefined,
    actionCtrl  : undefined as boolean|undefined,
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
    const prevListStyle1 = useRef(states.listStyle1[0]);
    const prevListStyle2 = useRef(states.listStyle2[0]);



    if (prevListStyle1.current !== states.listStyle1[0]) {
        prevListStyle1.current = states.listStyle1[0];

        switch (states.listStyle2[0]) {
            case undefined:
            case 'content':
            case 'numbered':
                break;
            
            default:
                if (states.listStyle2[0] !== undefined) {
                    states.listStyle2[0] = undefined;
                    states.listStyle2[1](undefined);
                    prevListStyle2.current = undefined;
                } // if
        } // switch
    } // if
    
    if (prevListStyle2.current !== states.listStyle2[0]) {
        prevListStyle2.current = states.listStyle2[0];

        switch (states.listStyle2[0]) {
            case 'btn':
            case 'tab':
            case 'breadcrumb':
            case 'bullet':
                if (states.listStyle1[0] !== undefined) {
                    states.listStyle1[0] = undefined;
                    states.listStyle1[1](undefined);
                    prevListStyle1.current = undefined;
                } // if
                break;
        } // switch

        if (states.listStyle2[0] === 'breadcrumb') {
            if (states.orientation[0] !== 'inline') states.orientation[1]('inline');
        } // if
    } // if
    
    
    
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
    const hasChildren = states.listStyle2[0] !== 'bullet';
    
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
                        {hasChildren && 'A first item (inherit theme)'}
                    </ListItem>
                    <ListItem>
                        {hasChildren && 'A second item (inherit theme)'}
                    </ListItem>
                    <ListItem theme='danger'>
                        {hasChildren && 'A third item (danger theme)'}
                    </ListItem>
                    <ListItem theme='success'>
                        {hasChildren && 'A fourth item (success theme)'}
                    </ListItem>
                    <ListItem active={true}>
                        {hasChildren && 'A fifth item (active)'}
                    </ListItem>
                    <ListItem enabled={false}>
                        {hasChildren && 'A sixth item (disabled)'}
                    </ListItem>
                    <ListItem active={true} enabled={false}>
                        {hasChildren && 'A seventh item (active + disabled)'}
                    </ListItem>
                    <ListItem actionCtrl={true} active={true}>
                        {hasChildren && 'A eighth item (clickable + active)'}
                    </ListItem>
                    <ListItem actionCtrl={true} enabled={false}>
                        {hasChildren && 'A nineth item (clickable + disabled)'}
                    </ListItem>
                    <ListItem actionCtrl={true} active={true} enabled={false}>
                        {hasChildren && 'A tenth item (clickable + active + disabled)'}
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
    <ListItem${                                                hasChildren ? '>\n        A first item (inherit theme)\n    </ListItem>'                  : ' />'}
    <ListItem${                                                hasChildren ? '>\n        A second item (inherit theme)\n    </ListItem>'                 : ' />'}
    <ListItem theme='danger'${                                 hasChildren ? '>\n        A third item (danger theme)\n    </ListItem>'                   : ' />'}
    <ListItem theme='success'${                                hasChildren ? '>\n        A fourth item (success theme)\n    </ListItem>'                 : ' />'}
    <ListItem active={true}${                                  hasChildren ? '>\n        A fifth item (active)\n    </ListItem>'                         : ' />'}
    <ListItem enabled={false}${                                hasChildren ? '>\n        A sixth item (disabled)\n    </ListItem>'                       : ' />'}
    <ListItem active={true} enabled={false}${                  hasChildren ? '>\n        A seventh item (active + disabled)\n    </ListItem>'            : ' />'}
    <ListItem actionCtrl={true} active={true}${                hasChildren ? '>\n        A eighth item (clickable + active)\n    </ListItem>'           : ' />'}
    <ListItem actionCtrl={true} enabled={false}${              hasChildren ? '>\n        A nineth item (clickable + disabled)\n    </ListItem>'         : ' />'}
    <ListItem actionCtrl={true} active={true} enabled={false}${hasChildren ? '>\n        A tenth item (clickable + active + disabled)\n    </ListItem>' : ' />'}
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
