import React, {useEffect, useState} from "react";
import CustomLink from "../CustomLink";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import usersInfo from "../../data/usersInfo.json";
import socials from "../../data/socials.json";
import avatar from "../../public/images/avatar/avatar.png";

function NavBar() {
    useEffect(() => {
        console.log("Socials:", socials);
    }, []);
    return (
        <React.Fragment>
            <div className={`navbar relative h-auto w-full flex align-center justify-between py-[20px]`}>
                <div className={`left w-auto flex align-start items-start justify-start px-[10px] `}>
                    <p className={`font-extrabold mr-[20px]`}>{usersInfo.github_username.charAt(0).toUpperCase() + usersInfo.github_username.slice(1)}</p>
                    <ul className={`relative ml-[10px] hidden md:flex`}>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <CustomLink href="/">Home</CustomLink>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <CustomLink href="/projects">Projects</CustomLink>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <CustomLink href="/about">About</CustomLink>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <CustomLink href="#contact">Contact</CustomLink>
                        </li>
                    </ul>
                </div>
                <div className={`relative right w-[50vmin] hidden md:flex `}>
                    <ul className={`flex flex-row align-center justify-between items-center`}>
                        {socials["twitter"] !== "" &&
                            <a href={socials["twitter"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaTwitter />
                            </a>}
                        {socials["github"] !== "" &&
                            <a href={socials["github"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaGithub />
                            </a>}
                        {socials["email"] !== "" &&
                            <a href={`mailto:${socials["email"]}`} className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FiMail />
                            </a>}
                    </ul>
                </div>
                <div className={`absolute top-[15px] right-[25px] md:hidden `}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatar.src} className={` w-[40px] rounded-[50%] border-[2px] border-solid border-green-100 bg-dark-100 `}  alt={""}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;

export function ResponsiveNavbar({ activePage, pageName = "" }) {
    const [active, setActive] = useState(activePage || "home");

    function handleActive(e) {
        let tgt = e.target.dataset;
        let parent = e.target.parentElement.dataset;

        if (Object.entries(tgt).length === 0) {
            if (Object.entries(parent).length > 0) {
                let { name } = parent;
                setActive(name);
            }
            return;
        }
        let { name } = tgt;
        setActive(name);
    }

    return (
        <div className={`mobileNav`}>
            <div className={`main`}>
                <li className={active === "home" ? `active` : `li`} data-name="home" onClick={handleActive}>
                    <CustomLink href="/">
                        <ion-icon name="home-outline" className={`icon`}></ion-icon>
                    </CustomLink>
                    <label className={`label`}>Home</label>
                </li>
                <li className={active === "projects" ? `active` : `li`} data-name="projects" onClick={handleActive}>
                    <CustomLink href="/projects">
                        <ion-icon name="cube-outline" className={`icon`}></ion-icon>
                    </CustomLink>
                    <label className={`label`}>
                        Projects
                    </label>
                </li>
                <li className={active === "about" ? `active` : `li`} data-name="about" onClick={handleActive}>
                    <CustomLink href="/about">
                        <ion-icon name="person-outline" className={`icon`}></ion-icon>
                    </CustomLink>
                    <label className={`label`}>About</label>
                </li>
                <li className={active === "contact" ? `active mr-5` : `li mr-5`} data-name="contact" onClick={handleActive}>
                    <CustomLink href={pageName === "" ? "#contact" : "/#contact"}>
                        <ion-icon name="mail-outline" className={`icon`}></ion-icon>
                    </CustomLink>
                    <label className={`label`}>Contact</label>
                </li>
            </div>
        </div>
    );
}