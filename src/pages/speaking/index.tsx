import { type ReactElement, useState } from "react";
import type { NextPageWithLayout } from "../_app";
import { PublicLayout } from "~/components/layout/PublicLayout";

const Speaking: NextPageWithLayout = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [businessDescription, setBusinessDescription] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [eventDistribution, setEventDistribution] = useState<string[]>([]);
  const [audienceSize, setAudienceSize] = useState<string>("");
  const [requestPerson, setRequestPerson] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [statementOfUnderstanding, setStatementOfUnderstanding] =
    useState<string>("");

  const formSubmitHandler = () => {
    alert("form not handled");
    return;
  };

  return (
    <div className="flex min-h-[calc(100vh-13rem)] w-full justify-center ">
      <div className="flex w-full items-center p-12 sm:w-[700px] lg:w-[900px]">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1 className="text-center text-xl font-bold">SPEAKING REQUEST</h1>
          <div className="flex w-full flex-col items-center">
            <div className="my-8 h-[5px] w-[80px] bg-primary-200"></div>
          </div>
          <form
            className="grid grid-cols-1 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              formSubmitHandler();
            }}
          >
            <label className="flex w-full flex-col text-start text-lg">
              <span className="w-full font-bold">First Name *</span>
              <input
                className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1"
                placeholder="First Name"
                required
              />
            </label>
            <label className="flex w-full flex-col text-start text-lg">
              <span className="w-full font-bold">Last Name *</span>
              <input
                className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1"
                placeholder="Last Name"
                required
              />
            </label>
            <label className="flex w-full flex-col text-start text-lg">
              <span className="w-full font-bold">Email *</span>
              <input
                className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1"
                placeholder="example@example.com"
                required
              />
            </label>
            <label className="flex w-full flex-col text-start text-lg">
              <span className="w-full font-bold">Phone Number * </span>
              <input
                className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1"
                placeholder="+1 123-456-7890"
                required
              />
            </label>
            <label className="flex w-full flex-col text-start text-lg">
              <span className="w-full font-bold">Website * </span>
              <input
                className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1"
                placeholder="https://example.com"
                required
              />
            </label>
            <label className="mt-8 w-full text-center text-lg font-bold sm:col-span-2">
              <span className=" w-full">
                Business Description 1-3 Sentences
                <br />
                (who you help, what, how, how much) *
              </span>
              <textarea
                className="mt-2 h-32 w-full rounded-md border-[1px] border-primary-300 bg-gray-100 p-1 sm:col-span-2"
                placeholder="your response here"
                required
              />
            </label>

            <section className="my-4 flex w-full flex-col items-center sm:col-span-2">
              <span className="pb-2 text-lg font-bold">
                Type of event - aka - <br />
                how do Alex and Leila need to show up? *
              </span>
              <div className="flex w-full flex-col items-start sm:w-1/2">
                <div>
                  <input
                    type="radio"
                    id="in_person"
                    name="event_type"
                    value="in_person"
                    required
                  />
                  <label className="ml-2" htmlFor="in_person">
                    In Person
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="remote_live"
                    name="event_type"
                    value="remote_live"
                  />
                  <label className="ml-2" htmlFor="remote_live">
                    Remote Live
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="remote_recorded"
                    name="event_type"
                    value="remote_recorded"
                  />
                  <label className="ml-2" htmlFor="remote_recorded">
                    Remote Recorded
                  </label>
                </div>
              </div>
            </section>

            <section className="my-4 flex w-full flex-col items-center sm:col-span-2">
              <span className="pb-2 text-lg font-bold">
                How Will This Content Be Distributed? <br />
                (Check all that apply) *
              </span>
              <div className="flex w-full flex-col items-start sm:w-1/2">
                <div>
                  <input
                    type="checkbox"
                    id="youtube"
                    name="youtube"
                    value="Bike"
                  />
                  <label htmlFor="youtube">YouTube</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="podcast"
                    name="podcast"
                    value="Car"
                  />
                  <label htmlFor="podcast">Podcast</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="paid_members_area"
                    name="paid_members_area"
                    value="paid_members_area"
                  />
                  <label htmlFor="paid_members_area">Paid Members Area</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="recording_for_sale"
                    name="recording_for_sale"
                    value="recording_for_sale"
                  />
                  <label htmlFor="recording_for_sale">Recording For Sale</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="free_group"
                    name="free_group"
                    value="free_group"
                  />
                  <label htmlFor="free_group">Free Group</label>
                </div>
              </div>
            </section>

            <div className="mb-8 mt-4 flex flex-col items-center sm:col-span-2">
              <label className="flex flex-col items-center sm:col-span-2">
                <span className="pb-2 text-lg font-bold">
                  Current average audience size?
                </span>
                <select className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1">
                  <option value={"0-100"}>0-100</option>
                  <option value={"100-500"}>100-500</option>
                  <option value={"500-2,000"}>500-2,000</option>
                  <option value={"2,000-5,000"}>2,000-5,000</option>
                  <option value={"5,000-10,000"}>5,000-10,000</option>
                  <option value={"10,000+"}>10,000+</option>
                </select>
              </label>
            </div>

            <section className="mb-8 flex w-full flex-col items-center sm:col-span-2">
              <span className="text-lg font-bold">Who is speaking? *</span>
              <div className="flex flex-col items-start">
                <div>
                  <input
                    type="radio"
                    id="leila"
                    name="request_person"
                    value="leila"
                    required
                  />
                  <label className="ml-2" htmlFor="leila">
                    I would like Leila alone to speak
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="alex"
                    name="request_person"
                    value="alex"
                  />
                  <label className="ml-2" htmlFor="alex">
                    I would like Alex alone to speak
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="both"
                    name="request_person"
                    value="both"
                  />
                  <label className="ml-2" htmlFor="both">
                    I would like BOTH Leila & Alex to speak
                  </label>
                </div>
              </div>
            </section>

            <div className="w-full sm:col-span-2">
              <label className="flex w-full flex-col items-center">
                <span className="w-3/4 rounded-md border-[1px] border-primary-300 bg-gray-100 p-1 pb-2 text-lg font-bold ">
                  Day of Event *
                </span>
                <input type="date" />
              </label>
            </div>

            <div className="flex w-full flex-col items-center sm:col-span-2">
              <div className="my-8 h-[5px] w-[80px] bg-primary-200"></div>
            </div>
            <div className="flex justify-center sm:col-span-2">
              <p className="text-sm font-bold">
                I understand that in exchange for speaking services, the Event
                Organizer Fee of $100,000 50% due at signing and 50% due 2 weeks
                prior to event date. All payments are in US dollars. The Company
                may cancel any time until the final payment has been made.
                Should the speakers become ill or unable to attend for other
                reasons, all fees will be returned.*
              </p>
            </div>

            <section className="w-full sm:col-span-2">
              <div className="flex flex-col items-start">
                <div className="p-4 pt-8">
                  <input
                    type="radio"
                    id="i_understand"
                    name="statement_of_understanding"
                    value="i_understand"
                    required
                  />
                  <label className="mx-2" htmlFor="i_understand">
                    <span className="font-bold italic">
                      Yes, I understand.&nbsp;
                    </span>
                    I also understand that despite this, they may still not be
                    able to make my engagement, and I will not take this
                    personally.
                  </label>
                </div>

                <div className="px-4 pb-8">
                  <input
                    type="radio"
                    id="i_do_not_understand"
                    name="statement_of_understanding"
                    value="i_do_not_understand"
                  />
                  <label className="mx-2" htmlFor="i_do_not_understand">
                    <span className="font-bold italic">
                      No, I did not know this.
                    </span>
                  </label>
                </div>
                <p className="font-light italic">
                  Note: Please do not submit the form, unless you are
                  pre-authorized. Ex: Charities, Non-Profit, Social Causes Alex
                  & Leila support, OR an enormous audience that you believe will
                  provide significant exposure for their cause of helping
                  entrepreneurs.
                </p>

                <div className="flex w-full flex-col items-center sm:col-span-2">
                  <div className="my-8 h-[5px] w-[80px] bg-black"></div>
                </div>

                <div className="flex w-full justify-center sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-2xl bg-primary-200 px-8 py-4 text-center text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

Speaking.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Speaking;
