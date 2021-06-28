import React from 'react';
import Section from '../../components/Section';

function SkillSection() {
    return (
        <Section>
            <div className="col col--2">
                <div className="card shadow--tl ">
                    <div className="card__image padding--lg">
                        <img
                            src="/img/csharp-logo.svg"
                            alt="Image alt text"
                            title="Logo Title Text 1"
                        />
                    </div>
                </div>
            </div>
            <div className="col col--2">
                <div className="card shadow--tl ">
                    <div className="card__image padding--lg">
                        <img
                            src="/img/react-logo.svg"
                            alt="Image alt text"
                            title="Logo Title Text 1"
                        />
                    </div>
                </div>
            </div>
        </Section >
    );
}

export default SkillSection;