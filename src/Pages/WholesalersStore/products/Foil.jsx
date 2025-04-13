import React from 'react'
import { aluminiumFoil } from '../../../Data/foil'
import Category from '../../../Components/Ui/Category'

const Foil = () => {
  return (
    <div>
      <Category title={"Aluminium Foil"} data={aluminiumFoil} />
    </div>
  )
}

export default Foil
