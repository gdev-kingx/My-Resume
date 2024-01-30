import React from "react";
import "./styles/home.css";
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const resumeIntro = "Hi my name is R Sarveshvarn aka Sarvesh. I'm currently pursuing B.Tech CSE in SRM and I know Full stack web development(FSD). This website is developed in React. Read more about me in here.";
    const sectionTitles = ["My Skills: ", "My hobbies: ", "Projects: ", "Contact: "];
    const mySkills = ["HTML(Hyper Text Markup Language)", "CSS(Cascading Style Sheets)", "JavaScirpt", "React(A framework of JavaScirpt)", "Node", "Express", "Python"];
    const hobbies = ["Programming", "Web Game development", "Game development", "Playing Cricket"];
    const contact = {github: "https://github.com/gdev-kingx", insta: "gdev._king.x"}
    return (
        <div className="home">
            <div className="intro">
                <div className="content">
                    <TypeAnimation sequence={[resumeIntro]} />
                </div>
            </div>
            <div className="skills">
                <TypeAnimation sequence={[sectionTitles[0]]} cursor={false} />
                <ul>
                    {mySkills.map((val) => {
                        return <li>{<TypeAnimation sequence={[val]} cursor={false} />}</li>
                    })}
                </ul>
            </div>
            <div className="hobbies">
                <p>{sectionTitles[1]}</p>
                <ul>
                    {hobbies.map((val) => {
                        return <li><TypeAnimation sequence={[val]} cursor={false} /></li>
                    })}
                </ul>
            </div>
            <div className="projects">
                <p>{sectionTitles[2]}</p>
                <ul>
                    <li><TypeAnimation sequence={["Space Invaders: "]} cursor={false} /> <a href="https://github.com/gdev-kingx/SpaceInvaders.js" target="_blank"><TypeAnimation sequence={["https://github.com/gdev-kingx/SpaceInvaders.js"]} cursor={false} /></a></li>
                    <li><TypeAnimation sequence={["Drum Kit: "]} cursor={false} /><a href="https://github.com/gdev-kingx/Drum-Kit.js" target="_blank"><TypeAnimation sequence={["https://github.com/gdev-kingx/Drum-Kit.js"]} cursor={false} /></a></li>
                    <li><TypeAnimation sequence={["JS Slot Machine:"]} cursor={false} /><a href="https://github.com/gdev-kingx/JS_Slot-Machine" target="_blank"><TypeAnimation sequence={["https://github.com/gdev-kingx/JS_Slot-Machine"]} cursor={false} /></a></li>
                </ul>
            </div>
            
            <div className="contact">
                <p>{sectionTitles[3]}</p>
                <ul>
                    <li><TypeAnimation sequence={["Github: "]} cursor={false} /><a href="https://github.com/gdev-kingx" target="_blank"><TypeAnimation sequence={["https://github.com/gdev-kingx"]} cursor={false} /></a> </li>
                    <li><TypeAnimation sequence={["Instagram: "]} cursor={false} /><TypeAnimation sequence={["gdev._king.x"]} cursor={false} /></li>
                    <li><TypeAnimation sequence={["Email: "]} cursor={false}/><TypeAnimation sequence={["sarveshvarnr@gmail.com"]} cursor={false} /></li>
                </ul>
            </div>
        </div>
    )
}
export default Home;
