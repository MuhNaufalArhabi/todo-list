import { createCategory } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";

export default function Sidebar({ categories }) {
  const dispatch = useDispatch();
  const handleAddCategory = (e) => {
    e.preventDefault();
    let element = document.getElementById("add-category");
    element.classList.remove("hidden");
    let btn = document.getElementById("btn-category");
    btn.classList.add("hidden");
  };

  const handleInputCategory = (e) => {
    let value = e.target.value;
    if (e.key === "Enter") {
      dispatch(createCategory(value));
      let element = document.getElementById("add-category");
      element.classList.add("hidden");
      let btn = document.getElementById("btn-category");
      btn.classList.remove("hidden");
    }
  };


  return (
    <div class="sidebar">
      <div class="sidebar-item">
        <div class="category active">All Tasks</div>
        {categories.length > 0 ? (
          categories.map((el) => {
            return (
              <div class="category" key={el._id}>
                {el.name}
              </div>
            );
          })
        ) : (
          <></>
        )}
        <div className="category" id="btn-category">
          <a href="#" onClick={handleAddCategory}>
            + New Category
          </a>
        </div>
        <div className="category hidden" id="add-category">
          <input
            id="category-input"
            type="text"
            placeholder="New Category"
            onKeyUp={handleInputCategory}
          />
        </div>
      </div>
    </div>
  );
}
