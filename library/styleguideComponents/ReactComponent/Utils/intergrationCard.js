import React from 'react';
import Card from '../../../../src/components/Card';
import './styles.css';
import PageObjectImage from './pageObjectImage';
import TutorialImage from './tutorialImage';
import FlaskIcon from './flaskIcon';
import GraduationCapIcon from './graduationCapIcon';

export default function IntegrationCard({ results, type }) {
    const getTypeText = () => {
        if (type === 'page-object') {
            return 'Page Object';
        }
        return 'Tutorial';
    };

    const FooterIcon = () => {
        if (type === 'page-object') {
            return <FlaskIcon />;
        }
        return <GraduationCapIcon />;
    };

    const Image = () => {
        if (type === 'page-object') {
            return <PageObjectImage />;
        }
        return <TutorialImage />;
    };

    return results.map(({ data, id }) => (
        <a href={data.url.url} className="react-rainbow-utils-link">
            <Card
                className="react-rainbow-utils-item"
                key={id}
                footer={(
                    <div className="react-rainbow-utils-item-page-object_content">
                        <FooterIcon />
                        <p className="react-rainbow-utils-item_header" >{`Go to ${data.name[0].text} ${getTypeText()}`}</p>
                    </div>
                )}>
                <div className="react-rainbow-utils-item_img-container">
                    <Image />
                </div>
            </Card>
        </a>
    ));
}
