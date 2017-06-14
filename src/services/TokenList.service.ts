import { Subject } from 'rxjs/Subject';
import { IToken } from '../interface/ITokenList';

let tokens: Array<IToken> = [];
let id: number = 1;
let tokens$ = new Subject<IToken[]>();

export let TokenListService = {
    post(name : string): void {
        tokens.push({
            id: id++,
            name
        });

        tokens$.next(tokens);
    },
    del(id: number) {
        tokens = tokens.filter(t => t.id !== id);

        tokens$.next(tokens);
    },
    get(): Subject<IToken[]> {
        tokens$.next(tokens);

        return tokens$;
    },
    getTokens(): IToken[] {
        return tokens;
    }
};
