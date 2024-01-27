import loader from "../assets/loader.gif";
export const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-bgPrimary">
        <div>
            <img src={loader} alt="" />
        </div>
    </div>
  )
}
