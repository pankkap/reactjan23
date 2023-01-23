// class keyword introduced in ES6
// in order to create objects we used function

class Training
{
    constructor(T_name, T_duration, T_cost)
    {
        this.T_name  = T_name;
        this.T_duration = T_duration;
        this.T_cost = T_cost
    }
    display=()=>{
        console.log(`Training Name: ${this.T_name}\nTraining Duration: ${this.T_duration} hours\nTraining Cost: ${this.T_cost}`)
    }
}

let obj1 = new Training("React", 40, 3000.0)
obj1.display();
 



// ES5 way to create Class
// function Training1()
// {
//     this.T_name = "Javascript";
//     this.T_duration = "40";
//     this.T_cost = 3000;

//     this.display = function()
//     {
//         console.log(this.T_name)
//     }
// }