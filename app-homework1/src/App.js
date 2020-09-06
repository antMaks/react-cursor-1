import React from 'react';
import Post from './components/Post/Post'
import  AVA_IMAGE from "/Users/mac/Desktop/react-cursor-1/app-homework1/src/img/ava.png"; 

function App() {
  return (
    <div className="App">
    <Post author= {{
      name: "Ant Maks",
      photo: AVA_IMAGE,
      nickname: "@Ant Maks",
      comments:23,
      repost:19,
      likes:48
   }}
   content="Maksim VASILOVICH duze staranyi hlopets i lubit svoyu divchinu Karinu"
   
   date={"14  aug."}/>

    </div>
  );
}

export default App;
