import { Rule } from './Rule';
export declare class EmailAddressRule<TModel, TValue extends TModel[keyof TModel]> extends Rule<TModel, TValue> {
    constructor();
}