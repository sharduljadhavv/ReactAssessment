import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';

function App() {
	return (
		<div className="p-5 bg-light">
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/details/:id"
					element={<ProductDetails />}
				/>
			</Routes>
		</div>
	);
}

export default App;
