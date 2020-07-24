export declare type Kind = 'info' | 'positive' | 'negative' | 'warning';
export declare type KindMap = Record<Kind, string>;
export interface AlertProps {
    /**
     * default info
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
