import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=''>
                <div className='text-center'>
                    <h3>the differences between uncontrolled and controlled components </h3>
                    <p>Controlled components manage state through React, while uncontrolled components manage state through the browser.Uncontrolled components are usually easier to set up and require less code, while controlled components require more setup and can be more verbose. Controlled components offer more control over form data and are more predictable, while uncontrolled components offer less control over form data but are easier to set up.</p>
                </div>
                <div className='text-center'>
                    <h3>validate React props using PropTypes</h3>
                    <p>PropTypes is a built-in typechecking library for React that allows you to specify the types and shapes of your component props. It provides an easy way to catch errors early and ensure that your components are used correctly.</p>
                </div>
            </div>
            <div className=''>
                <div className='text-center'>
                    <h3> difference between nodejs and express js.</h3>
                    <p>Node.js and Express.js are both important technologies in the JavaScript ecosystem, but they serve different purposes. Node.js provides a runtime environment for running JavaScript code on the server, while Express.js provides a framework for building web applications and APIs on top of Node.js</p>
                </div>
                <div className='text-center'>

                    <h3> custom hook</h3>
                    <p>custom hooks in React are a powerful way to encapsulate reusable logic and improve code readability, maintainability, and performance. You would create a custom hook when you have some logic that is used in multiple components, and you want to centralize and reuse that logic in a modular way.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;