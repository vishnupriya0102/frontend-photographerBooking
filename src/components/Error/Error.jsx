
const Error = ({errMessage}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="text-headingColor1 text-[20px] leading-[30px] font-semibold">
            {errMessage}
        </div>
    </div>
  )
}

export default Error
