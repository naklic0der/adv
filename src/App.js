import React from 'react'
import style from './App.module.sass'
import Button from '@material-ui/core/Button';
import Block from "./Components/Block";

function App() {
   return (
      <div className={style.App}>
         <p>Hume koi acha or kya acha wese abhi?? ka khel hai</p>
         <Button variant="contained" color="primary">
            Click me !!
         </Button>
         <div className={style.test}>
            <Block data-aos={"fade-in"}>one</Block>
            <Block data-aos={"fade-in"}>two</Block>
            <Block data-aos={"fade-in"}>three</Block>
            <Block data-aos={"fade-in"}>four</Block>
         </div>
      </div>
   );
}

export default App;
