## Question 1

If the data were instead to come from an API, you would need to make a call to the server on loading page using a useEffect hook with an empty array or with page number in the dependencies array, so that the data is retrieved on initial loading and then in the future only when the page is changed and additional blog posts are needed, such as when the user presses the forward or back page buttons and a new state is set. 

You might also include a clean up function in the useEffect hook case in case the component is unmounted before the data is received from the server to prevent memory leaks or race conditions. You could also abstract all this further into a custom hook for dealing with server calls.  

 You would also need to make additional decisions such as about how many posts to call the server for at a time and whether or not you send the full text or just an index and then send the whole post later when needed for the reader. 

## Question 2

React keys should be unique in their own list but still persist over time given the same inputs, and should not be randomly generated each render, which is the case when using nanoid. React uses keys to identify changes and assist with determining when to rerender components so ids should always be consistent and stable values or it can cause unpredictable and unnecessary rerendering. 

In nanoid's own documentation, they state that "There’s currently no correct way to use nanoid for React key prop since it should be consistent among renders." 