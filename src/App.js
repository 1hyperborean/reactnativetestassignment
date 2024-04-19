import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState, createContext } from 'react'
import List from './routes/List'

import { Home } from './routes/Home'

/*
  მოცემული დავალებების შესასრულებლად გეძლევათ 1-სთ.

  დავალება შედგება 2 ნაწილისგან: React და JavaScript ალგორითმები. ალგორითმების ნაწილი მოიცავს ბოუნს ამოცანას, რომელიც არ არის სავალდებულო.


  პირველი ნაწილი: React

    1. Home გვერდზე ბათონზე დაჭერით გააერთიანებთ data ფოლდერში მოცემულ Array_1-ს და Array_2-ს, მიღებული მასივი უნდა იყოს მხოლოდ უნიკალური ელემენტებისგან შემდგარი. 
    არ შეგიძლიათ გამოიყენოთ მეთოდები როგორებიცაა: filter, map, reduce და ა.შ. (ამოცანა უნდა იყოს დაწერილი for ან/და while ციკლების და if/else-ების გამოყენებით)
    2. მასივების გაერთიანების პროცესის შემდეგ უნდა გადავიდეთ List გვერდზე და დავარენდეროთ მიღებული მასივი. დარენდერებული თითოეული კომპონენტი უნდა შეიცავდეს, "name"-ს, "bodys"-ს და ასევე ფუნქციონირებად წაშლის ღილაკს. 


  მეორე ნაწილი: Javascriptis ალგორითმები

  ამოცანა 1: მოცემული გვაქვს ლუწი ოდენობის რიცხვთა მასივი, მასივში არსებულ ელემენტთა წყვილებს გავუცვალოთ ინდექსები და მიღებული მასივი დავაბრუნოთ სტირნგის სახით. 
    მაგ: [1,2,3,4,2,3] - > [2,1,4,3,3,2] -> "214332"

  ამოცანა 2: მოცემული გვაქვს ორი სტრინგი, შეგვიძლია თუ არა პირველი სტრინგის წრეზე დატრიალებით მივიღოთ მეორე სტრინგი. abc-ს წრეზე დატრიალებები. abc -> cab -> bca -> abc. მაგ: "abc", "cab" -> true
  
  ბონუს ამოცანა: მოცემული გვაქვს დადებითი რიცხვების მასივი, ფუნქციამ უნდა დააბრუნოს მაქსიმალური დადებითი სხვაობა ორ რიცხვს შორის და დადებითი სხვაობის არ არსებობის შემთხვევაში დააბურნოს 0. 
    მაგ1: [1,2,3,4,5] -> 4 მაგ2: [3,2,5,4,6,1] -> 5 

*/

export const AppContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  const [state, setState] = useState(null)
  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App