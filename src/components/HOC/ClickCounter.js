import HOCComp from './HOCComp'

function ClickCounter({count, increment}) {

    // let {count, increment} = props;
  return (
    <div>
        <h2>Counter: {count}</h2>
      <button className='btn btn-primary' onClick={increment}>Click</button>

    </div>
  )
}
export default HOCComp(ClickCounter);