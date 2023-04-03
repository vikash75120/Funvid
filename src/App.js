import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import VideoDetails from './Components/VideoDetails';
import ChannelDetails from './Components/ChannelDetails';
import SearchFeed from './Components/SearchFeed';

function App() {
  return (
    <Box sx={{ backgroundColor:'#000'}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" excat element={<Feed/>} />
          <Route path="/video/:id"  element={<VideoDetails/>} />
          <Route path="/channel/:id"  element={<ChannelDetails/>} />
          <Route path="/search/searchterm"  element={<SearchFeed/>} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
