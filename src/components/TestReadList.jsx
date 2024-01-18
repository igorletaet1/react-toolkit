import { useSelector } from 'react-redux';
import TestReadItem from './TestReadItem';
const TestReadList = () => {
    const testReadinput = useSelector(state => state.testReadinput.testReadinput);
    //== console.log(newTest);
    return(
        <>

    <ul>
      {testReadinput.map((testReadinpu) => (
        <TestReadItem
          key={testReadinpu.id}
          {...testReadinpu}
        />
      ))}
    </ul>
        </>
    )
}
export default TestReadList