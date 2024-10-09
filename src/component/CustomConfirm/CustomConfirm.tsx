import "./CustomConfirm.css";

type PropsType = {
  message: string;
  onClickOk: () => void;
  onClickCancel: () => void;
};

function CustomConfirm({ message, onClickOk, onClickCancel }: PropsType) {
  return (
    <div className="custom-confirm">
      <span>{message}</span>
      <div>
        <button onClick={onClickCancel}>취소</button>
        <button onClick={onClickOk} autoFocus>
          확인
        </button>
      </div>
    </div>
  );
}

export default CustomConfirm;
