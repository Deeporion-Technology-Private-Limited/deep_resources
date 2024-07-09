import { NoitemPageImage } from "../Icons"


const NoItemPage = () => {
    return (
        <div className="w-full h-full  flex items-center justify-center">
            <div>
               <NoitemPageImage/>
                <div className="w-full flex justify-center font-semibold pt-6">
                    <h1>No brand listed yet !</h1>
                </div>
            </div>

        </div>
    )
}

export default NoItemPage