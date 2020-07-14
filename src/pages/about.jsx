import React from "react";
import App from "../components/App";
import { entriesPosts } from "../plugins/contentful";
const promise = entriesPosts();

export default function About() {
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
