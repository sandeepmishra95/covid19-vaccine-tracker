export default function SearchBy({ value, onChange }) {
    return (
      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <span className="block text-sm text-gray-900">Search By</span>
        </div>
        <div className="flex items-center ml-4">
          <input
            onChange={onChange}
            id="pincode"
            value="pincode"
            name="searchBy"
            type="radio"
            checked={value === 'pincode'}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label htmlFor="pincode" className="ml-2 block text-sm text-gray-900">
            PinCode
          </label>
        </div>
        <div className="flex items-center ml-4">
          <input
            onChange={onChange}
            id="district"
            value="district"
            name="searchBy"
            type="radio"
            checked={value === 'district'}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label htmlFor="district" className="ml-2 block text-sm text-gray-900">
            District
          </label>
        </div>
      </div>
    );
  }
  