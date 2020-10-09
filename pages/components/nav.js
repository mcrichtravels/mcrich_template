import React from 'react'
import Link from 'next/link'

import {
	PhoneOutlined,
	ShoppingCartOutlined
} from '@ant-design/icons';

import LoginButton from './login-button/login'
import SignUp from './login-button/signup';

const Nav = () =>{
	return(
		<>	
			<nav className="main-nav">
				<div className="grid-two-columns">
					<div className="logo-container">
						<h1 className="logo-heading">
							<span>Mcrich</span>
							<span>Travels</span>
						</h1>
					</div>
			
					<div className="grid-two-columns">
						<ul id="navigation-list">
							
							<li>
								<Link href="/about">
									<a>About</a>
								</Link>
							</li>

							<li>
								<Link href="/about">
									<a>Tours</a>
								</Link>
							</li>

							<li className="icons-margin-left">
								<Link href="/blog">
									<a>
										<span className="icon-ant">
											<PhoneOutlined/>
										</span>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<a>
										<span className="icon-ant">
											<ShoppingCartOutlined />
										</span>
									</a>
								</Link>
							</li>
						</ul>

						<ul className="btn-logg">
							<li>
								<LoginButton/>
							</li>
							<li>
								<SignUp/>
							</li>
						</ul>
					</div>
					
				</div>
			</nav>	
		</>
	)
}

export default Nav;