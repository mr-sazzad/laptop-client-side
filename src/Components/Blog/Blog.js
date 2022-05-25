import React from 'react';

const Blog = () => {
    return (
        <div>
        <div className='h-[30vh] flex items-center justify-center stockheader'>
                <h1 className='md:text-3xl text-2xl text-green-400'>Blogs</h1>
        </div>
        <div className='text-left py-6 mb-32 md:w-3/4 mx-auto p-2'>
        <div className="qna my-2 p-1 shadow-sm">
            <h1 className='text-xl font-bold text-green-400 my-2'>1 ) Differences between sql and nosql databases ?</h1>
            <h2 className='ml-1'>
                <span className="font-bold">Ans : </span> <br />
                SQL- <br />
                a ) SQL databases have fixed or static or predefined schema. <br />
                b ) SQL databases are vertically scalable.	 <br />
                c ) SQL databases are best suited for complex queries. <br />
                NOSQL- <br />
                a ) NoSQL databases have dynamic schema. <br />
                b ) NoSQL databases are horizontally scalable.
                <br />
                c ) Javascript is capable enough to add HTML and play with the DOM.  <br />

            </h2>
        </div>

        <div className="qna my-2 p-1 shadow-sm">
            <h1 className='text-xl font-bold text-green-400 my-2'>2 ) When should you use nodejs and when should you use mongodb ?</h1>
            <h2 className='ml-1'>
                <span className="font-bold">Ans : </span> <br />
                Nodejs- <br />
                Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it. <br />


                MongoDB- <br />
                If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database
                If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database


            </h2>
        </div>
        <div className="qna my-2 p-1 shadow-sm">
            <h1 className='text-xl font-bold text-green-400 my-2'>3) Difference between javascript and nodejs ?</h1>
            <h2 className='ml-1'>
                <span className="font-bold">Ans : </span> <br />
                Javascript- <br />
                a ) It is basically used on the client-side. <br />
                b ) Javascript is used in frontend development.	 <br />
                c ) SQL databases are best suited for complex queries. <br />
                NodeJS- <br />
                a ) It is mostly used on the server-side. <br />
                b ) Nodejs is used in server-side development.
                <br />
                c ) Nodejs does not have capability to add HTML tags. <br />

            </h2>
        </div>
        </div>
    </div>
    );
};

export default Blog;