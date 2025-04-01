import React from 'react'
import Card from "../../Components/Ui/Card"
import Category from '../../Components/Ui/Category'
import { Link } from 'react-router-dom'


const WholesalersStore = () => {
  const cards= [
    {
      image:"https://imgur.com/pZTtbq4.png",
      heading:"Hanger",
      btn: "View More",
    
    }
    
  ]
  return (
    <>
      <div className='p-20'>
        <Card image={"https://imgur.com/pZTtbq4.png"} heading={"Hangers"} para={"To explore click on the explore more"} btn= {"explore more"} path = "/products/Wholesalers-store/Hangers">

        </Card>
      </div>
    </>
  )
}

export default WholesalersStore
