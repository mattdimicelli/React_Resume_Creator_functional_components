import React from 'react';
import PersonalInfo from './PersonalInfo';
import Summary from './Summary';
import Education from './Education';
import WorkExperience from './WorkExperience';

function Page(props) {
    const {previewMode} = props;
    return (
        <div className='page'>
            <PersonalInfo previewMode={previewMode} />
            <Summary previewMode={previewMode} />
            <Education previewMode={previewMode} />
            <WorkExperience previewMode={previewMode} />
        </div>
    );
}

export default Page;
