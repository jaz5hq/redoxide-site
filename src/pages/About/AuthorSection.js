import React from 'react';
import clsx from 'clsx';
import useThemeContext from '@theme/hooks/useThemeContext';
import Section from '../../components/Section';
import FlipRotateComponent from '../../components/FlipRotateComponent';

function AuthorSection() {
    const { isDarkTheme } = useThemeContext();
    return (
        <Section>
            <div className="col col--12">
                <div className={clsx('hero hero--primary', isDarkTheme && "hero--dark")}>
                    <div className="container">
                        <div className="avatar">
                            <FlipRotateComponent
                                front={
                                    <img
                                        className="avatar__photo avatar__photo--xl padding--sm"
                                        style={{ background: "white"}}
                                        src="/img/author-avatar-front.png"
                                    />}
                                back={
                                    <img
                                        className="avatar__photo avatar__photo--xl padding--sm"
                                        style={{ background: "white"}}
                                        src="/img/author-avatar-back.jpg"
                                    />}
                                style={{marginRight: '20px'}}
                            />
                            <div className="avatar__intro">
                                <h1 className="hero__title">Codename: Redoxide</h1>
                            </div>
                        </div>
                        <p className="hero__subtitle">
                            <span>We are magicians who change the world.</span><br />
                            <span>Lines of code, there is Self Driving.</span><br />
                            <span>Lines of code, there is Articial Intelligence.</span><br />
                            <span>Lines of code, ohhh..... 404</span><br />
                        </p>
                    </div>
                </div>
            </div>
        </Section >
    );
}

export default AuthorSection;