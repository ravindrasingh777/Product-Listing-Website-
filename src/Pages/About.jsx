import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 h-[425px]">


      {/* About Section */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h3>
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <p className="text-gray-700 text-lg mb-6">
              Welcome to <span className="font-bold text-blue-600">MyStore</span>, your number one source for all things shopping. We are dedicated to providing you the very best of products, with an emphasis on quality, affordability, and customer service.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Founded in 2025, ShopMate has come a long way from its beginnings. When we first started out, our passion for offering the best deals drove us to start our own business.
            </p>
            <p className="text-gray-700 text-lg">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
