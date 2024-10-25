const Card = ({src,title,description,price}) => {
  return (
    <div className="flex justify-center gap-12 my-4">
      <div className="border-2 border-black w-80 p-6 " >
        <img src={src} alt="" />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
