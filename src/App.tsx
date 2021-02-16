import React from "react";
import { AppProviders } from "context";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { TopStories } from "screens/top-stories";
import { NewStories } from "screens/new-stories";
import { ErrorMessage } from "components/lib";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: any) {
  return <ErrorMessage error={error} />;
}

function App() {
  return (
    <AppProviders>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Container>
          <Nav />
          <AppRoutes />
        </Container>
      </ErrorBoundary>
    </AppProviders>
  );
}

function Container({ children }: any) {
  return <div className="mx-auto max-w-5xl">{children}</div>;
}

function NavLink(props: any) {
  const match = useRouteMatch(props.to);
  const matchClass = "font-bold text-primary-500";
  return (
    <Link
      {...props}
      className={`p-2 text-lg hover:text-primary-500 transition ease-in-out duration-100 ${
        match && matchClass
      }`}
    />
  );
}

function Nav() {
  return (
    <nav className="flex justify-between items-center bg-white h-16">
      <Link to="/">
        <img
          className="h-14 w-14"
          src="https://cdn.iconscout.com/icon/free/png-512/hacker-news-2-569388.png"
          alt="Logo"
        />
      </Link>

      <ul className="flex gap-4">
        <li>
          <NavLink to="/top-stories">Top Stories</NavLink>
        </li>
        <li>
          <NavLink to="/new-stories">New Stories</NavLink>
        </li>
      </ul>

      <img
        className="w-10 h-10 rounded-full"
        src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
        alt=""
      />
    </nav>
  );
}

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/top-stories" />
      </Route>
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
