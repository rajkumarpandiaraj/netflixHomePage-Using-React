import React from 'react'

function Tabthree(props) {
    const {handleTabThreeClick,styling} = props
    return (
        <>
            <div id="tab-3" className="tab-item" onClick={handleTabThreeClick}  style={styling}>
					<i className="fas fa-tags fa-3x"></i>
					<p className="hide-sm">Pick your price</p>
			</div>
        </>
    )
}

export default Tabthree
