import axios from "axios";
function ToggleButton({ e, handleChange }) {
  console.log(e.status);

  return (
    <div>
      <label className="flex items-center justify-center">
        <input
          type="checkbox"
          disabled={e.status === "VALIDATED" ? true : false}
          className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
          defaultChecked={e.status === "VALIDATED"}
          onChange={async (event) => {
            const data = new FormData();
            data.append(
              "status",
              e.status !== "VALIDATED" ? "VALIDATED" : "WAITING_FOR_VALIDATION"
            );

            axios.patch(`/api/estimate/${e.id}`, data).then(handleChange);
          }}
        />

        <span className="text-gray-700 dark:text-white font-normal"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
