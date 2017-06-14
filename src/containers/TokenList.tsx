import * as React from  'react';
import { TokenListService } from '../services/TokenList.service';
import { ITokenListState, IToken } from '../interface/ITokenList';

class TokenList extends React.Component<any, ITokenListState> {
    private subject$: any = null;

    constructor(props: any) {
        super(props);

        this.state = {
            tokens: []
        };

        this.handleAddToken = this.handleAddToken.bind(this);
        this.handleRemoveToken = this.handleRemoveToken.bind(this);
    }

    componentDidMount() {
        this.subject$ = TokenListService.get();

        this.subject$.subscribe((tokens: IToken[]) => {
            this.setState({ tokens });
        });
    }

    componentWillUnmount() {
        this.subject$.unsubscribe();
    }

    handleAddToken(e: React.MouseEvent<HTMLButtonElement>) {
        TokenListService.post('lulin');
    }

    handleRemoveToken(e: React.MouseEvent<HTMLButtonElement>) {
        const tokens = TokenListService.getTokens();
        const total = tokens.length;

        if(total > 0) {
            const { id } = tokens.pop();

            TokenListService.del(id);
        }
    }

    render() {
        const { tokens } = this.state;
        const list = tokens.map((t: IToken, i: number) => {
            return <p key={i}>{t.id}-{t.name}</p>;
        });

        return (
            <div>
                <button onClick={this.handleAddToken}>添加</button>
                <button onClick={this.handleRemoveToken}>删除</button>

                {list}
            </div>
        );
    }
}

export default TokenList;
