// import * as types from '../actions/actionTypes';
import { useSelector } from 'react-redux';

const initialState = {
  score: 0,
  // leaderboard: [],
  gameOver: false,
  board: new Array(16).fill(null),
  newTiles: null,
};

// get loc of first
const a = Math.floor(Math.random() * 16);
let b = a;
// get valid loc of second
while (b == a) {
  b = Math.floor(Math.random() * 16);
}
// set first to 2
const aValue = 2;
// set second to 50/50 chance of 2 or 4
const bValue = 2 * Math.floor(Math.random() * 2) + 2;
// assign
initialState.board[a] = aValue;
initialState.board[b] = bValue;
initialState.newTiles = [a, b];

/*
board = [0,  1,  2,  3,
         4,  5,  6,  7,
         8, 9, 10, 11,
         12, 13, 14, 15]
*/

const postScore = () => {
  let score = useSelector((state) => state.boxes.score);

  fetch('/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const boxesReducer = (state = initialState, action) => {
  if (action.payload === 'UP') {
<<<<<<< HEAD
    let newTiles;
    let game = false;
    let score = state.score;
    let legal = false;
    let columns = [[], [], [], []];
    let newBoard;
    state.board.forEach((x, i) => {
      if (x) {
        columns[i % 4].push(x);
      }
    });
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < columns[i].length - 1; j++) {
        if (columns[i][j] === columns[i][j + 1]) {
          legal = true;
          break;
        }
      }
      if (legal) {
        break;
      }
    }
    // If have column count of 1, 2, or 3, legal
    // Make this actual column count
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (columns[i].length % 4) {
          legal = true;
          break;
        }
      }
    }
    if (legal) {
      // if legal
      //check for doubles

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < columns[i].length - 1; j++) {
          if (columns[i][j] === columns[i][j + 1]) {
            columns[i][j] += columns[i][j + 1];
            columns[i][j + 1] = null;
            score += columns[i][j];
          }
        }
      }
      newBoard = new Array(16).fill(null);
      for (let i = 0; i < 4; i++) {
        let k = 0;
        for (let j = 0; j < columns[i].length; j++) {
          if (columns[i][j]) {
            newBoard[i + 4 * k] = columns[i][j];
            k++;
          }
        }
        // for(let j = k; j < 4; j++){
        //   newBoard[i + 4 * j] = null;
        // }
      }
      // for(let i = 0; i < 4; i++){
      //   for(let j = 0; j < 3; j++){
      //     // combine doubles
      //   // update score
      //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
      //       let pos = i + 4*j;
      //       newBoard[pos] += newBoard[pos + 4];
      //       newBoard[pos + 4] = null;
      //       score += newBoard[pos];
      //     }
      //   }
      // }

      // move everything up that can move up
      // nullify after move.
      // for(let i = 0; i < 4; i++){
      //   for(let j = 1; j < 4; j++){
      //       let pos = i + 4*j;
      //       let np = pos;
      //       if(newBoard[pos]){
      //         while(np > 3 && (!newBoard[np - 4])){
      //           np -= 4;
      //         }
      //       }
      //       if(np !== pos){
      //         newBoard[np] = newBoard[pos];
      //         newBoard[pos] = null;
      //       }
      //   }
      // }
      // add random 2 or 4 in empty square
      let empty = [];
      for (let i = 0; i < 16; i++) {
        if (!newBoard[i]) {
          empty.push(i);
        }
      }
      let loc = Math.floor(Math.random() * empty.length);
      newTiles = [empty[loc]];
      newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      newBoard = [...state.board];
      // if not legal check if L/R is legal
      // if not game over
      let rows = [[], [], [], []];
=======
      let game = false;
      let score = state.score;
      let legal = false;
      let columns = [[], [], [], []];
      let newBoard;
>>>>>>> master
      state.board.forEach((x, i) => {
        if(x) {
        columns[i % 4].push(parseInt(x, 16));
        }
      });
      // check if move is legal
        // If doubles, legal
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < columns[i].length - 1; j++){
          if(columns[i][j] === columns[i][j + 1]){
            legal = true;
            break;
          }
        }
      }
<<<<<<< HEAD

      if (game) {
        for (let i = 0; i < 4; i++) {
          if (rows[i].length % 4) {
            game = false;
            break;
          }
        }
      }
    }
    return {
      ...state,
      board: newBoard,
      gameOver: game,
      score: score,
      newTiles,
    };
  } else if (action.payload === 'DOWN') {
    let newTiles;
    let game = false;
    let score = state.score;
    let legal = false;
    let columns = [[], [], [], []];
    let newBoard;
    state.board.forEach((x, i) => {
      if (x) {
        columns[i % 4].push(x);
      }
    });
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < columns[i].length - 1; j++) {
        if (columns[i][j] === columns[i][j + 1]) {
          legal = true;
          break;
        }
      }
      if (legal) {
        break;
      }
    }
=======
    //   if (legal) {
    //     break;
    //   }
    // }
>>>>>>> master
    // If have column count of 1, 2, or 3, legal
    // Make this actual column count
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (columns[i].length % 4) {
          legal = true;
          break;
        } 
      }
    }
          // If have column count of 1, 2, or 3, legal
          // Make this actual column count
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(columns[i].length % 4) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
        // if legal
          //check for doubles

          for(let i = 0; i < 4; i++){
            for(let j = 0; j < columns[i].length - 1; j++){
              if(columns[i][j] === columns[i][j + 1]){
                columns[i][j] += columns[i][j + 1];
                columns[i][j+1] = null;
                score += columns[i][j]
              }
            }
          }
           newBoard = new Array(16).fill(null);
          for(let i = 0; i < 4; i++){
            let k = 0;
            for(let j = 0; j < columns[i].length; j++){
              if(columns[i][j]){
                newBoard[i + 4 * k] = columns[i][j];
                k++;
              }
            }
            // for(let j = k; j < 4; j++){
            //   newBoard[i + 4 * j] = null;
            // }
          }
          // for(let i = 0; i < 4; i++){
          //   for(let j = 0; j < 3; j++){
          //     // combine doubles
          //   // update score
          //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
          //       let pos = i + 4*j;
          //       newBoard[pos] += newBoard[pos + 4];
          //       newBoard[pos + 4] = null;
          //       score += newBoard[pos];
          //     }
          //   }
          // }
            
          // move everything up that can move up
            // nullify after move.
            // for(let i = 0; i < 4; i++){
            //   for(let j = 1; j < 4; j++){
            //       let pos = i + 4*j;
            //       let np = pos;
            //       if(newBoard[pos]){
            //         while(np > 3 && (!newBoard[np - 4])){
            //           np -= 4;
            //         }
            //       }
            //       if(np !== pos){
            //         newBoard[np] = newBoard[pos];
            //         newBoard[pos] = null;
            //       }
            //   }
            // }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
          newBoard = newBoard.map(x => x ? x.toString(16) : null);
        } else {
          newBoard = state.board.map(x => x ? parseInt(x, 16) : null);
           // if not legal check if L/R is legal
          // if not game over
          let rows = [[], [], [], []];
            state.board.forEach((x, i) => {
              if(x) {
                rows[i >> 2].push(x);
              }
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < rows[i].length - 1; j++){
                if(rows[i][j] === rows[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }

<<<<<<< HEAD
      // move everything up that can move up
      // nullify after move.
      // for(let i = 0; i < 4; i++){
      //   for(let j = 1; j < 4; j++){
      //       let pos = i + 4*j;
      //       let np = pos;
      //       if(newBoard[pos]){
      //         while(np > 3 && (!newBoard[np - 4])){
      //           np -= 4;
      //         }
      //       }
      //       if(np !== pos){
      //         newBoard[np] = newBoard[pos];
      //         newBoard[pos] = null;
      //       }
      //   }
      // }
      // add random 2 or 4 in empty square
      let empty = [];
      for (let i = 0; i < 16; i++) {
        if (!newBoard[i]) {
          empty.push(i);
        }
      }
      let loc = Math.floor(Math.random() * empty.length);
      newTiles = [empty[loc]];
      newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      newBoard = [...state.board];
      // if not legal check if L/R is legal
      // if not game over
      let rows = [[], [], [], []];
=======
            if(game){
              for(let i = 0; i < 4; i++){
                if(rows[i].length % 4) {
                  game = false;
                  break;
                }
              }
            }
            newBoard = newBoard.map(x => x ? x.toString(16) : null);
        }
        return { ...state, board: newBoard, gameOver: game, score: score };
    } else if (action.payload === 'DOWN') {
      let game = false;
      let score = state.score;
      let legal = false;
      let columns = [[], [], [], []];
      let newBoard;
>>>>>>> master
      state.board.forEach((x, i) => {
        if(x) {
        columns[i % 4].push(parseInt(x, 16));
        }
      });
      // check if move is legal
        // If doubles, legal
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < columns[i].length - 1; j++){
          if(columns[i][j] === columns[i][j + 1]){
            legal = true;
            break;
          }
        }
        if (!game) {
          break;
        } 
      }
          // If have column count of 1, 2, or 3, legal
          // Make this actual column count
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(columns[i].length % 4) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
        // if legal
          //check for doubles

          for(let i = 0; i < 4; i++){
            for(let j = columns[i].length - 1; j > 0; j--){
              if(columns[i][j] === columns[i][j - 1]){
                columns[i][j] += columns[i][j - 1];
                columns[i][j-1] = null;
                score += columns[i][j]
              }
            }
          }
<<<<<<< HEAD
        }
      }
    }
    return {
      ...state,
      board: newBoard,
      gameOver: game,
      score: score,
      newTiles,
    };
=======
          newBoard = new Array(16).fill(null);
          for(let i = 0; i < 4; i++){
            let k = 3;
            for(let j = columns[i].length - 1; j >= 0; j--){
              if(columns[i][j]){
                newBoard[i + 4 * k] = columns[i][j];
                k--;
              }
            }
            // for(let j = k; j >= 0; j--){
            //   newBoard[i + 4 * j] = null;
            // }
          }
          // for(let i = 0; i < 4; i++){
          //   for(let j = 0; j < 3; j++){
          //     // combine doubles
          //   // update score
          //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
          //       let pos = i + 4*j;
          //       newBoard[pos] += newBoard[pos + 4];
          //       newBoard[pos + 4] = null;
          //       score += newBoard[pos];
          //     }
          //   }
          // }
            
          // move everything up that can move up
            // nullify after move.
            // for(let i = 0; i < 4; i++){
            //   for(let j = 1; j < 4; j++){
            //       let pos = i + 4*j;
            //       let np = pos;
            //       if(newBoard[pos]){
            //         while(np > 3 && (!newBoard[np - 4])){
            //           np -= 4;
            //         }
            //       }
            //       if(np !== pos){
            //         newBoard[np] = newBoard[pos];
            //         newBoard[pos] = null;
            //       }
            //   }
            // }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
          newBoard = newBoard.map(x => x ? x.toString(16) : null);
        } else {
          newBoard = state.board.map(x => x ? parseInt(x, 16) : null);
           // if not legal check if L/R is legal
          // if not game over
          let rows = [[], [], [], []];
            state.board.forEach((x, i) => {
              if(x) {
                rows[i >> 2].push(x);
              }
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < rows[i].length - 1; j++){
                if(rows[i][j] === rows[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }

            if(game){
              for(let i = 0; i < 4; i++){
                if(rows[i].length % 4) {
                  game = false;
                  break;
                }
              }
            }
            newBoard = newBoard.map(x => x ? x.toString(16) : null);
        }
        return { ...state, board: newBoard, gameOver: game, score: score };

>>>>>>> master
  } else if (action.payload === 'LEFT') {
    let newTiles;
    let game = false;
    let score = state.score;
    let legal = false;
    let rows = [[], [], [], []];
    let newBoard;
    state.board.forEach((x, i) => {
      if(x) {
      rows[i >> 2].push(parseInt(x, 16));
      }
    });
    // check if move is legal
      // If doubles, legal
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < rows[i].length - 1; j++){
        if(rows[i][j] === rows[i][j + 1]){
          legal = true;
          break;
        }
      }
      if(legal) {
        break;
      } 
    }
        // If have column count of 1, 2, or 3, legal
        // Make this actual column count
      if(!legal){
        for(let i = 0; i < 4; i++){
          if(rows[i].length % 4) {
            legal = true;
            break;
          }
        }
      }
      if (legal) {
      // if legal
        //check for doubles

        for(let i = 0; i < 4; i++){
          for(let j = 0; j < rows[i].length - 1; j++){
            if(rows[i][j] === rows[i][j + 1]){
              rows[i][j] += rows[i][j + 1];
              rows[i][j+1] = null;
              score += rows[i][j]
            }
          }
        }
        newBoard = new Array(16).fill(null);
        for(let i = 0; i < 4; i++){
          let k = 0;
          for(let j = 0; j < rows[i].length; j++){
            if(rows[i][j]){
              newBoard[4 * i + k] = rows[i][j];
              k++;
            }
          }
          // for(let j = k; j < 4; j++){
          //   newBoard[i * 4 + j] = null;
          // }
        }
        // for(let i = 0; i < 4; i++){
        //   for(let j = 0; j < 3; j++){
        //     // combine doubles
        //   // update score
        //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
        //       let pos = i + 4*j;
        //       newBoard[pos] += newBoard[pos + 4];
        //       newBoard[pos + 4] = null;
        //       score += newBoard[pos];
        //     }
        //   }
        // }
<<<<<<< HEAD
      }
      // for(let i = 0; i < 4; i++){
      //   for(let j = 0; j < 3; j++){
      //     // combine doubles
      //   // update score
      //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
      //       let pos = i + 4*j;
      //       newBoard[pos] += newBoard[pos + 4];
      //       newBoard[pos + 4] = null;
      //       score += newBoard[pos];
      //     }
      //   }
      // }

      // move everything up that can move up
      // nullify after move.
      // for(let i = 0; i < 4; i++){
      //   for(let j = 1; j < 4; j++){
      //       let pos = i + 4*j;
      //       let np = pos;
      //       if(newBoard[pos]){
      //         while(np > 3 && (!newBoard[np - 4])){
      //           np -= 4;
      //         }
      //       }
      //       if(np !== pos){
      //         newBoard[np] = newBoard[pos];
      //         newBoard[pos] = null;
      //       }
      //   }
      // }
      // add random 2 or 4 in empty square
      let empty = [];
      for (let i = 0; i < 16; i++) {
        if (!newBoard[i]) {
          empty.push(i);
        }
      }
      let loc = Math.floor(Math.random() * empty.length);
      newTiles = [empty[loc]];
      newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      newBoard = [...state.board];
      // if not legal check if U/D is legal
      // if not game over
      let columns = [[], [], [], []];
      state.board.forEach((x, i) => {
        if (x) {
          columns[i % 4].push(x);
        }
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < columns[i].length - 1; j++) {
          if (columns[i][j] === columns[i][j + 1]) {
            game = false;
            break;
=======
          
        // move everything up that can move up
          // nullify after move.
          // for(let i = 0; i < 4; i++){
          //   for(let j = 1; j < 4; j++){
          //       let pos = i + 4*j;
          //       let np = pos;
          //       if(newBoard[pos]){
          //         while(np > 3 && (!newBoard[np - 4])){
          //           np -= 4;
          //         }
          //       }
          //       if(np !== pos){
          //         newBoard[np] = newBoard[pos];
          //         newBoard[pos] = null;
          //       }
          //   }
          // }
        // add random 2 or 4 in empty square
        let empty = [];
        for(let i = 0; i < 16; i++){
          if(!newBoard[i]){
            empty.push(i);
>>>>>>> master
          }
        }
        let loc = Math.floor(Math.random() * empty.length);
        newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        newBoard = newBoard.map(x => x ? x.toString(16) : null);
      } else {
        newBoard = state.board.map(x => x ? parseInt(x, 16) : null);
         // if not legal check if U/D is legal
        // if not game over
        let columns = [[], [], [], []];
          state.board.forEach((x, i) => {
            if(x) {
              columns[i % 4].push(x);
            }
          });
          game = true;
          for(let i = 0; i < 4; i++){
            for(let j = 0; j < columns[i].length - 1; j++){
              if(columns[i][j] === columns[i][j + 1]){
                game = false;
                break;
              }
            }
            if(!game) {
              break;
            } 
          }

          if(game){
            for(let i = 0; i < 4; i++){
              if(columns[i].length % 4) {
                game = false;
                break;
              }
            }
          }
          newBoard = newBoard.map(x => x ? x.toString(16) : null);
      }
<<<<<<< HEAD
    }
    return {
      ...state,
      board: newBoard,
      gameOver: game,
      score: score,
      newTiles,
    };
=======
      return { ...state, board: newBoard, gameOver: game, score: score };
>>>>>>> master
  } else if (action.payload === 'RIGHT') {
    let newTiles;
    let game = false;
    let score = state.score;
    let legal = false;
    let rows = [[], [], [], []];
    let newBoard;
    state.board.forEach((x, i) => {
      if(x) {
      rows[i >> 2].push(parseInt(x, 16));
      }
    });
    // check if move is legal
      // If doubles, legal
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < rows[i].length - 1; j++){
        if(rows[i][j] === rows[i][j + 1]){
          legal = true;
          break;
        }
      }
      if(legal) {
        break;
      } 
    }
        // If have row count of 1, 2, or 3, legal
        // Make this actual row count
      if(!legal){
        for(let i = 0; i < 4; i++){
          if(rows[i].length % 4) {
            legal = true;
            break;
          }
        }
      }
      if (legal) {
      // if legal
        //check for doubles

        for(let i = 0; i < 4; i++){
          for(let j = rows[i].length - 1; j > 0; j--){
            if(rows[i][j] === rows[i][j - 1]){
              rows[i][j] += rows[i][j - 1];
              rows[i][j-1] = null;
              score += rows[i][j]
            }
          }
        }
        newBoard = new Array(16).fill(null);
        for(let i = 0; i < 4; i++){
          let k = 3;
          for(let j = rows[i].length - 1; j >= 0; j--){
            if(rows[i][j]){
              newBoard[4 * i + k] = rows[i][j];
              k--;
            }
          }
          // for(let j = k; j >=0; j--){
          //   newBoard[i * 4 + j] = null;
          // }
        }
        // for(let i = 0; i < 4; i++){
        //   for(let j = 0; j < 3; j++){
        //     // combine doubles
        //   // update score
        //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
        //       let pos = i + 4*j;
        //       newBoard[pos] += newBoard[pos + 4];
        //       newBoard[pos + 4] = null;
        //       score += newBoard[pos];
        //     }
        //   }
        // }
<<<<<<< HEAD
      }
      // for(let i = 0; i < 4; i++){
      //   for(let j = 0; j < 3; j++){
      //     // combine doubles
      //   // update score
      //     if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
      //       let pos = i + 4*j;
      //       newBoard[pos] += newBoard[pos + 4];
      //       newBoard[pos + 4] = null;
      //       score += newBoard[pos];
      //     }
      //   }
      // }

      // move everything up that can move up
      // nullify after move.
      // for(let i = 0; i < 4; i++){
      //   for(let j = 1; j < 4; j++){
      //       let pos = i + 4*j;
      //       let np = pos;
      //       if(newBoard[pos]){
      //         while(np > 3 && (!newBoard[np - 4])){
      //           np -= 4;
      //         }
      //       }
      //       if(np !== pos){
      //         newBoard[np] = newBoard[pos];
      //         newBoard[pos] = null;
      //       }
      //   }
      // }
      // add random 2 or 4 in empty square
      let empty = [];
      for (let i = 0; i < 16; i++) {
        if (!newBoard[i]) {
          empty.push(i);
        }
      }
      let loc = Math.floor(Math.random() * empty.length);
      newTiles = [empty[loc]];
      newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      newBoard = [...state.board];
      // if not legal check if U/D is legal
      // if not game over
      let columns = [[], [], [], []];
      state.board.forEach((x, i) => {
        if (x) {
          columns[i % 4].push(x);
        }
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < columns[i].length - 1; j++) {
          if (columns[i][j] === columns[i][j + 1]) {
            game = false;
            break;
          }
        }
        if (!game) {
          break;
        }
      }

      if (game) {
        for (let i = 0; i < 4; i++) {
          if (columns[i].length % 4) {
            game = false;
            break;
          }
        }
      }
    }
    return {
      ...state,
      board: newBoard,
      gameOver: game,
      score: score,
      newTiles,
    };
=======
          
        // move everything up that can move up
          // nullify after move.
          // for(let i = 0; i < 4; i++){
          //   for(let j = 1; j < 4; j++){
          //       let pos = i + 4*j;
          //       let np = pos;
          //       if(newBoard[pos]){
          //         while(np > 3 && (!newBoard[np - 4])){
          //           np -= 4;
          //         }
          //       }
          //       if(np !== pos){
          //         newBoard[np] = newBoard[pos];
          //         newBoard[pos] = null;
          //       }
          //   }
          // }
        // add random 2 or 4 in empty square
        let empty = [];
        for(let i = 0; i < 16; i++){
          if(!newBoard[i]){
            empty.push(i);
          }
        }
        let loc = Math.floor(Math.random() * empty.length);
        newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        newBoard = newBoard.map(x => x ? x.toString(16) : null);
      } else {
          newBoard = state.board.map(x => x ? parseInt(x, 16) : null);
          // if not legal check if U/D is legal
         // if not game over
         let columns = [[], [], [], []];
           state.board.forEach((x, i) => {
             if(x) {
               columns[i % 4].push(x);
             }
           });
           game = true;
           for(let i = 0; i < 4; i++){
             for(let j = 0; j < columns[i].length - 1; j++){
               if(columns[i][j] === columns[i][j + 1]){
                 game = false;
                 break;
               }
             }
             if(!game) {
               break;
             } 
           }
 
           if(game){
             for(let i = 0; i < 4; i++){
               if(columns[i].length % 4) {
                 game = false;
                 break;
               }
             }
           }
           newBoard = newBoard.map(x => x ? x.toString(16) : null);
       }
        return { ...state, board: newBoard, gameOver: game, score: score };
>>>>>>> master
  } else {
    return state;
  }
}

export default boxesReducer;
