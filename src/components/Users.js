import React from 'react';

const Users = ({ books, }) => {
    
    return (
        <>
            <div>
                <div className='mx-14'>
                    <div className='flex justify-around mx-10 mt-10 text-xl text-white bg-black'>
                        <div className='py-3'>
                            <p>Tittle</p>
                        </div>
                        <div className='py-3'>
                            <p>Author</p>
                        </div>
                        <div className='py-3'>
                            <p>ISBN#</p>
                        </div>
                        <div className='py-3'>
                            <p>Actions</p>
                        </div>
                    </div>
                </div>
                {books?.map(book => {
                    return (
                        < div className='mx-14' >
                            <div className='flex justify-around mx-10 mt-10 text-xl text-black '>
                                <div className='py-3'>
                                    <p>{book.tittle}</p>
                                </div>
                                <div className='py-3'>
                                    <p>{book.author}</p>
                                </div>
                                <div className='py-3'>
                                    <p>{book.iSBN}</p>
                                </div>
                                <div className='gap-3'>
                                    <button className='mx-3'>Edit</button>
                                    <button className='mx-3'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
};

export default Users;
