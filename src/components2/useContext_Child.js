import React, {useContext} from 'react'
import ThemeContext from './ThemeContext_Global'
export default function useContext_Child() {
    const cc = useContext(ThemeContext);
  return (
    <div>
        {/*3. use global component (ThemeContext)*/}
        <ThemeContext.Consumer>
            {/*4. map color to style*/}
            {color => <h1 style={{color:color}}>Color is {color}</h1>}
        </ThemeContext.Consumer>
        <h1 >{cc}</h1>
    </div>
  )
}
