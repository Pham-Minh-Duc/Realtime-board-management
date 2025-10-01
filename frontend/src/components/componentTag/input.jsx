
export default function Input({label, name, type, placeholder, value, onChange, onFocus, onBlur, className, required = false}) {
    return(
        <div
            className={`${className}`}
        >
            {label && (
                <label className="block mb-0 text-xs font-medium text-gray-600 dark:text-gray-300">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required={required}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
}