const api_url="https://jsonplaceholder.typicode.com/users"


function getApiData(url)
{
    fetch(url)
    .then(res=>res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
}

getApiData(api_url)