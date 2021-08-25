import React, {useState} from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoForm from './PersonalInfoForm';

export default function PersonalInfo(props) {
    const [stateData, setStateData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        linkedIn: '',
        portfolio: '',
        hideDisplayShowForm: true,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStateData(prevState => {
            return {
                ...prevState,
                [name]: value,
            };});        
    };

    const handleBtnClick = (e) => {
        e.preventDefault();
        if (e.target.name === 'form') {
            setStateData(prevState => {
                return {
                    ...prevState,
                    hideDisplayShowForm: false,
                };
            });
        } else {
            setStateData(prevState => {
                return {
                    ...prevState,
                    hideDisplayShowForm: true,
                };
            });
        }
    };

    const {previewMode} = props;
        return (
            <div>
                <PersonalInfoForm handleSubmit={handleBtnClick} handleChange={handleChange} data={stateData} previewMode={previewMode} />
                <PersonalInfoDisplay handleBtnClick={handleBtnClick} data={stateData} previewMode={previewMode} />
            </div>
        );
}