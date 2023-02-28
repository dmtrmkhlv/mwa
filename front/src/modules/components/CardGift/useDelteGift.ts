import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { deleteGift } from "../../store/ThunkCreator";

type onClick = {
  onClick: () => void;
};

export const useDeleteGift = (id: string) => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const arg = { id: id, slug: slug };

  const func = (arg: any) => {
    return () => {
      dispatch(deleteGift(arg));
    };
  };
  const response: [onClick] = [{ onClick: func(arg) }];
  return response;
};
