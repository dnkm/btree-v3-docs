# Supabase Reference App

In this guide, we will create a straightforward reference app that leverages the core functionalities of Supabase. This app does not include any extra bundles, making it an ideal reference point for future projects.

## Setup

### Create a Supabase Project

If you haven't already, create a Supabase project. In the 'Project Settings' section, navigate to 'API' to find your project URL and API Keys. Copy the URL and the key labeled as 'anon' for the next steps.

### Create a Codesandbox Project

Visit [codesandbox.io](http://codesandbox.io) and create a new "SANDBOX" (not DEVBOX) project, selecting "React" as your template.

### Install the Supabase Library

In the 'dependencies' section at the bottom left corner, search for `@supabase/supabase-js` and ensure the version is `2.X.X`. If the version is different, lower it to `2`.

## Connect Your App to Your Supabase Project

Supabase hosts numerous projects, so it's essential to configure your app to connect to your specific Supabase project. Follow these steps to add your own API key:

```js filename="App.js" {2,4-7}
import "./styles.css";
import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://YOUR_PROJECT_ID.supabase.co";
const key = "YOUR_API_KEY";
const supabase = createClient(projectUrl, key);
console.log(supabase);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

The `supabase` variable allows you to communicate with the server. The `console.log(supabase)` line will display an object. Check for any errors and feel free to remove that line once you've verified your connection.

# Authentication

Authentication and Authorization differs as follows

- Authentication: Checking if the user is who claims to be
- Authorization: Checking if the user has a privilege to do something

In this section, we will only go over authentication and revisit authorization in another topic. We start off by adding three buttons to our app and a state to track the user session

```jsx filename="App.js" {2,3-5,9-11}
export default function App() {
  const [user, setUser] = useState(null);

  async function signup() {}
  async function signIn() {}
  async function signOut() {}

  return (
    <div className="App">
      <button onClick={signup}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```
