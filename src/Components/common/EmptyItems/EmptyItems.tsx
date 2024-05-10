import { Button } from "antd";
import { useNavigate } from "react-router";
import "./EmptyItems.scss"
const EmptyItems = ({
  titleEmpty,
  navigation,
}: {titleEmpty: string, navigation:string}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="empty-items">
        <h2 className="title-empty">{titleEmpty}</h2>
        <Button
          type="primary"
          danger
          shape="round"
          size="large"
          onClick={() => navigate(navigation)}
        >
          Return To Shop
        </Button>
      </div>
    </>
  );
};

export default EmptyItems