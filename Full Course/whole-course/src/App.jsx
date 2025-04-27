import React, { useState } from 'react'
import ProfileCard from './Basic2/Challenge8/ProfileCard'
// import Greet from './Basic1/Challenge1/Componenets/Greet'
// import Header from './Basic1/Challenge2'
// import Main from './Basic1/Challenge2'
// import Footer from './Basic1/Challenge2/Header'
// import JSX from './Basic1/JSX'
// import Welcome from './Basic1/Challenge3/Welcome'
// import JsxRules from './Basic1/Challenge3/JsxRules'
// import Expression from './Basic1/Expression'
// import Greet1 from './Basic1/Challenge4/Greet1'
// import ProductInfo from './Basic1/Challenge4/ProductInfo'
// import Lists from './Basic1/Lists'
// import Userlist from './Basic1/Challenge5/Userlist'
// import Productlist from './Basic1/Challenge5/Productlist'
// import Props from './Basic1/Props'
// import Props1 from './Basic1/Props1'
// import Person from './Basic1/Challenge6/Person'
// import Product from './Basic1/Challenge6/Product'
// import Card from './Basic1/Challenge6/Card'
// import ConditionalRendering from './Basic2/ConditionalRendering'
// import Cart from './Basic2/Challenge7/Cart'
// import Weather from './Basic2/Challenge7/Weather'
// import UserStatus from './Basic2/Challenge7/UserStatus'
// import Greetings from './Basic2/Challenge7/Greetings'
// import InlineStyle from './Basic2/Styles/InlineStyle'
import StyleCard from './Basic2/Challenge8/StyleCard'
import Components from './Basic2/Challenge8/Components'
import Button from './Basic2/Events/Button'
import Copy from './Basic2/Events/Copy'
import Move from './Basic2/Events/Move'
import State1 from './Basic3/States/State1'
import State2 from './Basic3/States/State2'
import State3 from './Basic3/States/State3'
import State4 from './Basic3/States/State4'
import State44 from './Basic3/States/State44'
import State5 from './Basic3/States/State5'
import State6 from './Basic3/States/State6'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      {/* <Greet /> */}
      {/* <Header /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <JSX /> */}
      {/* <Welcome /> */}
      {/* <JsxRules /> */}
      {/* <Expression /> */}
      {/* <Greet1 /> */}
      {/* <ProductInfo /> */}
      {/* <Lists /> */}
      {/* <Userlist /> */}
      {/* <Productlist /> */}
      {/* <Props  name='Ameer Hamza' isAge={22} isMarried={false} hobbies={['coding','reading','sleeping']} img='https://facebook.com'/> */}
      {/* <Props1  name='Ameer Hamza' isAge={22} isMarried={false} hobbies={['coding','reading','sleeping']} img='https://facebook.com'/> */}
      {/* <Person  name='Ameer Hamza' age={22}/> */}
      {/* <Product name='IPhone' price={300000}/> */}
      {/* <Card>
        <h1>My Card</h1>
        <p>This is some content for card1</p>
      </Card> */}
      {/* <ConditionalRendering /> */}
      {/* <Cart /> */}
      {/* <Weather /> */}
      {/* <UserStatus loggedIn={true} isAdmin={false} /> */}
      {/* <Greetings timeofDay='morning' /> */}
      {/* <InlineStyle /> */}
      {/* /<Button /> */}
      {/* <Copy /> */}
      {/* <Move /> */}
      {/* <State1 /> */}
      {/* <State2 /> */}
      {/* <State3 /> */}
      {/* <State4 count={count} onclickhandler={()=>setCount(count+1)} />
      <State44 count={count} onclickhandler={()=>setCount(count+1)} /> */}
      {/* <State5 /> */}
      {/* <State6 /> */}
    </div>
  )
}

export default App

