import { useNavigate } from "react-router-dom";

export const useCustomeNavigate = (path: string, replase: boolean) => {
  const navigate = useNavigate();
  function handler() {
    setTimeout(() => {
      navigate(path, { replace: replase });
    }, 500);
  }
  return [{ onClick: handler }];
};
