import React, { Component } from 'react'
import Showcase from './Showcase'
import Tabs from './Tabs'
import Tabcontents from './Tabcontents'
import Footer from './Footer'

export class Netflixhomepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tabOne : {
                display : 'block',
                opacity : 1,
                transition: "all 1000 ease-in"
            },
            tabTwo : {
                display : 'none',
                opacity : 0
            },
            tabThree : {
                display : 'none',
                opacity : 0
            },
            tabOneBorder : {
                borderBottom : '#e50914 4px solid'
            },
            tabTwoBorder : {
                borderBottom : ''
            },
            tabThreeBorder : {
                borderBottom : ''
            }
        }
    }

    handleTabOneClick = () =>{
        this.setState({
            tabOne : {
                display : 'block',
                opacity : 1,
                transition: "all 1000 ease-in"
            },
            tabTwo : {
                display : 'none',
                opacity : 0
            },
            tabThree : {
                display : 'none',
                opacity : 0
            },
            tabOneBorder : {
                borderBottom : '#e50914 4px solid'
            },
            tabTwoBorder : {
                borderBottom : ''
            },
            tabThreeBorder : {
                borderBottom : ''
            }
        })

    }

    handleTabTwoClick = () =>{
        this.setState({
            tabOne : {
                display : 'none',
                opacity : 0
            },
            tabTwo : {
                display : 'block',
                opacity : 1,
                transition: "all 1000 ease-in"
            },
            tabThree : {
                display : 'none',
                opacity : 0
            },
            tabOneBorder : {
                borderBottom : ''
            },
            tabTwoBorder : {
                borderBottom : '#e50914 4px solid'
            },
            tabThreeBorder : {
                borderBottom : ''
            }
        })

    }

    handleTabThreeClick = () =>{
        this.setState({
            tabOne : {
                display : 'none',
                opacity : 0
            },
            tabTwo : {
                display : 'none',
                opacity : 0
            },
            tabThree : {
                display : 'block',
                opacity : 1,
                transition: "all 1000 ease-in"
            },
            tabOneBorder : {
                borderBottom : ''
            },
            tabTwoBorder : {
                borderBottom : ''
            },
            tabThreeBorder : {
                borderBottom : '#e50914 4px solid'
            }
        })

    }
    
    render() {
        return (
            <div>
                <Showcase/>
                <Tabs handleTabOneClick={this.handleTabOneClick}
                        handleTabTwoClick={this.handleTabTwoClick}
                        handleTabThreeClick={this.handleTabThreeClick}
                        styling={this.state} />
                <Tabcontents styling ={this.state}/>
                <Footer/>
            </div>
        )
    }
}

export default Netflixhomepage
