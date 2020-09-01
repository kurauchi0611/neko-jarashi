import React from "react";
import App from "../components/App";
import { entriesPosts } from "../plugins/contentful";
const promise = entriesPosts();

export default function About() {
  // const [entries, setEntries] = React.useState([]);

  // async function fetchEntries() {
  // const data = await client.getEntries();
  // const items = data.items;
  // setEntries(items);
  // console.log(data.items);
  // }

  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    promise.then((blogPosts) => {
      setPosts(blogPosts);
    });
  }, []);

  return (
    <App>
      {/* {entries} */}
      {JSON.stringify(posts)}
      {/* <button onClick={fetchEntries}>awe</button> */}
      <p>About Page</p>
    </App>
  );
}
