import React from 'react'
import Tabonecontent from './Tabonecontent'
import Tabtwocontent from './Tabtwocontent'
import Tabthreecontent from './Tabthreecontent'


function Tabcontents(props) {
    const {styling} = props
    console.log(styling);
    return (
        <div className="tab-content">
            <div className="container">
                <Tabonecontent styling={styling.tabOne} />
                <Tabtwocontent  styling={styling.tabTwo}/>
                <Tabthreecontent styling={styling.tabThree}/>
			</div>

        </div>
    )
}

export default Tabcontents
