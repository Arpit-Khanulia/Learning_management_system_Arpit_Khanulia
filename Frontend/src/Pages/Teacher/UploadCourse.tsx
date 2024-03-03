import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../Store/Hooks";
import { useUploadCourseMutation } from "../../Services/Api";
import { useMycoursesQuery } from "../../Services/Api";


interface myFormDataType{

    courseTitle:string,
    category:string,
    coursePrice:string,
    description:string,
    file: FileList | null
}

interface uploadCourse {
    tid: string;
    uploader_name: string;
    title: string;
    category: string;
    price: string;
    description: string;
    videos?: FileList | null;
}

const initialmyFormData: myFormDataType = {
    courseTitle: "",
    category: "",
    coursePrice: "",
    description: "",
    file: null
};


function UploadCourse() {
    const [myFormData,setmyFormData] = useState(initialmyFormData);
    const [isSelect,setIsSelect] = useState(false);
    const user = useAppSelector(state=>state.saveUserAndToken.user);
    const [newcourse,{isLoading,isSuccess}] = useUploadCourseMutation();
    const {refetch} = useMycoursesQuery();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
        console.log(e.target.name);
        setmyFormData({...myFormData,[e.target.name]:e.target.value })
        
    }

    const handleSelect = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setIsSelect(true);
        const files = e.target.files;
        setmyFormData({...myFormData,file:files})
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault();
        const newCourse: uploadCourse = {
            tid: user._id,
            uploader_name: user.name,
            title:myFormData.courseTitle,
            category:myFormData.category,
            price: myFormData.coursePrice,
            description: myFormData.description,
            videos: myFormData.file,
        }

        await newcourse(newCourse);
        setIsSelect(false);
        setmyFormData(initialmyFormData);
        refetch();
        console.log('submited');
      }
      
      useEffect(()=>{
        if(isSuccess) alert('Course Uploaded')
      },[isSuccess])

    console.log(myFormData);
    

  return (
    <div className="flex flex-col  sm:flex-row items-center  justify-start bg-base-100 m-4 ">
      <div className="mx-auto sm:w-2/3  w-full ">
        <form onSubmit={handleSubmit} className="py-4 px-9">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-neutral-content]"
            >
              Course Title
            </label>
            <input
              type="title"
              name="courseTitle"
              id="title"
              value={myFormData.courseTitle}
              onChange={handleChange}
              placeholder="Title"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="mb-3 block text-base font-medium text-neutral-content]"
            >
              Category
            </label>
            <input
              type="category"
              name="category"
              value={myFormData.category}
              onChange={handleChange}
              id="category"
              placeholder="Category"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="mb-3 block text-base font-medium text-neutral-content]"
            >
              Course Price
            </label>
            <input
              name="coursePrice"
              id="price"
              value={myFormData.coursePrice}
              onChange={handleChange}
              placeholder="Price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-neutral-content">
              Upload Files
            </label>

            <div className="mb-8">
              <input onChange={handleSelect} type="file" name="file" id="file" className="sr-only" multiple />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                
                  <span className="mb-2 block text-xl font-semibold text-neutral-content">
                    { !isSelect ? 'Select Course Videos':`${myFormData.file?.length} Files Selected`}
                  </span>
                
                  <span className="mt-2 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-neutral-content">
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              { isLoading ? 'Uploading...':'upload'}
            </button>
          </div>
        </form>
      </div>
      <div className="sm:w-1/2 sm:mr-8 sm:mb-36 m-4 w-full sm:w-full" style={{height:"60vh"}}>
        <label
          htmlFor="email"
          className="mb-3 sm:mb-2 ml-3 block text-base font-medium text-neutral-content]"
        >
          Description
        </label>
        <ReactQuill theme="snow" onChange={(value) => setmyFormData({...myFormData, description: value})} className="h-full w-full" />
      </div>
    </div>
  );
}

export default UploadCourse;
