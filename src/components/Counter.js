const Counter = (props) => {
    return (
        <div>
            <button onClick={props.onPlusClick}>+</button>
            <p>{props.count}</p>
            <button onClick={props.onMinusClick}>-</button>
        </div>
    )
}
export default Counter
