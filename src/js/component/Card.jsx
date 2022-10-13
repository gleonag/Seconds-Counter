
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card.jsx'


function Card (props) {
	const [counter, setCounter ] = useState (0 ) ; 
    
    useEffect (() => {
        clearTimeout(miTimeout)
        const miTimeout = setTimeout(() => {
            setCounter (counter + 1)
        }, 1000)},[counter])
    
        return (<div class="container">
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>   
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div>)

    }
props.PropTypes {

}

RenderDOM.render = (<card/>, document.querySelector("#myDiv"))