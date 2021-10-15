export interface VoyagerDisplayOptions {
    rootType?: string;
    skipRelay?: boolean;
    skipDeprecated?: boolean;
    showLeafFields?: boolean;
    sortByAlphabet?: boolean;
    hideRoot?: boolean;
}
export interface RenderVoyagerOptions {
    endpoint?: string;
    headers?: string | Record<string, unknown>;
    displayOptions?: VoyagerDisplayOptions;
    credentials?: 'same-origin' | 'include' | 'omit';
}
export declare function renderVoyagerPage(options: RenderVoyagerOptions): string;
