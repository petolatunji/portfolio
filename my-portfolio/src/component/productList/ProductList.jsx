import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='plTexts'>
        <h1 className='plTitle'>Create & Inspire. IT's Peter</h1>
        <p className='plDesc'>
          Peter is a creative portfolio that your work has been
          waiting,Beautiful homes,stunning portfolio styles and a whole lot more
          inside.
        </p>
      </div>
      <div className='plList'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
