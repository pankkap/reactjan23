
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './components/Message';
import StateDemo from './components/State Management/StateDemo';
import Summary from './components/Summary';
import StateObject from './components/State Management/StateObject'
import PassStateAsProps from './components/State Management/PassStateAsProps';
import Todo from './components/State Management/Todo';

function App(){
    return (
        <div className='container'>
            {/* <StateDemo/> */}
            {/* <StateObject/> */}
            {/* <PassStateAsProps/> */}
            <Todo/>
        </div>
    );
}


export default App;