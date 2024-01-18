import { useSelector } from 'react-redux';
import NewItem from './NewItem';
const NewTestList = () => {

    const newTest = useSelector(state => state.newTest.newTest);
    // console.log(newTest);
    return(
        <>

    <ul>
      {newTest.map((newTes) => (
        <NewItem
          key={newTes.id}
          {...newTes}
        />
      ))}
    </ul>
        </>
    )
}
export default NewTestList