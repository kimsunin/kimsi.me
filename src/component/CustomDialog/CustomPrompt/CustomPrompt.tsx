"use client";
import React from "react";
import "./CustomPrompt.css";

type PropsType = {
  message: string;
  onClickOk: (input: string) => void;
  onClickCancel: () => void;
};

function CustomPrompt({ message, onClickOk, onClickCancel }: PropsType) {
  const [value, setValue] = React.useState("");

  return (
    <div className="custom-prompt">
      <span>{message}</span>
      <input
        value={value}
        type="password"
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <button onClick={onClickCancel}>취소</button>
        <button onClick={() => onClickOk(value)}>확인</button>
      </div>
    </div>
  );
}

export default CustomPrompt;
