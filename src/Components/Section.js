import './Section.css'

import Card from './Card';

const Section = ()=>{
    return(
        <div className='container-xxl' id='chumma' >
           
                    
                    <Card name = "Fancy Product" price = "$40.00 - $80.00"/>
                    <Card name = "Special Item" position = "sale" dummyprice = "$20.00" price = "$18.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>
                    <Card name = "Sale Item" position = "sale" dummyprice = "$50.00"price = "$25.00"/>
                    <Card name = "Popular Item" price = "$40.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>

                    <Card name = "Sale Item" position = "sale" dummyprice = "$50.00"price = "$25.00"/>
                    <Card name = "Fancy Product" price = "$120.00 - $280.00"/>
                    <Card name = "Special Item" position = "sale" dummyprice = "$20.00" price = "$18.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>
                    <Card name = "Popular Item" price = "$40.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>

                    </div>
                  

        

       
    )
}

export default Section;