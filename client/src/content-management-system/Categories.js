import React, { useState, useEffect } from "react";
import axios from "axios";
import useOnclickOutside from "react-cool-onclickoutside";

const url =
  process.env.NODE_ENV === `production`
    ? `/api/categories`
    : "http://localhost:5000/api/categories";

const Category = (props) => {
  const [isHover, setHover] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(props.category.name);

  const ref = useOnclickOutside(() => {
    if (isEditing) {
      setEditing(false);
      axios
        .post(url + "/set", { id: props.category.category_id, name: name })
        .then((res) => {
          if (res.status !== 200)
            alert("Įvyko klaida susisiekiant su duomenų baze!");
        });
    }
  });

  return (
    <div
      ref={ref}
      style={{ margin: "8px", padding: "8px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        "cms-category-item border center mx-1 " +
        (isHover ? "cms-secondary-light" : "cms-secondary")
      }
      key={props.category.category_id}
    >
      {isEditing ? (
        <input
          type="text"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            outline: "none",
            border: "none",
            borderBottom: "1px solid",
            width: "auto",
            background: "transparent",
            textAlign: "center",
            fontSize: "16px",
          }}
          size="10"
        />
      ) : (
        name
      )}
      <button
        hidden={!isHover || isEditing}
        onClick={() => {
          setEditing(true);
        }}
      >
        edit
      </button>
    </div>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + "/get").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="w-50p flex-flow">
      {categories.map((category) => (
        <Category key={category.category_id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
