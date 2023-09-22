interface PropsType{
    text:String
}

const Hover = ({text}:PropsType) => {
  return (
    <div className="absolute mt-20 hidden text-xs group-hover:flex justify-center items-center text-white border border-white border-opacity-10 p-1 bg-white bg-opacity-10 rounded-md">
    <span className="">{text}</span>
    </div>
  )
}

export default Hover
