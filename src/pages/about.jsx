import App from "../components/App";
import { client } from "../plugins/contentful";

export default function About() {
  let entries;
  async function fetchEntries() {
    entries = await client.getEntries();
    console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  return (
    <App>
      {entries}
      <button onClick={fetchEntries}>awe</button>
      <p>About Page</p>
    </App>
  );
}
