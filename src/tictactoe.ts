export default class TicTacToe {

    n: number
    board: number[][]
    rows: { 
        [player: string]: number[]
    } = { 1: [], 2: [] }
    columns: { 
        [player: string]: number[]
    } = { 1: [], 2: [] }
    diagonals: { 
        [player: string]: number[]
    } = { 1: [0, 0], 2: [0, 0] }

    constructor(n: number = 3) {
        this.n = n
        this.board = new Array(n).fill(0).map(() => new Array(n).fill(0))
        Object.entries(this.rows).forEach(([player]) => {
            this.rows[player] = new Array(this.board.length).fill(0)
            this.columns[player] = new Array(this.board.length).fill(0)
        })
    }

    move(x: number, y: number, player: number): boolean {
        this.board[x][y] = player
        return (
            ++this.rows[player][x] === this.n ||
            ++this.columns[player][y] === this.n ||
            (x === y && ++this.diagonals[player][0]) === this.n ||
            (x + y === (this.n - 1) && ++this.diagonals[player][1]) === this.n
        )
    }

}