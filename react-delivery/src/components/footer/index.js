import React from 'react';

import './styles.css'

import { Link } from 'react-router-dom';

import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => (
    <>
        <div className="containerFooter">
			<div className="containerFooter__row">
				<div className="containerFooter__col">
					<h3 className="containerFooter__col--title">DeviGO</h3>
					<Link className="containerFooter__col--link" to="/">Quem somos</Link>
					<Link className="containerFooter__col--link" to="/">Fale Conosco</Link>
					<Link className="containerFooter__col--link" to="/">Guia Goianinha</Link>
				</div>
				<div className="containerFooter__col">
					<h3 className="containerFooter__col--title">Descubra</h3>
					<Link className="containerFooter__col--link" to="/">Como pedir</Link>
					<Link className="containerFooter__col--link" to="/">Cadastre seu delivery</Link>
				</div>
				<div className="containerFooter__col">
					<h3 className="containerFooter__col--title">Social</h3>
		            <div className="containerFooter--social">
		                <a href=""><IoLogoFacebook className="facebook" /></a>
		                <a href=""><IoLogoInstagram className="instagram" /></a>
		            </div>
				</div>
			</div>
			<div className="containerFooter__row--2">
				<div className="containerFooter__col">
					<p className="containerFooter__col--copy">
						© Copyright 2019 - DeviGO - Todos os direitos reservados DeviGO com Agência de Restaurantes Online S.A.
						CNPJ 14.380.200/0001-21 / Goianinha, nº 25, Altos de Goianinha, Natal/RN - CEP 59173-000
					</p>
				</div>
				<div className="containerFooter__col">
					<Link to="/" className="containerFooter__col--link">Termos e condições de uso</Link>
				</div>
				<div className="containerFooter__col">
					<Link to="/" className="containerFooter__col--link">Código de conduta</Link>
				</div>

				<div className="containerFooter__col">
					<Link to="/" className="containerFooter__col--link">Privacidade</Link>
				</div>
			</div>
        </div>
    </>
);

export default Footer;