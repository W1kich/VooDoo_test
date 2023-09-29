const _transformData = (product) => {
	return {
		id: product.id,
		title: product.title.length >= 22 ? product.title.slice(0, 19) + '...' : product.title,
		vendor: product.vendor,
		product_type: product.product_type,
		price: product.variants.length ? product.variants[0].price !== "0.00" ? product.variants[0].price: "Sold out" : "Sold out",
		img: product.images.length ? product.images[0].src : 'https://cdn.shopify.com/s/files/1/0690/0075/7529/products/AAUvwnj0ICORVuxs41ODOvnhvedArLiSV20df7r8XBjEUQ_s900-c-k-c0x00ffffff-no-rj.jpg?v=1670516994',
		option: product.options[0].values ? product.options[0].values : "no option"
	}
}
	
	const getAllData = async (offset = 500) => {
		const res = await fetch(`https://voodoo-sandbox.myshopify.com/products.json?limit=${offset}`);

	if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
	const data = await res.json();
	return data['products'].map(_transformData);
}

export default getAllData;