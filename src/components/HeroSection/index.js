import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am  {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle className='text-sm'>
                            Dynamic <b>Full Stack Developer</b> with 4+ years of experience building scalable, high-performance web applications.<br /><br />
                            <b>Projects:</b> School & Project Management systems, E-commerce platforms, CRMs, SaaS dashboards, Real estate portals, Modern landing pages, and AI tools using OpenAI.<br />
                            <b>Tech Stack:</b> Laravel, React.js, Next.js, REST APIs, Redis, Socket.IO.<br />
                            <b>Database & DevOps:</b> MySQL, PostgreSQL, deployed on VPS & C-Panel.<br />
                            <b>AI Work:</b> GPT-based chatbots and automation tools.<br />
                            <b>Leadership:</b> Led small teams, turning complex needs into clean, maintainable code.
                        </SubTitle>
                        {/* <SubTitle>{Bio.description}</SubTitle> */}
                        <ResumeButton href={Bio.resume} target='display'>Check Resume <span style={{ marginLeft: '8px', display: 'inline-flex', verticalAlign: 'middle' }}>
                            {/* Download SVG Icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </span></ResumeButton>
                     
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection