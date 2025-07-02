import React from "react";
import { Link } from "react-router-dom";
import "./Probox.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductBoxes = () => {
    // Sample data for the products with links to navigate to
    const products = [
        { id: 1, image: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FNikah%2FPicsart_24-12-24_12-36-32-558~2-min.jpg?alt=media&token=486cb058-aab3-4b54-b749-8622630bf434", category: "Bridal", link: "/bridals" },
        { id: 2, image: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8888-min.jpg?alt=media&token=ba776140-0d53-4bbb-a4b7-23505ed7c35f", category: "Formals", link: "/formals" },
        { id: 3, image: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FSarree%2FScreenshot_20241224-125515~2.png?alt=media&token=073ee00a-812d-4bbe-ae1b-a902525f58e5", category: "Sarees", link: "/Sarree" },
        { id: 4, image: "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9069-min.jpg?alt=media&token=d772c050-f0df-46cf-b987-cb985b4287d7", category: "Shawls", link: "/Shawls" },
        // Add more products here with links
    ];

    return (
        <div className="product-boxes-container">
            {products.map((product) => (
                <div className="product-box" key={product.id}>
                    {/* Wrap the image inside the Link */}
                    <Link to={product.link}>
                        <img src={product.image} alt={product.category} className="product-image" />
                    </Link>
                    <div className="product-category">
                        {/* The button will still be clickable to navigate */}
                        <Link to={product.link}>
                            <button className="category-button" type="button">
                                {product.category}
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductBoxes;
