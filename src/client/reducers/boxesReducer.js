// import * as types from '../actions/actionTypes';

const initialState = {
  score: 0,
  gameOver: false,
  board: new Array(16).fill(null),
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

/*
board = [0,  1,  2,  3,
         4,  5,  6,  7,
         8, 9, 10, 11,
         12, 13, 14, 15]
*/

const boxesReducer = (state = initialState, action) => {
  if (action.payload === 'UP') {
<<<<<<< HEAD
    let game = false;
    let score = state.score;
    let newBoard = [...state.board];
    let legal = false;
    let columns = [[], [], [], []];
    newBoard.forEach((x) => {
      columns[x % 4].push(x);
    });
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (columns[i][j] === columns[i][j + 1]) {
          legal = true;
          break;
=======
      let game = false;
      let score = state.score;
      let newBoard = [...state.board];
      let legal = false;
      let columns = [[], [], [], []];
      newBoard.forEach(x => {
        columns[x % 4].push(x);
      });
      // check if move is legal
        // If doubles, legal
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
          if(columns[i][j] === columns[i][j + 1] && columns[i][j] !== null){
            legal = true;
            break;
          }
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1
        }
      }
      if (legal) {
        break;
      }
    }
    // If have column count of 1, 2, or 3, legal
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (columns[i].length % 4) {
          legal = true;
          break;
        }
      }
<<<<<<< HEAD
    }
    if (legal) {
      // if legal
      //check for doubles
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          // combine doubles
          // update score
          if (columns[i][j] === columns[i][j + 1]) {
            let pos = i + 4 * j;
            newBoard[pos] += newBoard[pos + 4];
            newBoard[pos + 4] = null;
            score += newBoard[pos];
          }
        }
      }
=======
          // If have column count of 1, 2, or 3, legal
          // Make this actual column count
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(!rows[i].reduce((a, c) => a && c)) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
        // if legal
          //check for doubles
          for(let i = 0; i < 4; i++){
            for(let j = 0; j < 3; j++){
              // combine doubles
            // update score
              if(newBoard[i + 4*j] === newBoard[i + 4*j + 4] && newBoard[i + 4*j] !== null){
                let pos = i + 4*j;
                newBoard[pos] += newBoard[pos + 4];
                newBoard[pos + 4] = null;
                score += newBoard[pos];
              }
            }
          }
            
          // move everything up that can move up
            // nullify after move.
            for(let i = 0; i < 4; i++){
              for(let j = 1; j < 4; j++){
                  let pos = i + 4*j;
                  let np = pos;
                  if(newBoard[pos]){
                    while(np > 3 && (!newBoard[np - 4])){
                      np -= 4;
                    }
                  }
                  if(np !== pos){
                    newBoard[np] = newBoard[pos];
                    newBoard[pos] = null;
                  }
              }
            }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        } else {
           // if not legal check if L/R is legal
          // if not game over
          let rows = [[], [], [], []];
            newBoard.forEach(x => {
              rows[x >> 2].push(x);
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < 3; j++){
                if(rows[i][j] === rows[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1

      // move everything up that can move up
      // nullify after move.
      for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
          let pos = i + 4 * j;
          let np = pos;
          if (newBoard[pos]) {
            while (np > 3 && !newBoard[np - 4]) {
              np -= 4;
            }
          }
          if (np !== pos) {
            newBoard[np] = newBoard[pos];
            newBoard[pos] = null;
          }
        }
<<<<<<< HEAD
      }
      // add random 2 or 4 in empty square
      const empty = [];
      newBoard.forEach((x, i) => {
        if (!x) {
          empty.push(i);
        }
      });
      let loc = Math.floor(Math.random() * empty.length);
      newBoard[loc] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      // if not legal check if L/R is legal
      // if not game over
      let rows = [[], [], [], []];
      newBoard.forEach((x) => {
        rows[x >> 2].push(x);
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (rows[i][j] === rows[i][j + 1]) {
            game = false;
=======
        return { ...state, board: newBoard, gameOver: game, score: score };
    } else if (action.payload === 'DOWN') {
      
      let game = false;
      let score = state.score;
      let newBoard = [...state.board];
      let legal = false;
      let columns = [[], [], [], []];
      newBoard.forEach(x => {
        columns[x % 4].push(x);
      });
      // check if move is legal
        // If doubles, legal
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
          if(columns[i][j] === columns[i][j + 1]){
            legal = true;
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1
            break;
          }
        }
        if (!game) {
          break;
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
    return { ...state, board: newBoard, gameOver: game, score: score };
  } else if (action.payload === 'DOWN') {
    let game = false;
    let score = state.score;
    let newBoard = [...state.board];
    console.log('after initializing newBoard: ', newBoard);
    let legal = false;
    let columns = [[], [], [], []];
    newBoard.forEach((x) => {
      columns[x % 4].push(x);
    });
    console.log('after loading columns: ');
    console.log(columns[0]);
    console.log(columns[1]);
    console.log(columns[2]);
    console.log(columns[3]);
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
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
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (columns[i].length % 4) {
          legal = true;
          break;
        }
      }
    }
    if (legal) {
      console.log('determined legal move');
      console.log('newBoard is now: ', newBoard);
      // if legal
      //check for doubles
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          // combine doubles
          // update score
          if (columns[i][j] === columns[i][j + 1]) {
            console.log('we should not be here in doubles reducer');
            console.log('but if we are, newBoard is: ', newBoard);
            let pos = i + 4 * j;
            newBoard[pos + 4] += newBoard[pos];
            newBoard[pos] = null;
            score += newBoard[pos + 4];
          }
        }
      }
=======
          // If have column count of 1, 2, or 3, legal
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(!columns[i].reduce((a, c) => a && c)) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
     
       // if legal
          //check for doubles
          for(let i = 0; i < 4; i++){
            for(let j = 0; j < 3; j++){
              // combine doubles
            // update score
              if(newBoard[4*j + i] === newBoard[4*j + 4 + i] && newBoard[4*j + i] !== null){
                let pos = i + 4*j;
                newBoard[pos + 4] += newBoard[pos];
                newBoard[pos] = null;
                score += newBoard[pos + 4];
              }
            }
          }
            
          // move everything down that can move down
            // nullify after move.
            for(let i = 0; i < 4; i++){
              for(let j = 2; j >=0; j--){
                  let pos = i + 4*j;
                  let np = pos;
                  if(newBoard[pos]){
                    while(np < 12 && (!newBoard[np + 4])){
                      np += 4;
                    }
                  }
                  if(np !== pos){
                    newBoard[np] = newBoard[pos];
                    newBoard[pos] = null;
                  }
              }
            }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        } else {
           // if not legal check if L/R is legal
          // if not game over
          let rows = [[], [], [], []];
            newBoard.forEach(x => {
              rows[x >> 2].push(x);
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < 3; j++){
                if(rows[i][j] === rows[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1

      // move everything down that can move down
      // nullify after move.
      for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
          let pos = i + 4 * j;
          let np = pos;
          if (newBoard[pos]) {
            console.log('at position: ', pos);
            console.log('on board: ', newBoard);
            while (np < 12 && !newBoard[np + 4]) {
              np += 4;
            }
          }
          if (np !== pos) {
            console.log("if we're moving stuff, we are here:", newBoard);
            newBoard[np] = newBoard[pos];
            newBoard[pos] = null;
            console.log('and end up here:', newBoard);
          }
        }
<<<<<<< HEAD
      }
      // add random 2 or 4 in empty square
      const empty = [];
      newBoard.forEach((x, i) => {
        if (!x) {
          empty.push(i);
        }
      });
      let loc = Math.floor(Math.random() * empty.length);
      newBoard[loc] = 2 + 2 * Math.floor(Math.random() * 2);
      console.log('added random: ', newBoard);
    } else {
      // if not legal check if L/R is legal
      // if not game over
=======
        return { ...state, board: newBoard, gameOver: game, score: score };
  } else if (action.payload === 'LEFT') {
      let game = false;
      let score = state.score;
      let newBoard = [...state.board];
      let legal = false;
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1
      let rows = [[], [], [], []];
      newBoard.forEach((x) => {
        rows[x >> 2].push(x);
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (rows[i][j] === rows[i][j + 1]) {
            game = false;
            break;
          }
        }
        if (!game) {
          break;
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
    console.log('returning to state: ', newBoard);
    return { ...state, board: newBoard, gameOver: game, score: score };
  } else if (action.payload === 'LEFT') {
    let game = false;
    let score = state.score;
    let newBoard = [...state.board];
    let legal = false;
    let rows = [[], [], [], []];
    newBoard.forEach((x) => {
      rows[x >> 4].push(x);
    });
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (rows[i][j] === rows[i][j + 1]) {
          legal = true;
          break;
        }
      }
      if (legal) {
        break;
      }
    }
    // If have row count of 1, 2, or 3, legal
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (rows[i].length % 4) {
          legal = true;
          break;
        }
      }
    }
    if (legal) {
      // if legal
      //check for doubles
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          // combine doubles
          // update score
          if (rows[i][j] === rows[i][j + 1]) {
            let pos = 4 * i + j;
            newBoard[pos] += newBoard[pos + 1];
            newBoard[pos + 1] = null;
            score += newBoard[pos];
          }
        }
      }
=======
          // If have row count of 1, 2, or 3, legal
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(!rows[i].reduce((a, c) => a && c)) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
        // if legal
          //check for doubles
          for(let i = 0; i < 4; i++){
            for(let j = 0; j < 3; j++){
              // combine doubles
            // update score
              if(newBoard[4*i + j] === newBoard[4 * i + j + 1] && newBoard[4*i + j] !== null){
                let pos = 4*i + j;
                newBoard[pos] += newBoard[pos + 1];
                newBoard[pos + 1] = null;
                score += newBoard[pos];
              }
            }
          }
            
          // move everything left that can move left
            // nullify after move.
            for(let i = 0; i < 4; i++){
              for(let j = 1; j < 4; j++){
                  let pos = 4*i + j;
                  let np = pos;
                  if(newBoard[pos]){
                    while(np % 4 && (!newBoard[np - 1])){
                      np--;
                    }
                  }
                  if(np !== pos){
                    newBoard[np] = newBoard[pos];
                    newBoard[pos] = null;
                  }
              }
            }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        } else {
           // if not legal check if up/down is legal
          // if not game over
          let columns = [[], [], [], []];
            newBoard.forEach(x => {
              columns[x % 4].push(x);
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < 3; j++){
                if(columns[i][j] === columns[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1

      // move everything left that can move left
      // nullify after move.
      for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
          let pos = 4 * i + j;
          let np = pos;
          if (newBoard[pos]) {
            while (np % 4 && !newBoard[np - 1]) {
              np--;
            }
          }
          if (np !== pos) {
            newBoard[np] = newBoard[pos];
            newBoard[pos] = null;
          }
        }
      }
      // add random 2 or 4 in empty square
      const empty = [];
      newBoard.forEach((x, i) => {
        if (!x) {
          empty.push(i);
        }
      });
      let loc = Math.floor(Math.random() * empty.length);
      newBoard[loc] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      // if not legal check if up/down is legal
      // if not game over
      let columns = [[], [], [], []];
      newBoard.forEach((x) => {
        columns[x % 4].push(x);
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (columns[i][j] === columns[i][j + 1]) {
            game = false;
            break;
          }
        }
        if (!game) {
          break;
        }
      }
<<<<<<< HEAD

      if (game) {
        for (let i = 0; i < 4; i++) {
          if (columns[i].length % 4) {
            game = false;
            break;
          }
        }
      }
    }
    return { ...state, board: newBoard, gameOver: game, score: score };
  } else if (action.payload === 'RIGHT') {
    let game = false;
    let score = state.score;
    let newBoard = [...state.board];
    let legal = false;
    let rows = [[], [], [], []];
    newBoard.forEach((x) => {
      rows[x >> 4].push(x);
    });
    // check if move is legal
    // If doubles, legal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (rows[i][j] === rows[i][j + 1]) {
          legal = true;
          break;
        }
      }
      if (legal) {
        break;
      }
    }
    // If have row count of 1, 2, or 3, legal
    if (!legal) {
      for (let i = 0; i < 4; i++) {
        if (rows[i].length % 4) {
          legal = true;
          break;
        }
      }
    }
    if (legal) {
      // if legal
      //check for doubles
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          // combine doubles
          // update score
          if (rows[i][j] === rows[i][j + 1]) {
            let pos = 4 * i + j;
            newBoard[pos + 1] += newBoard[pos];
            newBoard[pos] = null;
            score += newBoard[pos + 1];
          }
        }
      }
=======
          // If have row count of 1, 2, or 3, legal
        if(!legal){
          for(let i = 0; i < 4; i++){
            if(!rows[i].reduce((a, c) => a && c)) {
              legal = true;
              break;
            }
          }
        }
        if (legal) {
        // if legal
          //check for doubles
          for(let i = 0; i < 4; i++){
            for(let j = 0; j < 3; j++){
              // combine doubles
            // update score
              if(newBoard[4*i + j] === newBoard[4*i + j + 1] && newBoard[4*i + j] !== null){
                let pos = 4*i + j;
                newBoard[pos + 1] += newBoard[pos];
                newBoard[pos] = null;
                score += newBoard[pos + 1];
              }
            }
          }
            
          // move everything right that can move right
            // nullify after move.
            for(let i = 0; i < 4; i++){
              for(let j = 2; j >= 0; j--){
                  let pos = 4*i + j;
                  let np = pos;
                  if(newBoard[pos]){
                    while((np % 4) !== 3 && (!newBoard[np + 1])){
                      np++;
                    }
                  }
                  if(np !== pos){
                    newBoard[np] = newBoard[pos];
                    newBoard[pos] = null;
                  }
              }
            }
          // add random 2 or 4 in empty square
          let empty = [];
          for(let i = 0; i < 16; i++){
            if(!newBoard[i]){
              empty.push(i);
            }
          }
          let loc = Math.floor(Math.random() * empty.length);
          newBoard[empty[loc]] = 2 + 2 * Math.floor(Math.random() * 2);
        } else {
           // if not legal check if Up/Down is legal
          // if not game over
          let columns = [[], [], [], []];
            newBoard.forEach(x => {
              columns[x % 4].push(x);
            });
            game = true;
            for(let i = 0; i < 4; i++){
              for(let j = 0; j < 3; j++){
                if(columns[i][j] === columns[i][j + 1]){
                  game = false;
                  break;
                }
              }
              if(!game) {
                break;
              } 
            }
>>>>>>> 6d0761c4926e7147585d791192820d6ce9a4a7f1

      // move everything right that can move right
      // nullify after move.
      for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
          let pos = 4 * i + j;
          let np = pos;
          if (newBoard[pos]) {
            while (np % 4 !== 3 && !newBoard[np + 1]) {
              np++;
            }
          }
          if (np !== pos) {
            newBoard[np] = newBoard[pos];
            newBoard[pos] = null;
          }
        }
      }
      // add random 2 or 4 in empty square
      const empty = [];
      newBoard.forEach((x, i) => {
        if (!x) {
          empty.push(i);
        }
      });
      let loc = Math.floor(Math.random() * empty.length);
      newBoard[loc] = 2 + 2 * Math.floor(Math.random() * 2);
    } else {
      // if not legal check if Up/Down is legal
      // if not game over
      let columns = [[], [], [], []];
      newBoard.forEach((x) => {
        columns[x % 4].push(x);
      });
      game = true;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
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
    return { ...state, board: newBoard, gameOver: game, score: score };
  } else {
    return state;
  }
};

export default boxesReducer;
