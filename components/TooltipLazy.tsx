import type { TooltipProps } from '@nodestrap/tooltip'

import loadable from '@loadable/component'
const Tooltip = loadable(() => import(/* webpackChunkName: 'tooltip' */'@nodestrap/tooltip'))



export function TooltipLazy<TElement extends HTMLElement = HTMLElement>(props: TooltipProps<TElement>) {
    return <Tooltip {...props} />
}
export { TooltipLazy as default, TooltipLazy as Tooltip }