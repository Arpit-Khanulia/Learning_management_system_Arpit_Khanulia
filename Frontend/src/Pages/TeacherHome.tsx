import Card from "../Components/Card"
import { useMycoursesQuery } from "../Services/Api"
import Loading from "../Components/Loading"

interface singleCourseType {
    _id:string,
    tid: string|null;
    uploader_name: string|null;
    title: string|null;
    category: string|null;
    price: number|null;
    description: string|null;
    videos?: string[];
    rating?: number[];
  }


const TeacherHome = () => {

  let newdata:any
  const {data,isLoading} = useMycoursesQuery();
  newdata = data;
  console.log('this is course data ',data);

  if(isLoading) <Loading/>

  return (
    
    <div className="grid grid-cols-3 gap-4">

      {newdata?.courses.map((e:singleCourseType,i:any) => (
        <Card
        key = {i}
        uploader_name = {e.uploader_name}
        title = {e.title}
        category = {e.category}    
        />
      ))}
    </div>
  )
}

export default TeacherHome
