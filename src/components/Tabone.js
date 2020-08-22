import React from 'react'

function Tabone(props) {
    const {handleTabOneClick, styling} = props
    return (
        <div>
				<div id="tab-1" className="tab-item" onClick={handleTabOneClick} style={styling} >
					<i className="fas fa-door-open fa-3x"></i>
					<p className="hide-sm">Cancel at any time</p>
				</div>
        </div>
    )
}

export default Tabone
