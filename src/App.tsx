import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import PostList from './pages/post_list/PostList';
import Post from './pages/post_list/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts" component={PostList}/>
          <Route exact path="/post/:id" component={Post}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
