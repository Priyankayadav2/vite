function Counter({count,reset}){
    return (
        <div>
            <h1>{count}</h1>
            <h1>Counter</h1>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;