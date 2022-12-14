import React, { useEffect, useState } from 'react'
import { useProduct, ProductTypes } from 'vtex.product-context'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

import ShelfCustom from './components/ShelfCustom'

const CSS_HANDLES = ['containerShelf']

const Shelf = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [arrayProducts, setArrayProducts] = useState<ProductTypes.Product[]>([])
  const productContextValue = useProduct()

  if (!productContextValue?.product?.brand) {
    return null
  }

  const {
    product: { brand },
  } = productContextValue

  const getCategoryItems = (productBrand: string) => {
    fetch(`/api/catalog_system/pub/products/search/acct-bar/${productBrand}`)
      .then(response => response.json())
      .then(data => {
        setArrayProducts(data)
      })
  }

  // eslint-disable-next-line no-console
  console.log('ArrayProducts', arrayProducts)

  useEffect(() => {
    getCategoryItems(String(brand))
  }, [])

  return (
    <div className={`${handles.containerShelf}`}>
      {arrayProducts ? (
        <SliderLayout
          itemsPerPage={{
            desktop: 4,
            tablet: 3,
            phone: 2,
          }}
          showPaginationDots="never"
        >
          {arrayProducts.map((product: ProductTypes.Product) => (
            <ShelfCustom
              id={product.productId}
              linkURL={product.link}
              imageURL={product.items[0].images[0].imageUrl}
              name={product.productName}
              sellingPrice={
                product.items[0].sellers[0].commertialOffer.ListPrice
              }
              price={product.items[0].sellers[0].commertialOffer.Price}
            />
          ))}
        </SliderLayout>
      ) : (
        ''
      )}
    </div>
  )
}

export default Shelf
