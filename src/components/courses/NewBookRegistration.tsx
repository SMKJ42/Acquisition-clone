const handleFormSubmit = () => {
  alert("not handled");
};

export const NewBookRegistration = (props: {
  setNotifyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setNotifyModal } = props;
  return (
    <div className="z-100 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="flex h-fit bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="relative h-6 w-6 text-red-600"
          onClick={() => setNotifyModal(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <label>Email: </label>
          <input type="email" placeholder="example@example.com"></input>
          <button type="submit">Sign up for e-mail</button>
        </form>
      </div>
    </div>
  );
};
