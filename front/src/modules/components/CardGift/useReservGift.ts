import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { deleteGift, reserveGift } from "../../store/ThunkCreator";

type onClick = {
  onClick: () => void;
};

export const useReserveGift = (id: string) => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const arg = { id: id, slug: slug };

  const func = (arg: any) => {
    return () => {
      dispatch(reserveGift(arg));
      console.log("забронировани подарок", arg);
    };
  };
  const response: [onClick] = [{ onClick: func(arg) }];
  return response;
};
