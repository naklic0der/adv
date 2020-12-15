import React from 'react'
import style from './Block.module.sass'

const Block = (props) => {

   return (
      <div className={style.Block} data-aos={props.anim}>
         {props.children}
      </div>
   )
}

export default Block
