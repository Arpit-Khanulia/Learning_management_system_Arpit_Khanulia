import { useMycoursesQuery } from "../../Services/Api";
import Loading from "../../Components/Loading";
import Table from "../../Components/Table";

interface singleCourseType {
  _id: string;
  tid: string | null;
  uploader_name: string | null;
  title: string | null;
  category: string | null;
  price: string | null;
  description: string | null;
  videos?: string[] | null;
  rating?: number[];
}

const TeacherHome = () => {
  let newdata: any;
  const { data, isLoading } = useMycoursesQuery();
  newdata = data;
  console.log("this is course data ", data);

  if (isLoading) return <Loading />;

  return (
    <div className="overflow-x-auto mt-12">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Total Videos</th>
            <th></th>
          </tr>
        </thead>

        {newdata?.courses.map((e: singleCourseType, i: any) => (
          <Table
            key={i}
            uploader_name = {e.uploader_name}
            title = {e.title}
            category = {e.category}
            price = {e.price}
            videos = {e.videos}
          />
        ))}
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Total Videos</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TeacherHome;
