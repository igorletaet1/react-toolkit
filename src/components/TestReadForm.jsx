const TestReadForm = ({setTextRead, value, TextRead, remDel}) => {
    return(
        <>
        <input value={value} onChange={(e) => setTextRead(e.target.value)}/>
        <button onClick={TextRead}>One</button>
        <button onClick={remDel}>Two</button>
        </>
    )
}
export default TestReadForm;