import React from 'react';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const UploadCourse = () => {

  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');

  const handleDescriptionChange = (value:string) => {
    setDescription(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'category') setCategory(value);
    if (name === 'price') setPrice(value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0 m-2 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-title">
              Course Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="course-title" type="text" placeholder="Introduction to Node.js"/>
          </div>
          <div className="w-full px-3 m-2 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-category">
              Category
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="course-category" name="category" type="text" placeholder="Web Development" value={category} onChange={handleInputChange}/>
          </div>
          <div className="w-full px-3 m-2 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-price">
              Price
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="course-price" name="price" type="text" placeholder="$99" value={price} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 m-2 ">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-videos">
              Upload Videos
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="course-videos" type="file" multiple/>
          </div>
        </div>
        <div className="w-full px-3 m-2 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="course-description">
            Description
        </label>
        <ReactQuill theme="snow" value={description} onChange={handleDescriptionChange} className="h-64 mb-12" />
        </div>
        <div className="flex justify-center m-2 ">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Upload Course
          </button>
        </div>
      </form>
    </div>
  )
}

export default UploadCourse;