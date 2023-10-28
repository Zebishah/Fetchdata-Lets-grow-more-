import React from 'react'

const Card = (props) => {
    return (
        <div className=" max-w-sm bg-white border w-[30%] border-gray-200 rounded-lg shadow-sm shadow-black h-full" key={props.index}>
            <div className="flex justify-end px-4 pt-4">
                <p className='font-custom text-black text-sm'>{props.Id}</p>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={props.Src}
                    alt="user"
                />
                <h5 className="mb-1 text-xl font-custom font-medium text-gray-900 dark:text-white">
                    {props.Fname + props.Lname}
                </h5>
                <span className="text-sm font-custom text-gray-500 dark:text-gray-400">
                    {props.email}
                </span>

            </div>
        </div>

    )
}

export default Card