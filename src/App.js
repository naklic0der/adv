import React from 'react'
import style from './App.module.sass'
import Button from '@material-ui/core/Button';

function App() {
   return (
      <div className={style.App}>
         <p>Hume koi farak nahi padta, dekho ye sab toh kismat ka khel hai</p>
         <Button variant="contained" color="primary">
            Hello World
         </Button>
      </div>
   );
}

export default App;
