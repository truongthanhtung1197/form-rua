const { createStore } = window.Redux;
const initialState = JSON.parse(localStorage.getItem("list_hobby")) || []
//reducer
const hoppyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
};
//store
const store = createStore(hoppyReducer);

//--------------------------------------------------------------------------

//render redux hobby list
const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;
  const ulElement = document.querySelector("#hobbyListId");
  if (!ulElement) return;

  //reset content của ul
  ulElement.innerHTML = "";

  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");
    //set nội dung cho thẻ "li"
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

//render initial hobby list
const initialHobbyList = store.getState();
renderHobbyList(initialHobbyList);

//handle form submit

const hobbyFormElement = document.querySelector("#hobbyFormId");
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const hobbyTextElement = document.querySelector("#hobbyTextId");

    if (!hobbyTextElement) return;

    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);

    hobbyFormElement.reset();
  };

  //when state change
  store.subscribe(() => {
    const newListHobby = store.getState();
    renderHobbyList(newListHobby);
    // save local storage
    localStorage.setItem("list_hobby", JSON.stringify(newListHobby));
    console.log(newListHobby);
  });

  hobbyFormElement.addEventListener("submit", handleFormSubmit);
}
