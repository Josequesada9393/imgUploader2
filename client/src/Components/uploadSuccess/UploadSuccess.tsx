import './UploadSuccess.css'
import image from '../../assets/circlecheck.png'
import {useSelector} from 'react-redux'
import { RootState } from '../../state/store'
import { useState } from 'react';
import copy from 'copy-to-clipboard'

type Props = {
}

function UploadSuccess({}: Props) {

  const [copyProcess, setCopyProcess] = useState(false);
  const imgURL = useSelector((state: RootState) => state.files.fileURL) as string | '';


const copyToClipboard = () => {
    copy(imgURL);
    setCopyProcess(true);
    setTimeout(() => {
      setCopyProcess(false)
    }, 1000)
}

  return (
    <>
    {
      imgURL &&
    <div className='containerUpload'>
        <div className='containerCheck'>
            <img src={image} alt="" />
        </div>
        <div className='containerText'>
            <p className='uploadText'>Uploaded Successfully!</p>
        </div>
        <div className='containerImage'>
            <img src={imgURL} alt="" />
        </div>
        <div className='containerInput'>

        <p className='textToCopy'>{imgURL ? imgURL.slice(0, 56) + '...' : 'no image added'}</p>
          <button className='buttonCopy' onClick={copyToClipboard}>
            <label className='buttonLabel' htmlFor="buttonCopy">Copy Link</label>
          </button>
        
        </div>
        {
          
  copyProcess &&
        <p className='copySuccess'>copied to clipboard!</p>

           }

    </div>
}
    </>
  )
}

export default UploadSuccess