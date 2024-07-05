// import React, { useEffect, useState } from "react";

// const ImageSlider = () => {
//   const images = [
//     "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//     "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
//     "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
//     "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
//   ];
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const i = setInterval(() => {
//       loadNextImage();
//     }, 2000);
//     return () => clearInterval(i);
//   }, []);

//   const loadPrevImage = () => {
//     setActive((active) => (active + 1) % images.length);
//   };

//   const loadNextImage = () => {
//     setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
//   };

//   return (
//     <div className="m-2 p-2 flex justify-center items-center">
//       <img
//         className="w-20 h-20 cursor-pointer"
//         alt="left-arrow"
//         src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
//         onClick={loadPrevImage}
//       />
//       <img className="w-[600px]" alt="wallpaper" src={images[active]} />
//       <img
//         className="w-20 h-20 cursor-pointer"
//         alt="right-arrow"
//         src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
//         onClick={loadNextImage}
//       />
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useEffect, useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggle];
};

const ImageSlider = () => {
  const [todos, setTodos] = useState(null);
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  // const [toggle, setToggle] = useState(false);
  const [toggle, handleToggle] = useToggle(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await fetch("https://dummyjson.com/todos");
    const json = await data.json();
    setTodos(json.todos);
  };

  const onAdd = () => {
    setTodos((prev) => [...prev, { todo: text }]);
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    setId(+e.target.id);
  };

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  return (
    <div>
      <input
        type="text"
        className="p-2  border border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" className="bg-gray-400 p-2" onClick={onAdd}>
        add
      </button>
      <button type="button" className="bg-gray-400 p-2" onClick={handleToggle}>
        {toggle ? "view" : "edit"}
      </button>
      <ul>
        {todos?.map((item) =>
          item.id === id && toggle ? (
            <input
              type="text"
              key={item.id}
              value={item.todo}
              className="border border-black"
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <li key={item.id} onClick={handleClick} id={item.id}>
              {item.todo}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ImageSlider;
