//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import { useState } from 'react'

//==========IMORT CSS STYLES===========
import '../../components/stylesComponents/productId/slider.css'

const SliderImgs = ({ product }) => {

  const [indexImg, setIndexImg] = useState(0)

  //==========FUNCTION BACK IN THE SLIDER===========
  const handleBack = () => {
    if (indexImg - 1 < 0) {
      setIndexImg(product?.productImgs.length - 1)
    }
    else {
      setIndexImg(indexImg - 1)
    }
  }
  //==========FUNCTION NEXT IN THE SLIDER===========
  const handleNext = () => {
    if (indexImg + 1 > product?.productImgs.length - 1) {
      setIndexImg(0)
    }
    else {
      setIndexImg(indexImg + 1)
    }
  }

  //==========RECEIVE IMAGE INDEX===========
  const handleImgSmall = index => {
    setIndexImg(index)
  }


  return (
    <div className='slider-general-container'>
      <div className='slider'>
        <button onClick={handleBack} className='slider-back'>&#60;</button>
        <div className='slider-static'>
          <div style={{ transform: `translateX(calc(-${indexImg}/3*100%))` }} className='slider-move'>
            {
              product?.productImgs.map(url => (
                <div key={url} className='slider-img-container'>
                  <img className='slider-img' src={url} alt="imgSlider" />
                </div>
              ))
            }
          </div>

        </div>
        <button onClick={handleNext} className='slider-next'>&#62;</button>
      </div>

      <div className='container-footer-slider-imgs'>
        {
          product?.productImgs.map(url => (
            <div key={url} className='imgs-small-container'>
              <img onClick={() => handleImgSmall(product?.productImgs.indexOf(url))} src={url} alt="imgSlider" />
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default SliderImgs