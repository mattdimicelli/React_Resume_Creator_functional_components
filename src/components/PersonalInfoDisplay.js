import React from 'react';
import EditBtn from './EditBtn';

function PersonalInfoDisplay(props) {
        const {previewMode, handleBtnClick} = props;
        const {firstName, lastName, address, phone, email, linkedIn,
        portfolio, hideDisplayShowForm} = props.data;

        const style = hideDisplayShowForm ? {display: 'none'} : {};

        return (
            <div style={style}>
                <div className='personal-info-display'>
                    <h2>{firstName} {lastName}</h2>
                    <p>{address}</p>
                    <div className='contact-info'>
                        <span className='phone'>{phone}</span>
                        <span className='email'>{email}</span>
                        <span className='linked-in'>{linkedIn}</span>
                        <span>{portfolio}</span>
                    </div>
                    <hr />
                </div>
                <div className='personal-info-edit-btn-container'>
                    <EditBtn handleClick={handleBtnClick} previewMode={previewMode} />
                </div>
            </div>
        );
}

export default PersonalInfoDisplay;
