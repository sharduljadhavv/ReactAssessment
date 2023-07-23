import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';


export default function Products() {
	return (
		<>
			<div className="row mb-2">
				<h2>Iconnect Ecommerce</h2>
			</div>
			<div className="row align-items-stretch">
				{products.map((product) => {
					return (
						<>
							<div class="product-wrapper col-xl-3 col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-2">
								<div className="text-center p-2 shadow border bg-white w-100 cursor-hand h-100 rounded-2 focus-ring">
									<img
										className="bg-transparent"
										src={product.image}
										alt={product.title}
										style={{
											width: 250,
											height: 300,
											objectFit: 'contain',
										}}
									></img>
									<Link
										to={`/details/${product.id}`}
										className="text-black"
									>
										<h5 className="py-2 text-underline">
											{product.title}
										</h5>
									</Link>
									<div>Price ${product.price}</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}
