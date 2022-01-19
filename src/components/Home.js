import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import Users from './Users';

const Home = () => {

  const [user, setUser] = useState({
    tittle: "", author: "", iSBN: ""
  });

  const [books, setBooks] = useState([]);
  
  let name, value;

  const addData = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }



  return (
    <>
      <div className='flex justify-center mx-14'>
        <div className='mt-10 w-full'>
          <div className='flex justify-center'>
            <h1 className='flex items-center text-5xl font-bold'><FaBookOpen /> &nbsp;MyBookList</h1>
          </div>
          <div className='flex justify-center flex-col mx-10 py-10'>
            <label for="tittle">Tittle</label>
            <input className='border-2 py-2 my-3 rounded hover:border-blue-400 ' name='tittle' type="text"
              value={user.tittle}
              onChange={addData}
            />

            <label for='Author'>Author</label>
            <input className='border-2 py-2 my-3 rounded hover:border-blue-400' name='author' type="text"
              value={user.author}
              onChange={addData}
            />

            <label for="ISBN">ISBN</label>
            <input className='border-2 py-2 my-3 rounded hover:border-blue-400' name='iSBN' type="text"
              value={user.iSBN}
              onChange={addData}
            />
          </div>
          <div className='flex justify-center bg-blue-500 hover:bg-blue-600 border-2 rounded mx-10'>
            <button className='text-xl my-3 text-white'
              onClick={() => {
                setBooks([...books, user])
                setUser({
                  tittle: "", author: "", iSBN: ""
                })
              }}>Add Book</button>
          </div>
        </div>
      </div>
      <Users books={books} />
    </>
  )
};

export default Home;
