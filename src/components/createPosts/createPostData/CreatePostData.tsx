'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ChipInput from './ChipInput';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: string;
}

const CreatePostData = () => {
  const [outsideFiles, setOutsideFiles] = useState<UploadedFile[]>([]);
  const outsideInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    files: FileList | null,
    setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>
  ) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const preview = URL.createObjectURL(file);

    setFiles([
      {
        id: preview,
        file,
        preview,
        type: file.type,
      },
    ]);
  };

  const removeUploadedFile = () => {
    setOutsideFiles([]);
  };

  const isImage = (type: string) => type.startsWith("image/");
  const isVideo = (type: string) => type.startsWith("video/");



/********select2 option******************* */


//   const [tags, setTags] = useState(["Coding", "HTML", "Website", "Web Design", "JS"]);
 const [tags, setTags] = useState<string[]>(["HTML", "CSS"]);
  const [input, setInput] = useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };





  return (
    <div className='create-post-sec mt-4 pb-4'>
      <div className='row'>
        <div className='col-lg-8 col-md-6 mb-md-0 mb-4 order-md-1 order-2'>
          <FloatingLabel controlId="floatingTextarea2" label="Write your story" className='mb-4'>
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '156px' }} className='resize-none' />
          </FloatingLabel>

          <FloatingLabel controlId="floatingSelect" label="Post Category" className='mb-4'>
            <Form.Select aria-label="Floating label select example">
              <option>Information Technology</option>
              <option value="1">Information Technology 1</option>
              <option value="2">Information Technology 2</option>
              <option value="3">Information Technology 3</option>
            </Form.Select>
          </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Enter tags" className={`floting-select-box position-relative ${ tags.length > 0 || input.length > 0 ? "label-active" : ""}`} >
                <div className='auto-box'>
                    <div className="tag-input-wrapper d-flex flex-wrap">
                        {tags.map((tag, index) => (
                        <div key={index} className="floting-box">
                            {tag}
                            <span className="cross-box" onClick={() => removeTag(index)}>
                            ✕
                            </span>
                        </div>
                        ))}

                        <input type="text" value={input} placeholder="" onChange={(e) => setInput(e.target.value)} onKeyDown={addTag} className="tag-input-field"/>
                    </div>
                </div>
            </FloatingLabel>

            
        </div>

        <div className='col-lg-4 col-md-6 mb-4 order-md-2 order-1'>
          <div className='upload-box-sec'>
            <div className='form-box d-flex flex-wrap gap-3'>
              {outsideFiles.length === 0 && (
                <div className='upload-box text-center' onClick={() => outsideInputRef.current?.click()} onDrop={(e) => { e.preventDefault(); handleFileUpload(e.dataTransfer.files, setOutsideFiles);}} onDragOver={(e) => e.preventDefault()}>
                  <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM22 16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H17V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21V17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H15V11C15 10.7348 15.1054 10.4804 15.2929 10.2929C15.4804 10.1054 15.7348 10 16 10C16.2652 10 16.5196 10.1054 16.7071 10.2929C16.8946 10.4804 17 10.7348 17 11V15H21C21.2652 15 21.5196 15.1054 21.7071 15.2929C21.8946 15.4804 22 15.7348 22 16Z" fill="#808188"/></svg> 
                        <span>Upload Photo/Video to share</span>
                  </div>

                  <input type='file' accept='image/*,video/*' ref={outsideInputRef} style={{ display: 'none' }} onChange={(e) => handleFileUpload(e.target.files, setOutsideFiles)} />
                </div>)}
                {outsideFiles.length > 0 && (
                <div className="uploaded-file-preview position-relative">
                    <button onClick={removeUploadedFile} className="btn btn-danger btn-sm position-absolute" >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 3.75H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H8.125C7.62772 1.25 7.15081 1.44754 6.79917 1.79917C6.44754 2.15081 6.25 2.62772 6.25 3.125V3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375C2.5 4.54076 2.56585 4.69973 2.68306 4.81694C2.80027 4.93415 2.95924 5 3.125 5H3.75V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75ZM7.5 3.125C7.5 2.95924 7.56585 2.80027 7.68306 2.68306C7.80027 2.56585 7.95924 2.5 8.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V3.75H7.5V3.125ZM15 16.25H5V5H15V16.25ZM8.75 8.125V13.125C8.75 13.2908 8.68415 13.4497 8.56694 13.5669C8.44973 13.6842 8.29076 13.75 8.125 13.75C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V8.125C7.5 7.95924 7.56585 7.80027 7.68306 7.68306C7.80027 7.56585 7.95924 7.5 8.125 7.5C8.29076 7.5 8.44973 7.56585 8.56694 7.68306C8.68415 7.80027 8.75 7.95924 8.75 8.125ZM12.5 8.125V13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75C11.7092 13.75 11.5503 13.6842 11.4331 13.5669C11.3158 13.4497 11.25 13.2908 11.25 13.125V8.125C11.25 7.95924 11.3158 7.80027 11.4331 7.68306C11.5503 7.56585 11.7092 7.5 11.875 7.5C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125Z" fill="#DF1738"/></svg>
                    </button>
                    {isImage(outsideFiles[0].type) && (
                        <img src={outsideFiles[0].preview} alt="Uploaded Preview" className="img-upload-box" />
                    )}
                    {isVideo(outsideFiles[0].type) && (
                    <video controls className="video-upload-box">
                      <source src={outsideFiles[0].preview} type={outsideFiles[0].type} />
                    </video>
                  )}

                </div>
              )}

            </div>
          </div>
          <div className='bt-box-upload mt-4 d-md-block d-none'>
            <Link href="" className='w-100 btn-theme btn-yellow submit-btn'>Continue</Link>
          </div>
        </div>

      </div>
        <div className='bt-box-upload mt-4 d-md-none d-block'>
        <Link href="" className='w-100 btn-theme btn-yellow submit-btn'>Continue</Link>
        </div>
    </div>
  );
};

export default CreatePostData;
