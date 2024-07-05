import { BackGroundSVG, BackLineSVG, ClothesIcon, LineBox, SingleLineIcon, WomenIcon } from "../Icons"


const NoItemPage = () => {
    return (
        <div className="w-full h-full  flex items-center justify-center">
            <div>
                <div className=" relative w-[329.87px] h-[378.57px] ">
                    <div className="absolute bottom-0">
                        <BackGroundSVG />
                    </div>
                    <div className="absolute bottom-0 z-20 right-0">
                        <WomenIcon />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <BackLineSVG />
                    </div>
                    <div className="absolute flex left-3 bottom-0  ">
                            <div className=" bottom-0 right-0">
                                <LineBox  />
                            </div>
                            <div className=" bottom-0  left-0  ">
                                <LineBox />
                            </div>
                            <div className=" bottom-0  ">
                                <LineBox />
                            </div>
                        </div>
                    <div className="absolute bottom-0 z-10">
                        <ClothesIcon />
                    </div>
                    <div className="absolute bottom-0">
                        <SingleLineIcon />
                    </div>
                </div>
                <div className="w-full flex justify-center font-semibold pt-6">
                    <h1>No brand listed yet !</h1>
                </div>
            </div>

        </div>
    )
}

export default NoItemPage