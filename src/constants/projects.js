import React from "react"
import roseGif from '../assets/roseApp.gif';
import doctorPocket from '../assets/doctorPocket.gif';
import uni from '../assets/UUWPcompuCell.png';
import gap from '../assets/gap.png';
import graphic from '../assets/graphic-design.jpg';
export default [
  {
    id: 1,
    img: uni,
    featured: true,
    category: 'Web Development',
    title: 'WordPress site',
    description: `WordPress website created using custom theme, custom posts, some plugins for managing the size of images, for importing and exporting all the website for deployment, etc., google map API, REST API, AJAX, AXIOS. Project deployed with plugins `,
    info2: 'Javascript, PHP, JQuery, Bootstrap 4, webpack, node, mySql',
    url: 'https://www.uni.anneson.com/',
    repo: '', 
  },
  {
    id: 2,
    img: gap,
    featured: false,
    category: 'Email Development',
    title: 'Transactional HTML Email',
    description: `I duplicate an email from GAP that I have received and I converted it into a Transactional HTML Email `,
    info2: 'Javascript, HMTL5, CSS3, email on acid, Illustrator',
    url: 'https://www.transactionalemail.anneson.com/',
    repo: '', 
  },
  {
    id: 3,
    img: graphic,
    featured: false,
    category: 'Graphic Design',
    title: 'Orthé graphic design materials',
    description: `I was part of the opening team for a dental office, called Orthé. I became versed in several fields of communication technology to help the business grow and I apply these methods proficiently. I learned how to build a website in Squarespace, edit photos in Photoshop, create logos and design graphic materials for the workspace. `,
    info2: 'Squarespace, Photoshop, Illustrator, HTML5, CSS3',
    url: 'https://www.graphic.anneson.com/',
    repo: '', 
  },
  {
    id: 4,
    img: doctorPocket,
    featured: true,
    category: 'Software Development',
    title: 'DoctorPocket',
    description: `Android Application to find available doctors in your area and book an appointment. In this project I wrote the code for signing up, 
    displaying the doctors list, the calendar, and implementing the design for the UI according to a Figma file.`,
    info2: 'Java, SQLite as database and Source Control Git',
    url: '',
    repo: 'https://github.com/Anne-Son/PocketDoctor', 
  },
  {
    id: 5,
    img: roseGif,
    featured: true,
    category: 'Software Development',
    title: 'Rose Purchase Management App',
    description: `My role in this project was Team leader. As a team leader I organized the meetings, 
    discussed the parts that each team will be working on, and taught them how to work with github.
    I had brought the idea for the app, and created the ER diagram, database with mock data and develop the purchase agent section
    of the app.`,
    info2: 'C#, ado.net, Entity Framework 6, SQL as database and Source Control Git',
    url: '',
    repo: 'https://github.com/Anne-Son/RosePurchaseManagementApp', 
  },
]
