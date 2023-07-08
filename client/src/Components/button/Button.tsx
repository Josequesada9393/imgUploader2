import './Button.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { uploadFile } from '../../apiServices/apiServices';
import {useDispatch} from 'react-redux'
import { addFile, loading } from '../../state/fileSlice';
type Props = {}

function Button({}: Props) {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      dispatch(loading(true))
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }
      const formData = new FormData();
      formData.append('my_file', selectedFile);
      const response = await uploadFile(formData)
      if (response) {
        const data = await response;
        // Handle success response;
          dispatch(loading(false))
          dispatch(addFile(data))
      } else {
        // Handle error response
        console.error('Error uploading image:');

      }

    } catch (error) {
      // Handle network errors
      console.log(error, 'error uploading')
    }

  };

  const handleRemoveFile = () => {
      setSelectedFile(null);
      dispatch(addFile(''));
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
  };


  return (
    <>
    <div className="buttonContainer">
    <input
      type="file"
      id="file"
      className="file-input"
      onChange={handleFileChange}
    />
    {!selectedFile &&
    <label htmlFor="file" className="custom-file-input innerButton">
      {selectedFile ? '' : 'Choose a file'}
    </label>
    }
    {selectedFile && (
    <button className='uploadButton' onClick={handleFormSubmit}>Upload</button>
    )}
   
  </div>
  <label htmlFor="file" className="custom-file-input innerButton">
      {selectedFile && selectedFile.name.slice(0, 10) + '...'}
  </label>
  {selectedFile && (
      <button className='removeButton' onClick={handleRemoveFile}>X</button>
    )}
  </>
  )
}

export default Button