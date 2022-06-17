type PlayerScore = {
    rows: number[],
    columns: number[],
    diagonals: number[]
}

type GamePlayers = { [name: string]: PlayerScore }

export default class TicTacToe {

    n: number
    board: string[][]
    players: GamePlayers
    movesPlayed: number

    constructor(n: number = 3, playerNames: string[] = ["1", "2"]) {
        this.n = n
        this.board = new Array(n).fill("").map(() => new Array(n).fill(""))
        this.movesPlayed = 0
        this.players = playerNames.reduce( (prev, curr): GamePlayers => {
            return {
                ...prev,
                [curr]: {
                    rows: new Array(this.board.length).fill(0),
                    columns: new Array(this.board.length).fill(0),
                    diagonals: [0, 0]
                }
            }
        }, {})
    }

    /**
     * Player {player} claims coordinates {x},{y} on the board.
     * Code intentionally made weird.
     * @param x 
     * @param y 
     * @param player 
     * @returns {null|undefined|string} The winner
     */
    move(x: number, y: number, player: string): null | undefined | string {
        if (this.board[x][y]) throw "Illegal move"
        this.board[x][y] = player
        return (
            ++this.players[player].rows[x] === this.n ||
            ++this.players[player].columns[y] === this.n ||
            (x === y && ++this.players[player].diagonals[0]) === this.n ||
            (x + y === (this.n - 1) && ++this.players[player].diagonals[1]) === this.n
        ) ? player : ++this.movesPlayed === this.n*this.n ? null : undefined
    }

}