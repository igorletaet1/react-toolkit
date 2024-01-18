const NewInputTest = ({value ,newText, textText}) => {

return(
    <>
    {/* <input type="text" value={value} onChange={(e) => newText(e.target.value)}/>
    <button onClick={textText}>Add todo</button> */}
       <input
        placeholer='new todo'
        value={value}
        onChange={(e) => newText(e.target.value)}
      />
      <button onClick={textText}>Add todo</button>
    </>
)
}

export default NewInputTest