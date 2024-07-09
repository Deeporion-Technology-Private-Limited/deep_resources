import { FindIconUrl } from "@/utils/Constant"

const DownArrowIcon = FindIconUrl("OutlineKeyboardArrowDown.svg");
const DownArrow = () => {
    return (
        <div>
            <img src={DownArrowIcon} alt="" />
        </div>
    )
}

export default DownArrow