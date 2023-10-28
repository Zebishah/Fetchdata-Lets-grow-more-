import React, { useState } from 'react'
import Card from './Card';
import { Navbar } from './Navbar';


const FetchData = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let data = [];
    let Fetch = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://reqres.in/api/users?page=1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setUserData(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Navbar Fetch={Fetch} />
            <div className='w-full overflow-x-hidden flex flex-col justify-center items-center gap-y-6 mt-20 h-full'>
                <h1 className='text-[#ff6464] text-3xl font-custom'>Fetching Api data Website </h1>
                <div className='w-[85%] flex flex-col gap-y-6 justify-center items-center'>

                    <h1 className='text-[#ff6464] text-xl font-custom'>Data Fetched From Api</h1>
                    <div className=' gap-4 w-[100%] flex flex-row flex-wrap p-4 rounded-lg h-full justify-center items-center 
                    '>
                        {userData.length === 0 && <h1 className=' text-white font-custom text-xl text-center items-center p-4w-full '>No Tasks to display... Please Add some Tasks from above</h1>}
                        {userData.map((user, index) => {
                            return <Card Id={user.id} email={user.email} Fname={user.first_name} Lname={user.last_name} Src={user.avatar} index={index} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FetchData