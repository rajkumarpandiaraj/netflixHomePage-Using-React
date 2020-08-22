import React from 'react'

function Tabtwo(props) {
    const {handleTabTwoClick, styling} = props
    return (
        <div>
            <div id="tab-2" className="tab-item" onClick={handleTabTwoClick}  style={styling} >
					<i className="fas fa-tablet-alt fa-3x"></i>
					<p className="hide-sm">Watch anywhere</p>
			</div>
        </div>
    )
}

export default Tabtwo
