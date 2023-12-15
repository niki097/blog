import React from 'react'

function Select({
    options,
    label,
    className="",
    ...props
}, ref) {
    const id=userId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''>
            </label>}
            <select>
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white border border-gray-200 w-full text-sm 
                focus:outline-none focus:border-gray-400 ${className}`}
            {options?.map((option)=>(
                <option Key={option} value={option}>
                    {option}
                </option>
            ))}
            </select>
</div>
  )
}
export default Select