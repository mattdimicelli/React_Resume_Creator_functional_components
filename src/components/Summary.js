import React, {useState} from 'react';
import TitleBar from './TitleBar';
import AddButton from './AddButton';
import KeyPointsDisplay from './KeyPointsDisplay';
import KeyPointsForm from './KeyPointsForm';
import HeadlineDisplay from './HeadlineDisplay';
import HeadlineForm from './HeadlineForm';
import uniqid from 'uniqid';


function Summary(props) {
    const [stateData, setStateData] = useState({
        headline: '',
        hideDisplayShowForm: true,
        keyPoints: {},
    });

    function handleChange(e) {
        setStateData(prevState => {
            return({
                ...prevState,
                headline: e.target.value,
            });
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStateData(prevState => {
            return({
                ...prevState,
                hideDisplayShowForm: false,
            });
        });
    }

    function handleClickEdit(e) {
        e.preventDefault();
        setStateData(prevState => {
            return({
                ...prevState,
                hideDisplayShowForm: true,
            });
        });
    }

    function addKeyPointBtnClickHandler(e) {
        e.preventDefault();
        setStateData(prevState => {
            const keyPointsCopy = {...prevState.keyPoints};
            const randomId = uniqid();
            keyPointsCopy[randomId] = {
                text: '',
                showKeyPointForm: true,
            };
            return {
                ...prevState,
                keyPoints: keyPointsCopy,
            };
        });
    }

    function handleSubmitKeyPointForm(e, keyPointText, id) {
            e.preventDefault();
            if (keyPointText === '') return;
            setStateData(prevState => {
                const keyPointsCopy = {...prevState.keyPoints};
                keyPointsCopy[id] = {
                    text: keyPointText,
                    showKeyPointForm: false,
                }
                return {
                    ...prevState,
                    keyPoints: keyPointsCopy,
                };
            });
    }

    function handleClickRemove(e, id) {
        e.preventDefault();
        setStateData(prevState => {
            const keyPointsCopy = {...prevState.keyPoints};
            delete keyPointsCopy[id];
            return {
                ...prevState,
                keyPoints: keyPointsCopy,
            };
        });
    }

    function handleClickEditKeyPoint(e, id, text) {
        e.preventDefault();
        setStateData(prevState => {
            const copyOfKeyPoints = {...prevState.keyPoints};
            copyOfKeyPoints[id] = {
                text: text,
                showKeyPointForm: true,
            };
            return {
                ...prevState,
                keyPoints: copyOfKeyPoints,
            };
        });
    }

        const {headline, hideDisplayShowForm, keyPoints} = stateData;
        const {previewMode} = props;
        const keyPointForms = Object.entries(stateData.keyPoints).map(idKeyPointObjPair => {
            const [id, keyPointObj] = idKeyPointObjPair;
            const {showKeyPointForm} = keyPointObj;
            return (
            <KeyPointsForm
                id={id}
                key={id}
                previewMode={previewMode}
                showKeyPointForm={showKeyPointForm}
                handleSubmitKeyPointForm={handleSubmitKeyPointForm}
                handleClickCancel={handleClickRemove}
                 />
            );
        })
        return (
            <div>
                <TitleBar title='Summary' />
                <HeadlineForm
                 headline={headline}
                previewMode={previewMode}
                 handleChange={handleChange}
                 handleSubmit={handleSubmit}
                 hideDisplayShowForm={hideDisplayShowForm}
                />
                <HeadlineDisplay
                headline={headline}
                previewMode={previewMode}
                hideDisplayShowForm={hideDisplayShowForm}
                handleClickEdit={handleClickEdit}
                 />
                <div className='add-kp-btn-container'>
                    <AddButton
                    thingToAdd='Key Point'
                    previewMode={previewMode}
                    clickHandler={addKeyPointBtnClickHandler}  />
                </div>
                
                {keyPointForms}
     
                <KeyPointsDisplay
                keyPoints={keyPoints}
                handleClickEdit={handleClickEditKeyPoint}
                handleClickRemove={handleClickRemove}
                previewMode={previewMode} />
            </div>
        );
}

export default Summary;
