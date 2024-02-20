
const Card = (props:any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
        <h2 className="card-title">{props.tilte}</h2>
        <p>{props.uploader_name}</p>
        <p>{props.category}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Explore</button>
        </div>
    </div>
    </div>
  )
}

export default Card
