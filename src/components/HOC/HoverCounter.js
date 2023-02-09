import HOCComp from './HOCComp'

function HoverCounter({count, increment}) {

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2 onMouseOver={increment}>Hover</h2>
    </div>
  )
}
export default HOCComp(HoverCounter);