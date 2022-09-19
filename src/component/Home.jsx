import React from 'react';
import Navigation from './Navigation';
import profileLogo from "../assets/photo.jpg"
import '../style/home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import FileSaver from 'file-saver'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='content'>
                    <div className='info'>
                        <img src={profileLogo} alt="profile"></img>
                        <h1 className='name'>Bo Wen</h1>
                        <h2 className='name'>Software Engineer</h2>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/channel/UCSEB9sZXY8rOmHTK81pbNFw" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/bo-wen-a62304a8/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/BoBroccoli" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                        <button className='downloadBt' onClick={()=> {FileSaver.saveAs("/resume.pdf", "Bo Wen Resume.pdf")}}>
                            <FontAwesomeIcon icon={faDownload}/>
                            <p>Resume</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;