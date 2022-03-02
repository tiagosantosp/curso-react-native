//  FUNCÃO PARA CRIAR O TABULEIRO DO JOGO
const createBoard = (rows, columns ) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return{
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0
      }
    })
  })
}

// FUNÇÂO PARA ESPALHAR AS MINAS NO TABULEIRO
const spreadMines = (board, minesAmount) => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0
  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10)
    const colSel = parseInt(Math.random() * columns, 10)
    if (!board[rowSel][colSel].mined) {
      board[rowSel][colSel].mined = true
      minesPlanted++
    }
  }
}


// FUNÇÂO PARA CRIAR UM TABULEIRO COM MINAS 
const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}

export {createMinedBoard}