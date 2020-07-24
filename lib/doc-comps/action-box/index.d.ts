import React from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
interface Props {
    code: string;
    title?: React.ReactNode;
    desc?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const ActionBox: React.FC<Props>;
export default ActionBox;
