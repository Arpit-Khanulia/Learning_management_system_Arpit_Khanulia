

interface propsType {
    key: number|null;
    uploader_name: string|null;
    title: string|null;
    category: string|null;
    price: string|null;
    videos?: string[] | null;
}

const Table = (props:propsType) => {
  return (
    <>
        <tbody>
        {/* row 1 */}
        <tr>
            <th>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img
                    src="https://cdn-icons-png.flaticon.com/256/5875/5875129.png"
                    alt="Avatar Tailwind CSS Component"
                    />
                </div>
                </div>
                <div>
                {/* <div className="text-sm opacity-50">Title</div> */}
                <div className="font-bold">{props.title}</div>
                </div>
            </div>
            </td>
            <td>
            <span className="badge badge-ghost badge-sm">
                {props.category}
            </span>
            </td>
            <td>Not Rated Yet</td>
            <td>₹ {props.price}</td>
            <td>{props.videos?.length}</td>
            <th>
            <button className="btn btn-ghost btn-xs">edit</button>
            </th>
        </tr>
        </tbody>

    </>

  );
};

export default Table;
