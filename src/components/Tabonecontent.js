import React from 'react'

function Tabonecontent(props) {
    const {styling} = props
    console.log(styling);
    return (
        <div>
            <div id="tab-1-content" className="tab-content-item" style={styling}>
					<div className="tab-1-content-inner">
						<div>
							<p className="text-lg">
								If you decide Netflix isn't for you - no problem. No commitment.
								Cancel online anytime.
							</p>
							<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
					</div>
			</div>

        </div>
    )
}

export default Tabonecontent
