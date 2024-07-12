// import React, { createContext, useContext } from 'react'

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [currentUser, setCurrentUser] = useState('');
//     const [items, setItems] = useState([]);

//     const login = () => {
//         isAuthenticated(true);
//         setCurrentUser('rohan');
//     }

//     const logout = () => {
//         setIsAuthenticated(false);
//         setCurrentUser('');
//     }

//     const addItem = (item) => {
//         setItems([...items, item]);
//     }

//     const removeItem = (item) => {
//         setItems(items.filter(i => i !== item));
//     }

//     const clearItems = () => {
//         setItems([]);
//     };

//     return (
//         <AppContext.Provider value={{ isAuthenticated, currentUser, items, login, logout, addItem, removeItem, clearItems }}>
//             {children}
//         </AppContext.Provider>
//     );
// }

// const useAppContext = () => {
//     return useContext(AppContext);
// };

// const MainApp = () => {

//     const { isAuthenticated, currentUser, login, logout, items, addItem, removeItem, clearItems } = useAppContext();
//     const [inputValue, setInputValue] = useState('');

//     const handleAdd = () => {
//         if (inputValue.trim()) {
//             addItem(inputValue.trim());
//             setInputValue('');
//         }
//     };
//     <div>
//         <h1>use Context Hook</h1>
//         <h2>Hello Rohan Dutt</h2>
//         <h2>Component 2</h2>
//         <h2>Component 3</h2>
//         <h2>Component 4</h2>
//         <h2>Component 5</h2>
//         <p>Hi Rohan Dutt again, are you in Agra?</p>
//         <div>
//             <p id='current-user'>Current user: {currentUser}, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
//             <button id="login-btn" onClick={login}>Login</button>
//             <button id="signout" onClick={logout}>Signout</button>
//         </div>
//         <div>
//             <input
//                 id='shopping-input'
//                 type='text'
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button onClick={handleAdd}>Add</button>
//             <button id="clear-list" onClick={clearItems}>Clear List</button>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index} id={`item-${item}`}>
//                         {item}
//                         <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// }


// const App = () => {
//     return (
//         <AppProvider>
//             <MainApp></MainApp>
//         </AppProvider>
//     )
// }

// export default App

import React, { createContext, useContext, useState } from 'react';

// Create a Context


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [items, setItems] = useState([]);

  const login = () => {
    setIsAuthenticated(true);
    setCurrentUser('rohan');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, currentUser, items, login, logout, addItem, removeItem, clearItems }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

const MainApp = () => {
  const { isAuthenticated, currentUser, login, logout, items, addItem, removeItem, clearItems } = useAppContext();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>use Context Hook</h1>
      <h2>Hello Rohan Dutt</h2>
      <h2>Component 2</h2>
      <h2>Component 3</h2>
      <h2>Component 4</h2>
      <h2>Component 5</h2>
      <p>Hi Rohan Dutt again, are you in Agra?</p>
      
      <div>
        <p id="current-user">Current user: {currentUser}, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
        <button id="login-btn" onClick={login}>Login</button>
        <button id="signout" onClick={logout}>Signout</button>
      </div>
      
      <div>
        <input
          id="shopping-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button id="clear-list" onClick={clearItems}>Clear List</button>
        <ul>
          {items.map((item, index) => (
            <li key={index} id={`item-${item}`}>
              {item}
              <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const APP = () => {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
};

export default APP;
