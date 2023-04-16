import * as React from "react"
import cartLogo from '../images/icon-cart.svg'
export default function IndexPage() {
  return (
      <div className={'App'}>
        <div className={'card'}>
            <div className={'column-1'}>
                <div className={'image-bg bg-blend-darken'}></div>

            </div>
            <div className={'column-2'}>
                    <span className={'category montsey '}>perfume</span>
                    <h1 className={'title fraunc'}>Gabrielle Essence Eau De Parfum</h1>
                    <p className={'description montsey'}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
                <div className={'price'}>
                    <span className={'new-price fraunc'}>$149.99</span>
                    <span className={'old-price montsey'}>$169.99</span>
                </div>
                <button className={'cart-button montsey'}><img src={cartLogo} alt={'cartLogo'} /> <span>Add to Cart</span></button>
            </div>

        </div>
      </div>
  )
}

export const Head = () => <title>Product Preview</title>
