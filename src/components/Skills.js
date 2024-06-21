import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/Skills.css';
import { faDatabase,faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5,faCss3Alt,faJs,faReact,faBootstrap,faGit } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const [skills,setSkills] = useState([
        {
            id:0,
            title:'HTML',
            icon: faHtml5,
            description:`HTML (HyperText Markup Language) is the backbone of web development.
             It structures the content on the web by using various tags and elements, providing
              the foundation upon which websites and web applications are built. My proficiency
               in HTML ensures that I can create well-organized and semantically correct web pages.`,
            isOpened: false
        },
        {
            id: 1,
            title: 'CSS',
            icon: faCss3Alt,
            description: `CSS (Cascading Style Sheets) is essential for designing the visual aspects
             of web pages. With my strong knowledge of CSS, I can create responsive, visually appealing websites.
              I am skilled in using CSS to manage layouts, colors, fonts, and animations, ensuring a consistent
               and engaging user experience across different devices.`,
            isOpened: false
        },
        {
            id: 2,
            title: 'JavaScript',
            icon: faJs,
            description: `JavaScript brings web pages to life by making them interactive and dynamic.
             My expertise in JavaScript allows me to build complex functionalities, handle events,
              manipulate the DOM, and create smooth user experiences. I am adept at using JavaScript
               to implement features like form validation, interactive maps, and asynchronous data fetching.`,
            isOpened: false
        },
        {
            id: 3,
            title: 'React.Js',
            icon: faReact,
            description: `React.js is a powerful JavaScript library for building user interfaces.
             My experience with React.js includes creating reusable components, managing state with hooks,
              and optimizing performance. React's component-based architecture enables me to build scalable
               and maintainable web applications efficiently.`,
            isOpened: false
        },
        {
            id: 4,
            title: 'SQL',
            icon: faDatabase,
            description: `SQL (Structured Query Language) is used for managing and manipulating databases.
             My proficiency in SQL allows me to write efficient queries to retrieve, update, and manage data.
              I have experience working with relational databases, ensuring data integrity and optimizing
               database performance.`,
            isOpened: false

        },
        {
            id: 5,
            title: 'Bootstrap',
            icon: faBootstrap,
            description: `Bootstrap is a popular CSS framework that helps in designing responsive and mobile-first
             web pages quickly. My knowledge of Bootstrap allows me to leverage its pre-designed components and grid
              system to create aesthetically pleasing and functional websites with minimal effort, ensuring
               compatibility across various devices and screen sizes.`,
               isOpened: false
        },
        {
            id: 6,
            title: 'Git',
            icon: faGit,
            description: ` Git is a version control system that tracks changes in source code during software development.
             My expertise in Git includes using it for version control, collaboration, and project management.
              I am proficient in performing common Git operations such as branching, merging, and resolving conflicts,
               ensuring smooth and organized development workflows.`,
            isOpened: false
        },
        {
            id: 7,
            title: 'OOP',
            icon: faCode,
            description: ` OOP (Object-Oriented Programming) is a programming paradigm based on the concept of "objects".
             I am familiar with handling OOP in several programming languages, including Java, C++, Python, and JavaScript.
              My understanding of OOP principles, such as inheritance, polymorphism, encapsulation, and abstraction,
               allows me to write clean, modular, and reusable code.`,
            isOpened: false
        }
    ]);

    const toggleOpenBox = (id) =>{
        setSkills(skills.map(skill => skill.id === id ?
            {...skill, isOpened: !skill.isOpened} : skill
        )
            
        )
    }
    console.log(skills);
  return (
    <>
    <div className='skills-section'>
        <div className='skills-header'>
            <h3>Skills</h3>
        </div>
        <div className='my-skills-container'>
        {
            skills.map(skill =>(
                <div key={skill.id} className={skill.isOpened ? 'skill-box skill-box-opened' : 'skill-box'} onClick={() => toggleOpenBox(skill.id)}>
                <FontAwesomeIcon className='skill-icon' icon={skill.icon} />
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
                </div>
            ))
        }
        </div>
    </div> 
    </>
  )
}

export default Skills
