import React from 'react';
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';


function PersonalInfoForm(props) {

        const {firstName, lastName, address, phone, email,
        linkedIn, portfolio, hideDisplayShowForm,} = props.data;

        const {handleChange, handleSubmit, previewMode} = props;

        let style = hideDisplayShowForm ? {} : {display: 'none'};
        if (previewMode) style = {display: 'none'};

        return (
            <form className='personal-info-form' name='form' style={style} onSubmit={handleSubmit}>
                <TextInput name='firstName' handleChange={handleChange} value={firstName} placeholder='First Name' />
                <TextInput name='lastName' handleChange={handleChange} value={lastName} placeholder='Last Name' />
                <TextInput name='address' handleChange={handleChange} value={address} placeholder='Address' />
                <TextInput name='phone' handleChange={handleChange} value={phone} placeholder='Phone' />
                <TextInput name='email' handleChange={handleChange} value={email} placeholder='Email' />
                <TextInput name='linkedIn' handleChange={handleChange} value={linkedIn} placeholder='LinkedIn URL' />
                <TextInput name='portfolio' handleChange={handleChange} value={portfolio} placeholder='Portfolio URL' />
                <SubmitBtn  />
            </form>
        )
}

export default PersonalInfoForm;
