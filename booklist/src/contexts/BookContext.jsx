import React, { createContext, useState } from 'react'
import {v4 as uuid} from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
      { id: 1, title: 'Eloquent JavaScript', author: 'Marjin Haverbeke' },
      { id: 2, title: 'You Dont Know JS', author: 'Marjin Haverbeke' },
      { id: 3, title: 'হাতে কলমে জাভাস্ক্রিপ্ট', author: 'Zonayed Ahmed' },
      { id: 4, title: 'হাতে কলমে জাভাস্ক্রিপ্ট', author: 'Zonayed Ahmed' },
   ])


   const removeBook = (bookId) => {
      const newBooks = books.filter(book => book.id !== bookId)
      setBooks(newBooks)
   }
   const addBook = (title, author) => {
      const newBook = { id:uuid(), title, author }
      setBooks([...books,newBook])
   }

   return (
      <BookContext.Provider value={{books,addBook,removeBook} }>
         {props.children}
      </BookContext.Provider>
   )
}

export default BookContextProvider

