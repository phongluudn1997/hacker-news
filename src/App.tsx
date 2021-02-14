import React from "react";
import { AppProviders } from "context";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { TopStories } from "screens/top-stories";
import { NewStories } from "screens/new-stories";

function App() {
  return (
    <AppProviders>
      <Container>
        <Nav />
        <AppRoutes />
      </Container>
    </AppProviders>
  );
}

function Container({ children }: any) {
  return <div className="container mx-auto">{children}</div>;
}

function NavLink(props: any) {
  const match = useRouteMatch(props.to);
  const matchClass = "bg-gray-50 border-b-2";
  return (
    <Link
      {...props}
      className={`p-2 hover:text-indigo-500  ${match ? matchClass : null}`}
    />
  );
}

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/top-stories">Top Stories</NavLink>
        </li>
        <li>
          <NavLink to="/new-stories">New Stories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function AppRoutes() {
  return (
    <Switch>
      <Route path="/top-stories">
        <TopStories />
      </Route>
      <Route path="/new-stories">
        <NewStories />
      </Route>
    </Switch>
  );
}

export default App;
