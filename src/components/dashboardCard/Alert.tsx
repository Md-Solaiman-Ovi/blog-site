/* eslint-disable @typescript-eslint/no-explicit-any */
const Alert = ({ showAlert, setShowAlert }: any) => {
  return (
    <div
      className={`mt-4 mx-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative  ${
        showAlert == true ? "visible " : "invisible "
      }`}
      role="alert"
    >
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline"> New user has been created.</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-green-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => setShowAlert(false)}
        >
          <title>Close</title>
          <path
            fillRule="evenodd"
            d="M2.293 2.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
