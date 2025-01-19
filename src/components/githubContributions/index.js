import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubContributions = ({ username }) => {
    return (
        <div className="github-calendar">
            <div className={`projectCont w-full h-auto relative top-[50px] p-10px flex flex-col items-center justify-center mb-[50px]`}>
                <div className={`w-full flex flex-row items-center justify-center`}>
                    <span data-aos="zoom-in"
                          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                    <p data-aos="fade-up" className={`text-white-200 text-[15px]`}>Github Contributions </p>
                    <span data-aos="zoom-in"
                          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                </div>
            </div>
            <GitHubCalendar username={username}/>
        </div>
    );
};

export default GithubContributions;