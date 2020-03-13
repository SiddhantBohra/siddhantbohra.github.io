import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import aboutMe from './aboutMe'
export default class landingPage extends Component {
    render() {
        return (
                <div id='landingPage'>
                    <Grid className='landing-grid'>
                        <Cell col={12}>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                            <div className='banner-text'>
                                <h1>Full Stack Developer</h1>
                                <hr />
                                <p>Javascript | Node.JS | Express.JS | MongoDB | AWS | Docker | Kubernetes | React | HTML | CSS</p>
                                <div className="social-links" >
                                    <a href="https://www.linkedin.com/in/siddhant-bohra-7a1b0a165/" rel="noopener nereferrer" target="_blank">
                                        <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                                    </a>
                                    <a href="https://github.com/SiddhantBohra" rel="noopener nereferrer" target="_blank">
                                        <i className='fa fa-github' aria-hidden='true'></i>
                                    </a>
                                    <a href="https://www.facebook.com/siddhant.bohra" rel="noopener nereferrer" target="_blank">
                                        <i className='fa fa-facebook-square' aria-hidden='true'></i>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    
                </div>
        )
    }
}
