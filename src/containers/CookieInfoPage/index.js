import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'


import CookieInfo from '../../components/CookieInfo'

import css from './CookieInfoPage.scss'

class CookieInfoPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="cookie-page">
        <div className="cookie-info">
					<div className="content">
						<h2>Cookies</h2>
						<p>
							What Are Cookies

							As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.

							For more general information on cookies see the Wikipedia article on HTTP Cookies.

							How We Use Cookies

							We use cookies for a variety of reasons detailed below. Unfortunately is most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.

							Disabling Cookies

							You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.

							Third Party Cookies

							In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.

							This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.

							For more information on Google Analytics cookies, see the official Google Analytics page.

							From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.

							As we sell products it’s important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.

							More Information

							Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. However if you are still looking for more information then you can contact us through one of our preferred contact methods.

							Email: info@streetchange.org.uk
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default CookieInfoPage
