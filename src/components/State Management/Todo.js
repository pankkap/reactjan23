import React, { useState } from "react";

export default function ToDo() {
  const [username, setusername] = useState("Raghav");
  const [todoitems, settodoitems] = useState([
    { action: "Buy Fruits", done: false },
    { action: "Meeting with HOD", done: false },
    { action: "Go for Movie @6Pm", done: true },
    { action: "Submit Assignment", done: false },
  ]);
  const [newItemText, setnewItemText] = useState("");

  function createNewTodo() {
    // console.log(newItemText);
          settodoitems([...todoitems, { action: newItemText, done: false }]);
        setnewItemText("");
  }
   
  function toggleTodo(todo)
  {
      settodoitems(
        todoitems.map((item)=>
        todo.action === item.action? {...item,done:!item.done }:item
        )

      );
  }


  function todoTableRows(doneValue) {
    return todoitems.filter((item)=>item.done ===doneValue)
    .map((item, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-white bg-primary text-center p-2">
            {username}'s TODO List ({todoitems.filter((t) => !t.done).length}&nbsp;
            Pending Tasks)
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <input
            type="text"
            value={newItemText}
            className="form-control"
            onChange={(e) => setnewItemText(e.target.value)}
            placeholder="Enter new Todo"
          />
          <button className="btn btn-primary mt-2" onClick={createNewTodo}>
            Add
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="offset-md-2 col-md-8">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Done | Not Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(false)}</tbody>
          </table>
        </div>
      </div>

      <div className="row mt-4">
        <div className="offset-md-2 col-md-8">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Done | Not Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(true)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
