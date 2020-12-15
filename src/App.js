import style from './App.module.sass'
import Button from '@material-ui/core/Button';
import Block from "./Components/Block";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <div className={style.App}>
         <p>Hume koi acha or kya acha wese abhi?? ka khel hai</p>
         <Button variant="contained" color="primary">
            Click me !!
         </Button>
         <div className={style.test}>
            <Block anim="fade-up">one</Block>
            <Block anim="fade-up">two</Block>
            <Block anim="fade-left">three</Block>
            <Block anim="fade-right">four</Block>
         </div>
      </div>
   );
}

export default App;
