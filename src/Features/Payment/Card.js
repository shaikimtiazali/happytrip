import React from 'react';
import '../../Assets/style/Card.css';

function Card({ cardNo, name, date, code }){
	return(
		<div className='Card'>
			<div className='Card__parent'>
				<p className='Card__name'>Account holder name: {name}</p><br/>
				<p className='Card__cardNo'>Card Number: {cardNo}</p><br/>
				<p className='Card__date'>Expiration date: {date}</p><br/>
				<p className='Card__code'>CVV: {code}</p><br/>
			</div>
		</div>
	);
}


export default Card;