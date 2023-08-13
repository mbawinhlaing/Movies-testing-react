import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { fetchMovies, selectedMovie } from "../redux/action/movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
const Header = () => {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();
  const headleMovie = async () => {
    if (movieName !== "") {
      const res = await api.get(`/search/movie?query=${movieName}&api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            React Movies
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">

          <form className=" bg-slate-400 me-4">
            <input type="search" placeholder="Search" value={movieName} onChange={(e)=>setMovieName(e.target.value)} /> 
            <button type="button" onClick={()=>headleMovie()}><i className="fa-solid fa-magnifying-glass"></i> </button>
          </form>

          <Button>Login/ Register </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="font-serif text-Fuchsia-200">
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
