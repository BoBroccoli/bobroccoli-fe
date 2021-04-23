import React from 'react';
import Navigation from './Navigation';
import '../style/home.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='content'>
                    <div className='info'>
                        <h1 className='name'>Bo Wen</h1>
                        <h2 className='name'>Software Engineer</h2>
                        <h3 className='name'>LinkedIn: https://www.linkedin.com/in/bo-wen-a62304a8/ </h3>
                        <h3 className='name'>GitHub: https://github.com/BoBroccoli </h3>
                        <h3 className='name'>Email: bowen4091761@gmail.com</h3>
                        <h3 className='name'>Phone: 2184091761</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;