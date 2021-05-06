import { getStates } from './utils';

const states = getStates();

export default function State({ value, onChange }) {
  return (
    <div>
      <label
        htmlFor="state"
        className="block text-sm font-medium text-gray-700"
      >
        Select State
      </label>
      <select
        required
        id="state"
        name="state"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a State</option>
        {states.map((state) => {
          return (
            <option key={state.stateId} value={state.stateId}>
              {state.stateName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
