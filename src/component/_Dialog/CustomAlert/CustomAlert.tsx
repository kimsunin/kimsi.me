import "./CustomAlert.css";

type PropsType = {
  message: string;
  onClickOk: () => void;
};

function CustomAlert({ message, onClickOk }: PropsType) {
  return (
    <div className="custom-alert">
      <span>{message}</span>
      <div>
        <button onClick={onClickOk} autoFocus>
          확인
        </button>
      </div>
    </div>
  );
}

export default CustomAlert;
