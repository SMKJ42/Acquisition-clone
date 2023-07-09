import Image from "next/image";
import { useAppSelector } from "~/redux/hooks";
import {
  setProblem,
  type NewClientInterface,
} from "~/redux/slice/newClientSlice";

export const StartBusiness = () => {
  const newClient: NewClientInterface = useAppSelector(
    (state) => state.newClient
  );
  const { problem } = newClient;

  return (
    <div>
      <div>
        <h2>What problem can I help you solve?</h2>
        <p>(I&apos;ll try and send you stuff to help)</p>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            if (problem === null) {
              alert("Please select an option");
            }
            e.preventDefault();
          }}
        >
          <label>I own a business</label>
          <div>
            <Image
              src="https://files.jotform.com/jufs/alexhormozi/form_files/ACQ_Web_Home-Icon-OwnBusiness.637b76249253e8.79604507.png"
              alt="business owner icon"
              width={100}
              height={100}
            ></Image>
            <input onClick={() => setProblem("own")} type="radio" />
          </div>
          <div>
            <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};
