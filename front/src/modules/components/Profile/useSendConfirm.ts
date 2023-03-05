import { useEffect, useMemo } from "react";
import { useAppDispatch } from "../../hooks";
import { sendConfirmLink } from "../../store/ThunkCreator";

export const useSendConfirm = (email: string) => {
  // const memoUpdateUserProfile = useMemo(
  //   () => updateUserProfile(userProfileData),
  //   [userProfileData]
  // );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(sendConfirmLink({ email: email }));
  }, [dispatch, email]);

  return;
};
