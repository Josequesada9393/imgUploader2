import './imgDropper.css'
import img from '../../assets/image.svg'
import {useDispatch} from 'react-redux'
import {MoonLoader} from 'react-spinners';
import { loading, addFile} from '../../state/fileSlice';
import React, { useState } from 'react';
import { uploadFile } from '../../apiServices/apiServices';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

function ImgDropper() {
  const [isDragging, setIsDragging] = useState(false);
  const [dropLoad, setDropLoad] = useState(false);
  const imgURL = useSelector((state:RootState) => state.files.fileURL) as string;

console.log(imgURL, 'atdrop')

  const dispatch = useDispatch()

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = async (file:File) => {
    const formData = new FormData();
    formData.append('my_file', file);
    const response = await uploadFile(formData);
    console.log(response)
    dispatch(addFile(response))
    dispatch(loading(false)) 
  }
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file: File | null = await e.dataTransfer.files[0];
   
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0){
      if (file) {
        try {
          setDropLoad(true)
          setTimeout(() => {
            dispatch(loading(true))
            handleUpload(file);
            setDropLoad(false)
          }, 1000)
             
  
         } catch (error) {
          console.error('image not uploaded')
         }
      }
    }

  };

  return (

    <>
    <div
      className={`imgDropper container ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
    {
      dropLoad ?
      
      <MoonLoader/> 
      :
<>
 <img className='img' src={img} alt="" />
        <div className=''>
                <p className='innerText'>Drag & Drop your image here</p>
        </div>  
        </>
}  
  </div>
  </>
  );
}

export default ImgDropper;
