import React from 'react';
import './About.css'
import image from '../../../src/1627405470870.jpg'
const About = () => {
    return (
        <div className='container-badsha bg-cyan-100'>
            <h1 className='text text-xl font-bold'>Name:Foysal Ahamed Badsha Bepari</h1>
            <br />
            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                <div class="">
                    <img src={image} alt="" />
                </div>
            </section>
            <h3 className='text text-lg font-bold'>I am BADSHA but my full name is Foysal Ahamed Badsha Bepari.I am a university student.I study in Nanjing University of Posts and Telecommunications. Which is located at Nanjing city in China.My majhor is Computer Science and Technology(CST).I want to be a world best programmer.I want to reach my goal by working hard to try my best.Now I learn web development.I think it is related to my major for this reason with in next 3 months i want to be a remote job of junior web development.And it will help me problem solveing.This way one time i will be a senior programmer.</h3>
        </div >
    );
};

export default About;