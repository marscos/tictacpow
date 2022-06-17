import TicTacToe from '../tictactoe'

test('wins with row', () => {
  let game = new TicTacToe()
  game.move(0,0,1)
  game.move(0,1,1)
  expect(game.move(0,2,1)).toBe(true);
});