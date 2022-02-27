import { useState } from 'react';

// cssfn:
import {
    // compositions:
    mainComposition,
    
    
    
    // styles:
    style,
    
    
    
    // rules:
    rule,
    
    
    
    // combinators:
    children,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    // hooks:
    createUseSheet,
}                           from '@cssfn/react-cssfn' // cssfn for react

import { BasicProps, Basic } from "@nodestrap/basic"
import Radio, { RadioProps } from "@nodestrap/radio";
import Group from "@nodestrap/group";
import spacers from "@nodestrap/spacers";
import type { PopupPlacement } from './Detail';



export const useSelectPopupPlacementSheet = createUseSheet(() => [
    mainComposition(
        rule('&&', {
            ...style({
                display: 'grid',
                gridTemplateColumns: [[
                    spacers.xl,
                    '1fr',
                    'min-content',
                    '1fr',
                    spacers.xl,
                ]],
                gridTemplateRows: [[
                    spacers.xl,
                    '1fr',
                    'min-content',
                    '1fr',
                    spacers.xl,
                ]],
                gridTemplateAreas: [[
                    '"..... .......  top    ....... ....."',
                    '"..... content content content ....."',
                    '"left  content content content right"',
                    '"..... content content content ....."',
                    '"..... ....... bottom  ....... ....."',
                ]],
                padding: 0,
                
                
                
                ...children(':nth-child(1)', {
                    gridArea: 'top',
                }),
                ...children(':nth-child(2)', {
                    gridArea: 'bottom',
                }),
                ...children(':nth-child(3)', {
                    gridArea: 'left',
                }),
                ...children(':nth-child(4)', {
                    gridArea: 'right',
                }),
                ...children(':not(:nth-child(5))>*>*', {
                    flexWrap : 'nowrap',
                    padding  : spacers.default,
                }),
                
                ...children(':nth-child(5)', {
                    gridArea: 'content',
                }),
            }),
        }),
    ),
], /*sheetId :*/'cn1annh9xo'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names



const Option = (props: RadioProps) => <Radio {...props} enableValidation={false} nude={true} mild={true} size='lg' />

export interface PopupSelectPopupPlacement extends Omit<BasicProps, 'children'> {
    children ?: (popupPlacement: PopupPlacement) => React.ReactElement
}
export const SelectPopupPlacement = (props: PopupSelectPopupPlacement) => {
    const sheet = useSelectPopupPlacementSheet();
    const [popupPlacement, setPopupPlacement] = useState<PopupPlacement>('top')
    
    
    
    return (
        <Basic
            {...props}
            classes={[sheet.main]}
            theme='secondary'
            mild={true}
        >
            <Group orientation='inline' listStyle='flat'>
                <Option active={popupPlacement === 'top-start'   } onActiveChange={(active) => active && setPopupPlacement('top-start'   )} />
                <Option active={popupPlacement === 'top'         } onActiveChange={(active) => active && setPopupPlacement('top'         )} />
                <Option active={popupPlacement === 'top-end'     } onActiveChange={(active) => active && setPopupPlacement('top-end'     )} />
            </Group>
            
            <Group orientation='inline' listStyle='flat'>
                <Option active={popupPlacement === 'bottom-start'} onActiveChange={(active) => active && setPopupPlacement('bottom-start')} />
                <Option active={popupPlacement === 'bottom'      } onActiveChange={(active) => active && setPopupPlacement('bottom'      )} />
                <Option active={popupPlacement === 'bottom-end'  } onActiveChange={(active) => active && setPopupPlacement('bottom-end'  )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={popupPlacement === 'left-start'  } onActiveChange={(active) => active && setPopupPlacement('left-start'  )} />
                <Option active={popupPlacement === 'left'        } onActiveChange={(active) => active && setPopupPlacement('left'        )} />
                <Option active={popupPlacement === 'left-end'    } onActiveChange={(active) => active && setPopupPlacement('left-end'    )} />
            </Group>
            
            <Group orientation='block' listStyle='flat'>
                <Option active={popupPlacement === 'right-start' } onActiveChange={(active) => active && setPopupPlacement('right-start' )} />
                <Option active={popupPlacement === 'right'       } onActiveChange={(active) => active && setPopupPlacement('right'       )} />
                <Option active={popupPlacement === 'right-end'   } onActiveChange={(active) => active && setPopupPlacement('right-end'   )} />
            </Group>
            
            { props.children?.(popupPlacement) }
        </Basic>
    );
};
export default SelectPopupPlacement;