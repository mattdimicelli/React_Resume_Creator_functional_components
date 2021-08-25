import React, {useState} from 'react';
import TitleBar from './TitleBar';
import AddButton from './AddButton';
import WorkExperienceForm from './WorkExperienceForm';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import uniqid from 'uniqid';

function WorkExperience(props) {
    const [workExperiences, setWorkExperiences] = useState({});
   
    function handleWorkExperienceChange(e, id) {
        const {name, value} = e.target;
        setWorkExperiences(prevState => {
            const workExperiencesCopy = {...prevState};
            const workExperience = workExperiencesCopy[id];
            const info = workExperience.info;
            info[name] = value;

            return workExperiencesCopy;
        });
    }

    function addWorkExperienceHandler(e) {
        setWorkExperiences(prevState => {
            const copyOfWorkExperiences = {...prevState};
            const randomId = uniqid();
            copyOfWorkExperiences[randomId] = {
                info: {
                    companyName: '',
                    city: '',
                    from: '',
                    to: '',
                    role: '',
                    furtherAchievements: '',
                },
                showWorkExperienceForm: true,
            };
            return copyOfWorkExperiences;
        }); 
    }

    function handleClickRemove(e, id) {
        e.preventDefault();
        setWorkExperiences(prevState => {
            const workExperiencesCopy = {...prevState};
            delete workExperiencesCopy[id];
            return workExperiencesCopy;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {id} = e.target;
        const workExperienceInQuestion = workExperiences[id];
        if (workExperienceInQuestion.info.companyName === '' &&
        workExperienceInQuestion.info.city === '' &&
        workExperienceInQuestion.info.from === '' &&
        workExperienceInQuestion.info.to === '' &&
        workExperienceInQuestion.info.role === '' &&
        workExperienceInQuestion.info.furtherAchievements === '') {
            return;
        }
        setWorkExperiences(prevState => {
            const workExperiencesCopy = {...prevState};
            const workExperience = workExperiencesCopy[id];
            workExperience.showWorkExperienceForm = false;
            return workExperiencesCopy;
        });
    }

    function handleClickEdit(e) {
        e.preventDefault();
        const {id} = e.target;
        setWorkExperiences(prevState => {
            const workExperiencesCopy = {...prevState};
            const workExperience = workExperiencesCopy[id];
            workExperience.showWorkExperienceForm = true;
        
            return workExperiencesCopy;
        });
    }

    const {previewMode} = props;
    const workExperienceForms = Object.entries(workExperiences).map(pair => {
        const [id, pair2] = pair;
        const {info, showWorkExperienceForm} = pair2;
        return (
            <WorkExperienceForm
            id={id}
            info={info}
            showWorkExperienceForm={showWorkExperienceForm}
            previewMode={previewMode}
            key={id}
            handleChange = {handleWorkExperienceChange}
            handleCancel = {handleClickRemove}
            handleSubmit = {handleSubmit}
            /> );
        });

    const workExperienceDisplays = Object.entries(workExperiences).map(pair => {
        const [id, pair2] = pair;
        const {info, showWorkExperienceForm} = pair2;
        return (
                <WorkExperienceDisplay
                id={id}
                info={info}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showWorkExperienceForm}
                handleClickRemove={handleClickRemove}
                handleClickEdit={handleClickEdit}
                />
            );
        });

    return (
            <div>
                <TitleBar title='Work Experience' />
                
                <div className='add-work-experience-btn-container'>
                    <AddButton
                    clickHandler={addWorkExperienceHandler}
                    thingToAdd='Work Experience'
                    previewMode={previewMode} />
                </div>

                {workExperienceForms}

                {workExperienceDisplays}
            </div>
        );
}

export default WorkExperience;
