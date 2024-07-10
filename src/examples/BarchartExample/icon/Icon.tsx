import { FindIconUrl } from "@/utils/Constant";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
export const Grow: React.FC<IconProps> = ({ className, style }) => {
  return (
    <div className={className} style={style}>
      <img src={FindIconUrl("grow.svg")} alt=""/>
    </div>
  );
};
