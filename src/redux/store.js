// // import { configureStore } from '@reduxjs/toolkit';
// // import contactsReducer from './contactsSlice';
// // import filtersReducer from './filtersSlice';
// // import storage from 'redux-persist/lib/storage';
// // import { persistReducer, persistStore } from 'redux-persist';
// // import { combineReducers } from 'redux';

// // const persistConfig = {
// //     key: 'root',
// //     storage,
// //     whitelist: ['contacts'],
// // };

// // const rootReducer = combineReducers({
// //     contacts: contactsReducer,
// //     filters: filtersReducer,
// // });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const store = configureStore({
// //     reducer: persistedReducer,
// //     middleware: getDefaultMiddleware =>
// //         getDefaultMiddleware({
// //             serializableCheck: false,
// //         }),
// // });

// // export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filtersReducer } from './filtersSlice';

// // 
// // import { combineReducers } from 'redux';



// // const rootReducer = combineReducers({
// //     contacts: contactsReducer,
// //     filters: filtersReducer,
// // });

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filters: filtersReducer,
//     },
//     devTools: import.meta.evt.MODE === 'development'
// });


// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    devTools: import.meta.env.MODE === 'development',
});
