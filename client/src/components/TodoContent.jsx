import { useState, useCallback, useEffect } from "react";
import { createTodo, baseUrl } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function TodoContent({ todos, categories }) {
  const dispatch = useDispatch();
  const [formTodo, setFormTodo] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    for(let i in todos){
        const box = document.getElementById(todos[i]._id)
        if(todos[i].status) {
            box.classList.add('status-done')
        }
    }
  },[todos]);

  const handleInputTodo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newFormTodo = {
      ...formTodo,
    };
    newFormTodo[field] = value;
    setFormTodo(newFormTodo);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    const element = document.getElementById("category-select")
    dispatch(createTodo(formTodo));
    setFormTodo({
      name: "",
      category: "",
    });
    element.value = ""
    
  };

  const handleCloseInput = () => {
    let element = document.getElementById("add-category");
    element.classList.add("hidden");
    let btn = document.getElementById("btn-category");
    btn.classList.remove("hidden");
  };

  const updateTodo = async (e) => {
    await axios({
      method: "PATCH",
      url: baseUrl + "/todo/" + e.target.value,
      headers: {
        access_token: sessionStorage.access_token,
      },
      data: {
        status: e.target.checked,
      },
    });
    const label = document.getElementById(e.target.value);
    if (e.target.checked) {
      label.classList.add("status-done");
    } else {
      label.classList.remove("status-done");
    }
  };
  return (
    <div className="main-content" onClick={handleCloseInput}>
      <h1>All Tasks</h1>
      <div className="form-task">
        <form onSubmit={submitTodo}>
          <input
            type="text"
            name="name"
            value={formTodo.name}
            onChange={handleInputTodo}
            placeholder="Add new task"
          />
          <select
            id="category-select"
            name="category"
            defaultValue={formTodo.category}
            onChange={handleInputTodo}>
            <option value="" disabled>
              Category
            </option>
            {categories.length > 0 ? (
              categories.map((el) => {
                return (
                  <option value={el._id} key={el._id}>
                    {el.name}
                  </option>
                );
              })
            ) : (
              <></>
            )}
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div className="tasks">
          {todos.length > 0 ? (
            todos.map((el) => {
              return (
                <div className="sub-task" key={el._id}>
                  <input
                    className="todo-box"
                    type="checkbox"
                    name={el.name}
                    value={el._id}
                    onClick={updateTodo}
                    defaultChecked={el.status}
                  />
                  <label className="form-control" id={el._id}>
                    {el.name}
                  </label>
                  <span style={{ backgroundColor: el.category.color }}>
                    {el.category.name}
                  </span>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
