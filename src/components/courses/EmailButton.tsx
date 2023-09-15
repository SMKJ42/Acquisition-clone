import { useState } from "react";
import { NewBookRegistration } from "./NewBookRegistration";

export const EmailButton = () => {
  const [notifyModal, setNotifyModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="my-4 w-fit rounded-2xl bg-primary-200 px-8 py-2 text-2xl text-white hover:bg-primary-300"
        onClick={() => {
          console.log("setting modal true");
          setNotifyModal(true);
        }}
      >
        Notify me
      </button>
      {notifyModal && <NewBookRegistration setNotifyModal={setNotifyModal} />}
    </>
  );
};
