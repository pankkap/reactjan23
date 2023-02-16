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
import Post from './components/Post';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ContainerComp from './components/ContainerComp';
import UseRefDemo from './components/UseRefDemo';
import CakeCounter_1 from './components/React-Redux/CakeCounter_1';
import {Provider } from 'react-redux'
import store from './components/React-Redux/store'
import CakeCounter_2 from './components/React-Redux/CakeCounter_2';

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
            {/* <UseEffectDemo/> */}
            {/* <Post/> */}

            {/* <ClickCounter/>
            <HoverCounter/> */}
            {/* <ContainerComp/> */}
            {/* <UseRefDemo/> */}


            <Provider store={store}>
            <CakeCounter_1/>
            <hr />
            <CakeCounter_2/>
             
            </Provider>   

        </div>
    );
}


export default App;