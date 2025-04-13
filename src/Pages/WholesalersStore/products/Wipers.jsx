import React from 'react'
import Category from '../../../Components/Ui/Category';
import { classicWipers, ganeshWipers, miltonWipers, nationalWipers, nonBrandedWipers, novaWipers, prakashHomeLineWipers, uniqueWipers, xtraWipers } from '../../../Data/wipers';

const Wipers = () => {
  return (
    <div>
        <Category title={"Classic"} data={classicWipers} />
        <Category title={"National"} data={nationalWipers} />
        <Category title={"Unique"} data={uniqueWipers} />
        <Category title={"Milton"} data={miltonWipers} />
        <Category title={"NonBranded"} data={nonBrandedWipers} />
        <Category title={"Nova"} data={novaWipers} />
        <Category title={"Xtra"} data={xtraWipers} />
        <Category title={"Ganesh"} data={ganeshWipers} />
        <Category title={"Prakash Home Line"} data={prakashHomeLineWipers} />

        

    </div>
  )
}

export default Wipers;

