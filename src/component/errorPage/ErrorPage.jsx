import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div>
                <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                        <div className='max-w-md text-center'>
                            <h2 className='mb-8 font-extrabold text-9xl text-blue-500'>
                                <span className='sr-only'>Error</span>
                                {status || 404}
                            </h2>
                            <p className='text-2xl font-semibold md:text-3xl text-red-500 mb-8'>
                                {error?.message}
                            </p>
                            <p>Please provite Right url link</p>
                            <Link to='/' className='btn'>
                                Back to homepage
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default ErrorPage;