# redux 
- state managment tool
- it is responsible for storing and updating state
- and for **updating the state** redux uses **reducer funct()**
- handle state at a global level

# 
- at any point of time component wants to interacts with state, it can directly interat with **global Store** and fetch the state back, if u want to update then it can directly update in the global store as well 

# redux
- it can exist without react 
- it can exist with other frameworks like **Angular, vue** etc for state management 
- it's a js library for good state management
- it's simple but not as simple as zustand 

# reducer
- it's a programming concepts
- it's a way to write code
- concept of **reducer** exist without redux as well 
- reducer is a function 
- it just that  we implement this function in a specific way 
- reducer func() takes 2 params
- 1. object to be updated
- 2. action (object): it is nothing but a label using which we can decide how to update the object 
- **inside func()** : we write the algo to update the incoming object 
- **output** : updated object 
- this can prefered with obj but we can use with others as well 
- we can have **multiple** reducer

# action
- action has 2 keys ( type and payload)
- action.type: which algo to use
- action.payload: any input required for the algo to work. 
- payload: number, obj, null , undefined

# redux : create store(reducer func as an aragument, initial state)
- create store func(), creates a common global store to keep the states 
- redux doesn't dependent on context API
- redux is indepent of react 
- context API is react concept

# npm i redux
- it is cure redux library which is independent of react

# npm i react-redux
- here to integrate redux with react 



--------------------------------------------------------------
# constant.js, actionCreator.js
- add all the **type** in the constant.js file, in case of any change in name and all, just change in one file
- add all the **payload** in the actionCreator.js file, in case of any other payload type like number, obj, null etc. so just call the func with that.
- function that returns an action obj are called **actionCreator**.

# redux tool-kit





