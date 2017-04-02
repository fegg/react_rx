export interface IToken {
    id: number;
    name: string;
};

export interface ITokenListState {
    tokens: Array<IToken>;
}