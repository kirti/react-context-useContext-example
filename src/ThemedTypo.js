
import { ThemeContext } from './theme-context';

function ThemedTypo(props) {

  return (
       <ThemeContext.Consumer>
          {theme => (
             <h2 style = {   { backgroundColor: theme.background ,
                                 padding:theme.padding 
                              }
                          }
            > 
               {props.children}
            </h2>
        )}
       </ThemeContext.Consumer>
  )
}

export default ThemedTypo;
