import React, { useState, useEffect, useMemo, FC } from 'react';
interface Props {
  initialName?: string;
}

/**
 *
 * @param param
 * 重点：1.延迟状态初始化 2.副作用依赖  3.自定义钩子  4.状态提升 5.useRef and useEffect
 */
// const useLocalStorageState=(key:string,initialValue:any='')=>{
//   const [state,setState]=useState(()=>window.localStorage.getItem(key)||initialValue)
//   useEffect(()=>{
//     window.localStorage.setItem(key,initialValue)
//   },[key,state])
//   return [state,setState]
// }
// const Greet=({initialName=''}:Props)=>{
//   const [name,setName]=useLocalStorageState('name',initialName)

//   function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       {console.log('render')}
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input onChange={handleChange} id="name" value={name}/>
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )

// }
//---------------------------------------------------------------------------

// const Display=(props)=>{
//   const {name,animal}=props;
//   return <div> name:{name}---animal:{animal}</div>
// }

// const Name=(props)=>{
//   const {name,onNameChange}=props;
//   return  <div>
//   <label htmlFor="name">Name: </label>
//   <input id="name" value={name} onChange={onNameChange} />
// </div>
// }
// const Animal=(props)=>{
//   console.log('render')
//   const {animal,onAnimalChange}=props;
//   return  <div>
//   <label htmlFor="name">animal: </label>
//   <input id="name" value={animal} onChange={onAnimalChange} />
// </div>
// }
// const App=()=>{
//   const [name,setName]=useState('');
//   const [animal,setAnimal]=useState('');
//   return <>
//     <Name name={name} onNameChange={(e)=>setName(e.target.value)}/>
//     <Animal name={animal} onAnimalChange={(e)=>setAnimal(e.target.value)}/>
//     <Display name={name} animal={animal}/>
//   </>
// }

//--------------------------------------------------------------------------------
/**
 * 井字游戏
 */
// function Board() {
//   const [squares, setSquares] = React.useState(Array(9).fill(null))

//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       return
//     }
//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     setSquares(Array(9).fill(null))
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }
// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// function calculateNextValue(squares) {
//   const xSquaresCount = squares.filter(r => r === 'X').length
//   const oSquaresCount = squares.filter(r => r === 'O').length
//   return oSquaresCount === xSquaresCount ? 'X' : 'O'
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
// const App=()=>{
//   const [name,setName]=useState('');
//   const [animal,setAnimal]=useState('');
//   return <>
//     <Game/>
//   </>
// }

//-----------------------------------------------------------------------------
// function MyDiv() {
//   const myDivRef = React.useRef()
//   React.useEffect(() => {
//     const myDiv = myDivRef.current
//     // myDiv is the div DOM node!
//     console.log(myDiv)
//   }, [])
//   return <div ref={myDivRef}>hi</div>
// }
// const App=()=>{
//   return <>
//     <MyDiv/>
//   </>
// }

////---------------------------------------------------------------------------------
// http请求
// const App=()=>{
// React.useEffect(async () => {
//   const result = await doSomeAsyncThing()
//   // do something with the result
// })

// React.useEffect(() => {
//   async function effect() {
//     const result = await doSomeAsyncThing()
//     // do something with the result
//   }
//   effect()
// })

// React.useEffect(() => {
//   doSomeAsyncThing().then(result => {
//     // do something with the result
//   })
// })
// return <>
// </>
// }

//------------------------------------------------------------------------------
// useMemo 和 useCallback
const App = () => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  // 如果不用useMemo ，当value改变时，也会触发expensive函数执行
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h4>
        {count}-{val}-{expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div>
    </div>
  );
};
export default App;
