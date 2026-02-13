
import React, { useState } from 'react';
import { productCategories } from '../data/services';

const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(productCategories[0].id);

    const currentCategory = productCategories.find(cat => cat.id === activeCategory) || productCategories[0];

    return (
        <section id="products" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-secondary max-w-2xl mx-auto text-lg">
                        High-quality precision parts and engineering products for industrial applications.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {productCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                                activeCategory === category.id
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-100 text-secondary hover:bg-gray-200'
                            }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Category Description */}
                <div className="text-center mb-10">
                    <p className="text-secondary text-lg max-w-3xl mx-auto">
                        {currentCategory.description}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentCategory.products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-primary text-center">{product.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-secondary mb-4">Need custom parts or have specific requirements?</p>
                    <a href="#contact" className="btn-primary inline-block">
                        Request a Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
