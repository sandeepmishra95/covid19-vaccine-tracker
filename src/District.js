import { useMemo } from 'react';
import { getDistricts } from './utils';

export default function District({ state, value, onChange }) {
  const districts = useMemo(() => getDistricts(state), [state]);
  return (
    <div>
      <label
        htmlFor="district"
        className="block text-sm font-medium text-gray-700"
      >
        Select District
      </label>
      <select
        required
        id="district"
        name="district"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a District</option>
        {districts.map((district) => {
          return (
            <option key={district.districtId} value={district.districtId}>
              {district.districtName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
