import Page from './components/Page';
import React, {useState} from 'react';
import './styles.css';


function App() {
  const [previewMode, setPreviewMode] = useState(false);

  const handleBtnClick = (e) => {
    let boolean;
    if (e.target.name === 'edit') boolean = false;
    if (e.target.name === 'preview') boolean = true;
    setPreviewMode(boolean);
}

  return (
    <div className='app'>
      <h1>RÉSUMÉ CREATOR</h1>
      <div className='button-wrapper'>
        <button name='edit' onClick={handleBtnClick}>Edit Résumé</button>
        <button name='preview' onClick={handleBtnClick}>Preview Résumé</button>
      </div>

      <Page previewMode={previewMode} />
    </div>
  );
}


export default App;
