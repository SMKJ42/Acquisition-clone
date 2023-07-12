import Image from "next/image";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import {
  type NewClientInterface,
  setClientType,
  resetClient,
  setCurrentPage,
} from "~/redux/slice/newClientSlice";
import { StartBusiness } from "./sub/StartBusiness";
import { useEffect } from "react";

export const ClientAquisition = () => {
  const dispatch = useAppDispatch();
  const newClient: NewClientInterface = useAppSelector(
    (state) => state.newClient
  );
  const { currentPage } = newClient;

  useEffect(() => {
    return () => {
      dispatch(resetClient());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {currentPage === "index" && <ClientStart />}
      {currentPage === "start_business" && <StartBusiness />}
    </>
  );
};

function ClientStart() {
  const dispatch = useAppDispatch();
  const newClient: NewClientInterface = useAppSelector(
    (state) => state.newClient
  );

  const { clientType } = newClient;

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-3/4 flex-col items-center rounded-lg bg-white text-center shadow-2xl">
        <div>
          <p className="mt-2">Which best describes you?</p>
        </div>
        <div className=" flex w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (clientType === null) {
                alert("Please select an option");
              }
              if (clientType === "start")
                dispatch(setCurrentPage("start_business"));
              if (clientType === "own")
                dispatch(setCurrentPage("own_business"));
            }}
            className="flex w-full flex-col items-center"
          >
            <div className=" flex w-full px-8 py-4">
              <div className="flex w-full justify-around gap-4 pb-4">
                <div
                  className={`flex w-6/12 flex-col items-center rounded-md border border-slate-200 p-4 shadow-lg hover:bg-primary-300 ${
                    clientType === "own" ? "bg-primary-300" : ""
                  }`}
                  onClick={() => dispatch(setClientType("own"))}
                >
                  <label>I own a business</label>
                  <Image
                    src="https://files.jotform.com/jufs/alexhormozi/form_files/ACQ_Web_Home-Icon-OwnBusiness.637b76249253e8.79604507.png"
                    alt="business owner icon"
                    width={100}
                    height={100}
                  ></Image>
                  <input
                    className="hidden"
                    onClick={() => dispatch(setClientType("own"))}
                    type="radio"
                  />
                </div>
                <div
                  className={`flex w-6/12 flex-col items-center rounded-md border border-slate-200 p-4 shadow-lg hover:bg-primary-300 ${
                    clientType === "start" ? "bg-primary-300" : ""
                  }`}
                  onClick={() => dispatch(setClientType("start"))}
                >
                  <label>I want to start a business</label>
                  <Image
                    src="https://files.jotform.com/jufs/alexhormozi/form_files/ACQ_Web_Home-Icon-StartBusiness.637b76b90df1b9.55528071.png"
                    alt="start business icon"
                    width={100}
                    height={100}
                  ></Image>
                  <input
                    className="hidden"
                    type="radio"
                    onClick={() => dispatch(setClientType("start"))}
                  />
                </div>
              </div>
            </div>

            <button className="flex w-full justify-center rounded-b-md bg-primary-200 p-2 text-white hover:bg-primary-300">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
