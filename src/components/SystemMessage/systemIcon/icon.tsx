import { FindIconUrl } from "@/utils/Constant";

interface ChipsProps {
    className?: string;
    handleClick: ()=>void
  }

export const CloseRed : React.FC<ChipsProps> = ({className ,handleClick} )=>{
    return (<div className={className} onClick={handleClick}>
       <img src={FindIconUrl("RedCross.svg")} alt="" />
    </div>)
}

export const CloseYellow : React.FC<ChipsProps> = ({className ,handleClick} )=>{
    return (<div className={className} onClick={handleClick} >
    <img src={FindIconUrl('YellowCrossIcon.svg')} alt="" />
    </div>)
}

export const CloseBlack : React.FC<ChipsProps> = ({className ,handleClick} )=>{
    return (<div className={className} onClick={handleClick} >
      <img src={FindIconUrl("Close.svg")} alt="" />
    </div>)
}


