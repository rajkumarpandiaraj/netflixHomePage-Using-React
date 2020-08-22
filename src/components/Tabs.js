import React from 'react'
import Tabone from './Tabone'
import Tabtwo from './Tabtwo'
import Tabthree from './Tabthree'


function Tabs(props) {
    const {handleTabOneClick, handleTabTwoClick, handleTabThreeClick, styling} = props
    return (
        <div  className="tabs">
            <div className="container">
                <Tabone handleTabOneClick={handleTabOneClick}  styling={styling.tabOneBorder} />
                <Tabtwo handleTabTwoClick={handleTabTwoClick}  styling={styling.tabTwoBorder}/>
                <Tabthree handleTabThreeClick={handleTabThreeClick}  styling={styling.tabThreeBorder}/>
            </div>
        </div>
    )
}

export default Tabs
