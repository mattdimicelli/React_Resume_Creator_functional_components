import React, { useState } from 'react';
import AddButton from './AddButton';
import TitleBar from './TitleBar';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import CourseForm from './CourseForm';
import CourseDisplay from './CourseDisplay';
import uniqid from 'uniqid';

function Education(props) {
    const [stateData, setStateData] = useState({
        universities: {},
        courses: {},
    });

    function addUniversityHandler(e) {
        setStateData(prevState => {
            const copyOfUniversities = {...prevState.universities};
            const randomId = uniqid();
            copyOfUniversities[randomId] = {
                info: {
                    universityName: '',
                    city: '',
                    from: '',
                    to: '',
                    degree: '',
                    furtherAchievements: '',
                },
                showEducationForm: true,
            };
            return {
                ...prevState,
                universities: copyOfUniversities,
            };
        }); 
    }

    function addCourseHandler(e) {
        setStateData(prevState => {
            const copyOfCourses = {...prevState.courses};
            const randomId = uniqid();
            copyOfCourses[randomId] = {
                title: '',
                showCourseForm: true,
            };
            return {
                ...prevState,
                courses: copyOfCourses,
            };
        }); 
    }

    function handleEducationChange(e, id) {
        const {name, value} = e.target;
        setStateData(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            const info = university.info;
            info[name] = value;

            return {
                ...prevState,
                universities: universitiesCopy,
            };
        });
    }

    function handleCourseChange(e, id) {
        const {value} = e.target;
        setStateData(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.title = value;

            return {
                ...prevState,
                courses: coursesCopy,
            };
        });
    }

    function handleClickRemove(e, id) {
        e.preventDefault();
        setStateData(prevState => {
            const universitiesCopy = {...prevState.universities};
            delete universitiesCopy[id];
            return {
                ...prevState,
                universities: universitiesCopy,
            };
        });
    }

    function handleClickRemoveCourse(e, id) {
        e.preventDefault();
        setStateData(prevState => {
            const coursesCopy = {...prevState.courses};
            delete coursesCopy[id];
            return {
                ...prevState,
                courses: coursesCopy,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {id} = e.target;
        const universityInQuestion = stateData.universities[id];
        if (universityInQuestion.info.universityName === '' &&
         universityInQuestion.info.city === '' &&
          universityInQuestion.info.from === '' &&
           universityInQuestion.info.to === '' &&
            universityInQuestion.info.degree === '' &&
             universityInQuestion.info.furtherAchievements === '') {
            return;
        }
        setStateData(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            university.showEducationForm = false;
            return {
                ...prevState,
                universities: universitiesCopy,
            };
        });
    }

    function handleCourseSubmit(e) {
        e.preventDefault();
        const {id} = e.target;
        const courseInQuestion = stateData.courses[id];
        if (courseInQuestion.title === '') {
            return;
        }
        setStateData(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.showCourseForm = false;
            return {
                ...prevState,
                courses: coursesCopy,
            };
        });
    }

    function handleClickEditUniversity(e) {
        e.preventDefault();
        const {id} = e.target;
        setStateData(prevState => {
            const universitiesCopy = {...prevState.universities};
            const university = universitiesCopy[id];
            university.showEducationForm = true;
        
            return {
                ...prevState,
                universities: universitiesCopy,
            };
        });
    }

    function handleClickEditCourse(e) {
        e.preventDefault();
        const {id} = e.target;
        setStateData(prevState => {
            const coursesCopy = {...prevState.courses};
            const course = coursesCopy[id];
            course.showCourseForm = true;
        
            return {
                ...prevState,
                courses: coursesCopy,
            };
        });
    }

        const {previewMode} = props;
        const educationForms = Object.entries(stateData.universities).map(pair => {
            const [id, pair2] = pair;
            const {info, showEducationForm} = pair2;
            return ( <EducationForm
            id={id}
            info={info}
            showEducationForm={showEducationForm}
            previewMode={previewMode}
            key={id}
            handleChange = {handleEducationChange}
            handleCancel = {handleClickRemove}
            handleSubmit = {handleSubmit}
            /> );
        });

        const educationDisplays = Object.entries(stateData.universities).map(pair => {
            const [id, pair2] = pair;
            const {info, showEducationForm} = pair2;
            return (
                <EducationDisplay
                id={id}
                info={info}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showEducationForm}
                handleClickRemove={handleClickRemove}
                handleClickEditUniversity={handleClickEditUniversity}
                />
            );
        });

        const courseDisplays = Object.entries(stateData.courses).map(pair => {
            const [id, pair2] = pair;
            const {title, showCourseForm} = pair2;
            return (
                <CourseDisplay
                id={id}
                title={title}
                previewMode={previewMode}
                key={id}
                hideEditAndRemoveBtns={showCourseForm}
                handleClickRemove={handleClickRemoveCourse}
                handleClickEditCourse={handleClickEditCourse}
                />
            );
        });
        
       
        const courseForms = Object.entries(stateData.courses).map(pair => {
            const [id, pair2] = pair;
            const {title, showCourseForm} = pair2;
            return ( 
            <CourseForm
            id={id}
            title={title}
            showCourseForm={showCourseForm}
            previewMode={previewMode}
            key={id}
            handleChange = {handleCourseChange}
            handleRemove = {handleClickRemoveCourse}
            handleSubmit = {handleCourseSubmit}
            />
            );
        });
    

        return (
            <div>
                <TitleBar title='Education' />
                <div className='education-btns-container'>
                    <AddButton 
                    clickHandler={addUniversityHandler}
                    thingToAdd='University'
                     previewMode={previewMode} />

                 <AddButton
                    thingToAdd="Course"
                    previewMode={previewMode}
                    clickHandler={addCourseHandler} />
                </div>
                {educationForms}

                {courseForms}

                {educationDisplays}

                <p className='course-label'>{courseForms.length > 0 ? 'Additional Courses and Preparation:' : ''}</p>
                
                <ul className='course-displays'>
                    {courseDisplays}
                </ul>
                

            </div>    
        )    
}

export default Education;
