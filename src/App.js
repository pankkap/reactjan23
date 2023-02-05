import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './components/Message';
import StateDemo from './components/State Management/StateDemo';
import Summary from './components/Summary';
import StateObject from './components/State Management/StateObject'
import PassStateAsProps from './components/State Management/PassStateAsProps';
import Todo from './components/State Management/Todo';
import StateMangInClass from './components/State Management/StateMangInClass';
import LifeCycle from './components/State Management/LifeCycle';
import UseEffectDemo from './components/State Management/UseEffectDemo';


var show = false
function App(){
    return (
        <div className='container'>
            {/* <StateDemo/> */}
            {/* <StateObject/> */}
            {/* {
                show && <PassStateAsProps/>
            }
            <Todo/> */}
            {/* <StateMangInClass T_name="ReactJS" T_Duration={40}> </StateMangInClass> */}

            {/* <LifeCycle/> */}
            <UseEffectDemo/>
        </div>
    );
}


export default App;