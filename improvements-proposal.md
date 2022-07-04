Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

When it comes to fetching data from an API, we wouldn't want to fetch all of the blog posts from the API. Instead, we would prefer an API that has the implementation of pagination to let us fetch only the page we want. We can use builtin useEffect hook to fetch the blog posts we want. We can also fetch total number of posts to show pagination and page count to the user. We would give the number of blog posts we want to fetch along with the first post we want to fetch to prevent fetching unnecessary data.

Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

According to my research on internet, using random key generators has some disadvantages. Using a random random generator for keys forces the the reconciliation process to always view every element in the array as "new" or "changed", which forces it to rerender - and that can cause some nasty side effects.
