# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The context API helps with excessive prop drilling, or having to pass down many props explicitly by name through many layers of components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects used by the redux dispatch function, containing the type of action, or function being performed on state, and optionally also data to be used in that function. Reducers are functions that take a current state and an action and return a new state based on the result of that action performed on the old state. Redux requires a reducer function in order to create its store. The store is an object created by redux that contains all state data, just like a state object within a React component, and it can only be updated by calling the dispatch function with an action.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

The `redux-thunk` package allows use of asynchronous code within redux. Instead of an action creator immediately returning and dispatching an action, redux-thunk intercepts what is being returned by the action creator. If it returns an action, it dispatches as usual, but if it returns a function, called a thunk, the thunk has the dispatch function passed in as a prop, allowing for the thunk to control when the dispatch function executes, such as delaying the dispatch until an API call has resolved. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I really liked Context API because it was very easy to import context, the behavior was predictable, and it made it easy to refer to one file to find out what the types of different state properties were.