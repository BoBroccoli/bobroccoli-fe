import React from 'react';
import Navigation from './Navigation';
import profileLogo from "../assets/photo.jpg"
import '../style/home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='content'>
                    <div className='info'>
                        <img src={profileLogo} alt="profile"></img>
                        <h1 className='name'>Bo Wen</h1>
                        <h2 className='name'>Software Engineer</h2>
                        <h3 className='name'>LinkedIn: <a className='name' href="https://www.linkedin.com/in/bo-wen-a62304a8/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/bo-wen-a62304a8/</a> </h3>
                        <h3 className='name'>GitHub: <a className='name' href="https://github.com/BoBroccoli" target="_blank" rel="noreferrer">https://github.com/BoBroccoli</a> </h3>
                        <h3 className='name'>Email: bowen4091761@gmail.com</h3>
                        <h3 className='name'>Phone: 2184091761</h3>
                        <ul>
                            <li>
                                <a href="www.google.com">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href="www.google.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="www.google.com">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;