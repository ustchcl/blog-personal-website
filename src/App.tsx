import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Link,
  useParams,
  Routes
} from "react-router-dom";
import PostList from './pages/post_list/PostList';
import Post from './pages/post_list/Post';
import Admin from './pages/admin/Admin';
import Loading from './components/Loading';
import { setLoading } from './Global';
import AdminManager from './pages/admin/AdminManager';

class App extends React.Component {
  loading: React.RefObject<Loading> = React.createRef();

  componentDidMount() {
    setLoading(this.loading)
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} >
          </Route>
          <Route path="/home" element={<Home/>} />
          <Route path="/posts" element={<PostList/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/admin-login" element={<Admin/>} />
          <Route path="/admin" element={<AdminManager/>} />
        </Routes>
        <Loading ref={this.loading} />
      </div>
    );
  }
}

export default App;
