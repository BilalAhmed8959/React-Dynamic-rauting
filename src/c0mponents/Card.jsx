const Card = ({src,title,description,price}) => {
  return (
    <div className="flex justify-center gap-12 my-4">
      <div className="border-2 border-black w-80 p-6 " >
        <img src={src} alt="" />
        <h2>{title}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
        <button className="text-center border border-black w-20 h-10 p-2 mt-3 bg-blue-800 text-white rounded-lg">ShoMore</button>
      </div>
    </div>
  )
}

export default Card
