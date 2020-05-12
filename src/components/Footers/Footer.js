import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
  <div className="custom-footer">
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="heading">
            <span>Mobile App</span>
          </div>
          <div className="links-container">
            <div className="my-3">
              <i className="fas fa-2x fa-mobile-alt mr-3" />
              <span className="appStore-link">
                EASY-Q App for iOS and Android
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="heading">
            <span>Destination/Region, Currency and Language</span>
          </div>
          <div className="links-container">
            <div className="my-3">
              <div className="appStore-link">Pakistan, USD $</div>
            </div>
            <div className="my-3">
              <div className="heading">
                <span>Follow us</span>
              </div>
              <div className="follow-icons d-flex mt-3">
                <i className="fab fa-instagram mr-4"></i>
                <i className="fab fa-facebook-f mr-4"></i>
                <i className="fab fa-twitter mr-4"></i>
                <i className="fab fa-snapchat-ghost mr-4"></i>
                <i className="fab fa-pinterest mr-4"></i>
                <i className="fab fa-youtube mr-4"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="heading">
            <span>Customer Service</span>
          </div>
          <div className="links-container">
            <ul>
              <Link href="/impressum/[slug]" as="/impressum/help-contact">
                <li>{'Help & Contact us'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/orders-shipping">
                <li>{'Orders & Shipping'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/payment-pricing">
                <li>{'Payment & Pricing'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/returns-refunds">
                <li>{'Returns & Refunds'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/click-collect">
                <li>{'Click & Collect'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/faq">
                <li>{'FAQs'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/terms-conditions">
                <li>{'Terms & Conditions'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/privacy-policy">
                <li>{'Privacy Policy'}</li>
              </Link>
              <Link href="/impressum/[slug]" as="/impressum/accessibility">
                <li>{'Accessibility'}</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="heading">
            <span>About EASY-Q</span>
          </div>
          <div className="links-container">
            <ul>
              <li>{'About us'}</li>
              <li>{'Investers'}</li>
              <li>{'Boutique Partners'}</li>
              <li>{'Affiliate Programme'}</li>
              <li>{'Careers'}</li>
              <li>{'Farfetch Customer Promise'}</li>
              <li>{'Mobile App'}</li>
              <li>{'Sitemap'}</li>
              <li>{'Positively'}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 baseline">
        <div>© Copyright 2019 EASY-Q UK Limited. All rights reserved.</div>
      </div>
    </div>
  </div>
)

export default Footer