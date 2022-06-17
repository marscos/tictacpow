import TicTacToe from '../tictactoe'

let game: TicTacToe

beforeEach(() => {
  game = new TicTacToe(3, ["Player 1", "Player 2"])
})

test('wins with row', () => {
  expect(game.move(0,0,"Player 1")).toBe(undefined)
  expect(game.move(0,1,"Player 1")).toBe(undefined)
  expect(game.move(0,2,"Player 1")).toBe("Player 1")
})

test('wins with column', () => {
  expect(game.move(0,0,"Player 1")).toBe(undefined)
  expect(game.move(1,0,"Player 1")).toBe(undefined)
  expect(game.move(2,0,"Player 1")).toBe("Player 1")
})

test('wins with diagonal', () => {
  expect(game.move(0,0,"Player 1")).toBe(undefined)
  expect(game.move(1,1,"Player 1")).toBe(undefined)
  expect(game.move(2,2,"Player 1")).toBe("Player 1")
})

test('wins with antidiagonal', () => {
  expect(game.move(0,2,"Player 1")).toBe(undefined)
  expect(game.move(1,1,"Player 1")).toBe(undefined)
  expect(game.move(2,0,"Player 1")).toBe("Player 1")
})

test('game draws', () => {
  expect(game.move(0,0,"Player 1")).toBe(undefined)
  expect(game.move(1,0,"Player 2")).toBe(undefined)
  expect(game.move(0,2,"Player 1")).toBe(undefined)
  expect(game.move(0,1,"Player 2")).toBe(undefined)
  expect(game.move(1,1,"Player 1")).toBe(undefined)
  expect(game.move(2,2,"Player 2")).toBe(undefined)
  expect(game.move(1,2,"Player 1")).toBe(undefined)
  expect(game.move(2,0,"Player 2")).toBe(undefined)
  expect(game.move(2,1,"Player 1")).toBe(null)
})

test('throws on illegal move', () => {
  game.move(1,1,"Player 1")
  expect(() => game.move(1,1,"Player 2")).toThrow()
})