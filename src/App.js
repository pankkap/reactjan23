// Linking to External CSS
import './App.css';
// Creating Image Variable
import myLogo from './images/banner.jpg'


// React JSX

// String JSX
let name = "React Training";

// Integer JSX
let course_duration = 40;

// Boolean JSX
let is_Join = false;

// Object JSX
let address = {
    Hno:123,
    city:"Mathura",
    state:"Uttrapradesh"
}

// Array JSX
let metro_cities = ["Delhi", "Mumbai", "Banglore"]

// Render HTML Code
let htmlCode = (
    <>
        <h1>This is an Example of Multiple Elements</h1>
        <h2>Render Multiple Data</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex, incidunt minus eveniet ratione magnam explicabo. Eligendi eius illo ipsum.</p>
        <a href="https://beta-labs.in">Beta-Labs</a>
    </>
);

// Internal Styling
let mystyling = {
    border:'2px solid blue',
    borderRadius:'20px',
    color:'orange',
    fontFamily:'arial',
    padding:'10px 20px',
    margin:'10px'
}



function App(){
    return (
        <>
            <div id="centerImg">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png"} alt="" />
            </div>
            <h1>This is App Component</h1>
            
            {/* Simple JSX Expression */}
            {/* {} is used to execute jsx code */}
            {17*5-10/2+35} 
            {<br/>}
            {<span style={{color:'red', fontSize:'30px'}}>{name}</span>}
            {<br/>}
            Duration of React Training  = {course_duration}
            <br />
            {is_Join ? "I joined React Training" : "Not Joined"}
            <br />
            {address.city} - {address.state}

            {/* Array Accessing */}
            
            <ul>
            {
                metro_cities.map(function(i){
                    return <li key={i} style={mystyling}>{i}</li>
                })
            }
            </ul>
            <br />


            {htmlCode}

        </>
    );
}


export default App;