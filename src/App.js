
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './components/Message';
import Summary from './components/Summary';


let names = ["John", "Peter", "Robert"]

function App(){

    // Event Handling
    function reverseNames(){
        // alert("Welcome to Event Handling")
        names.reverse();
        console.log(names);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);   
    }


    return (
        <div className='container'>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {
            names.map(function(name, i){
                return (
                    <tr key={i}>
                        <Summary index={i} name={name} callback={reverseNames}/>
                    </tr>
                )
            })
        }
        </tbody>
        </table>
        </div>
    );
}


export default App;