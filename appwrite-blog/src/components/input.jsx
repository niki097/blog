import React from 'react'

const Input=React.forwardRef( function input({
 label, 
 type='text',
 className="",
 ...props
},ref)
{const id=userId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-2 ' htmlFor={id}>
                {label}
                </label>
                }
                <input type={type} className={`px-3 py-2 rounded-lg bg-white border border-gray-200 w-full text-sm 
                focus:outline-none focus:border-gray-400 ${className}`}
                ref={ref}
                {...props}
                id={id}
                />
        </div>
    )

})

export default Input