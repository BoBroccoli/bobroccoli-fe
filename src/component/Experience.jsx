import React from 'react';
import Navigation from './Navigation';
import '../style/experience.scss';

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                <div className="timeline">
                    <ul className="ul">
                        <li className="li">
                            <div class="timeline-content">
                                <h2 className="date">Sept 25, 2019</h2>
                                <div className="title">
                                    <h1>Software Engineer</h1>
                                    <h1>Gartner, Inc</h1>
                                </div>
                                <ul className="detail">
                                    <li>Collaborating with the scrum team, each sprint working on various areas such as backend, Website UI design, security patches
and performance optimization. Updated multiple code modules and reduced code size for various business logic, implemented new features for existing web application
(JavaScript, ReactJs, Spring, Hibernate, Java).</li>
                                    <li>Familiar with Docker, Maven for building and running the application, and
Postman for HTTP composition, familair with both backend and frontend technologies.</li>
                                    <li>Experienced with writing high-scalability and high-performance code for millions of users, strong problem-solving
and communication skills to produce high quality work</li>
                                </ul>
                            </div>
                        </li>
                        <li className="li">
                            <div class="timeline-content">
                            <h2 className="date">Aug 30, 2019</h2>
                                <div className="title">
                                    <h1>Teaching Assistant</h1>
                                    <h1>University of Minnesota</h1>
                                </div>
                                <ul className="detail">
                                    <li>Organized multiple lab sessions for undergraduate students, finished 2 years assistantship and master degree.</li>
                                    <li>Helped students accomplish their course objections and delivered different concepts in data structures, algorithms
and other computer-science related courses</li>
                                </ul>
                            </div>
                        </li>
                        <li className="li">
                        <div class="timeline-content">
                            <h2 className="date">May 30, 2017</h2>
                                <div className="title">
                                    <h1>Software Developer</h1>
                                    <h1>Weinon Corp</h1>
                                </div>
                                <ul className="detail">
                                    <li>Worked as Java backend developer in Agile team. Collaborated with other developers via Bitbucket (Git), Jira (daily
standup), and Confluence (document).</li>
                                    <li>Implemented multiple backend functions. Experienced with Restful API and JSON responses. Wrote concise code along
with Junit test and integration test cases, minimized the possibility of introducing bugs.</li>
                                    <li>Experienced with Java Framework Spring, SpringMVC, MyBatis, Maven, Docker and MySQL database. Applied various
approaches to reduce the database and backend response time (500ms on average).</li>
                                </ul>
                            </div>
                        </li>
                        <li className="li">
                            <div class="timeline-content">
                                <div className="title">
                                    <h1>Undergraduate Student</h1>
                                    <h1>University of Minnesota</h1>
                                </div>
                                <h2 className="date">Dec 21, 2016</h2>
                                <ul className="detail">
                                    <li>
                                        Finished all the required courses and completed B.S. degree from Computer Science department.
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="li">
                            <div class="timeline-content">
                                <div className="title">
                                    <h1>Technical Support and Volunteer</h1>
                                </div>
                                <h2 className="date">Before</h2>
                                <ul className="detail">
                                    <li>
                                        Helped different organizations and activities for technology support.
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default Experience;