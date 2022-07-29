import users from "../data/users";
import { createContext, useReducer } from "react";

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.floor(Math.random() * 100)
    return{
      ...state,
      users: [...state.users, user]
    }
  },
  updateUser(state, action) {
    const updated = action.payload;
    return{
      ...state,
      users: state.users.map(u => u.id === updated.id ? updated : u)
    }
  },
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.filter((u) => u.id !== user.id),
    };
  }
};

const initialState = { users };

const UserContext = createContext({});

export const UsersProvider = (props) => {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
