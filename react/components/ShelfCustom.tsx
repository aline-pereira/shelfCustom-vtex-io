import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { formatPrice } from '../helpers/Helpers'

const CSS_HANDLES = [
  'shelfItem',
  'shelfLink',
  'shelfImage',
  'shelfImage_img',
  'shelfProductName',
  'shelfPrice',
  'shelfSellingPrice',
  'shelfBestPrice',
  'shelfContent',
]

const ShelfCustom = ({
  id,
  linkURL,
  imageURL,
  name,
  price,
  sellingPrice,
}: ShelfType) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div key={id} className={`${handles.shelfItem}`}>
        <a href={`${linkURL}`} className={`${handles.shelfLink}`}>
          <div className={`${handles.shelfImage}`}>
            <img
              src={`${imageURL}`}
              alt={`${name}`}
              className={`${handles.shelfImage_img}`}
            />
          </div>
          <h2 className={`${handles.shelfProductName}`}>{`${name}`}</h2>
          <div className={`${handles.shelfPrice}`}>
            <p className={`${handles.shelfSellingPrice}`}>
              {formatPrice(sellingPrice)}
            </p>
            <p className={`${handles.shelfBestPrice}`}>{formatPrice(price)}</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default ShelfCustom
