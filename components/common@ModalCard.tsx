import React from 'react'

import {
    SectionPropertyViewportRefProps,
    SectionPropertyViewportRef as ModalSectionPropertyViewportRef,
} from './common@Modal'



export const SectionPropertyViewportRef = ({ dummyContent = '<p>...</p>', ...restProps }: SectionPropertyViewportRefProps) => {
    return (
        <ModalSectionPropertyViewportRef {...restProps} dummyContent={dummyContent} />
    );
};
