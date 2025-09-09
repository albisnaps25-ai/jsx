import React, { useState } from 'react';

const App = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  const openSubscribeModal = () => {
    setShowSubscribeModal(true);
  };

  const closeSubscribeModal = () => {
    setShowSubscribeModal(false);
  };

  return (
    <div className="min-h-screen bg-[#00aff0]">
      {/* Header */}
      <header className="bg-white border-b-4 border-[#00aff0]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#00aff0] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <h1 className="text-2xl font-bold text-[#00aff0] tracking-tight">OnlyFans</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-[#00aff0] font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#00aff0] font-medium transition-colors">Messages</a>
            <a href="#" className="text-gray-800 hover:text-[#00aff0] font-medium transition-colors">Likes</a>
          </nav>
          <button 
            onClick={openSubscribeModal}
            className="bg-[#00aff0] hover:bg-[#018cf1] text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Subscribe
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#00aff0] to-[#018cf1] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="https://placehold.co/400x500/ff6b9d/ffffff?text=Creator+Photo" 
                  alt="Creator" 
                  className={`w-full rounded-lg shadow-2xl transition-all duration-500 ${isBlurred ? 'blur-sm' : ''}`}
                />
                {isBlurred && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <button 
                      onClick={toggleBlur}
                      className="bg-white text-[#00aff0] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Subscribe to View
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to My World</h2>
              <p className="text-xl text-white mb-6 opacity-90">Exclusive content just for my subscribers. Join now to unlock everything!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={openSubscribeModal}
                  className="bg-white text-[#00aff0] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
                >
                  Subscribe Now - $9.99/month
                </button>
                <button 
                  onClick={toggleBlur}
                  className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#00aff0] transition-colors text-lg"
                >
                  Preview Content
                </button>
              </div>
              <div className="flex justify-center md:justify-start mt-8 space-x-6">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">1.2M</div>
                  <div className="text-white opacity-80">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">542</div>
                  <div className="text-white opacity-80">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">24/7</div>
                  <div className="text-white opacity-80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Preview My Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group">
                <img 
                  src={`https://placehold.co/400x400/f97316/ffffff?text=Preview+${item}`} 
                  alt={`Preview ${item}`} 
                  className={`w-full h-64 object-cover rounded-lg transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}
                />
                {isBlurred && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={openSubscribeModal}
                      className="bg-[#00aff0] text-white font-bold py-2 px-4 rounded-full hover:bg-[#018cf1] transition-colors"
                    >
                      Subscribe to Unlock
                    </button>
                  </div>
                )}
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-gray-600">Preview {item}</span>
                  <span className="text-[#00aff0] font-bold">${item * 2}.99</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={openSubscribeModal}
              className="bg-[#00aff0] hover:bg-[#018cf1] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Get Full Access Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Subscribe?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#00aff0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Exclusive Content</h4>
              <p className="text-gray-600">Get access to photos and videos you won't find anywhere else.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#00aff0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Direct Messages</h4>
              <p className="text-gray-600">Chat with me directly and get personalized responses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#00aff0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Daily Updates</h4>
              <p className="text-gray-600">New content posted daily to keep you entertained.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What Subscribers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Best subscription I've ever had! The content is amazing and she responds quickly to messages." },
              { name: "Mike T.", text: "Worth every penny! The exclusive content is top quality and she's so engaging with her subscribers." },
              { name: "Jessica L.", text: "I've been subscribed for 6 months and I'm never disappointed. New content every day!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00aff0] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00aff0]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Join?</h3>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Subscribe now to unlock exclusive content, direct messages, and daily updates!</p>
          <button 
            onClick={openSubscribeModal}
            className="bg-white text-[#00aff0] font-bold text-xl py-4 px-12 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Subscribe for $9.99/month
          </button>
          <p className="text-white mt-4 text-sm">Cancel anytime • 7-day free trial available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#00aff0] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <h4 className="text-xl font-bold">OnlyFans</h4>
              </div>
              <p className="text-gray-400 max-w-md">Exclusive content for subscribers only. Join now to unlock everything!</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Legal</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Connect</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 OnlyFans Creator. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Subscribe Now</h3>
              <button 
                onClick={closeSubscribeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Get unlimited access to all exclusive content</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Monthly Subscription</span>
                  <span className="text-2xl font-bold text-[#00aff0]">$9.99</span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unlimited access to all photos & videos
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Direct messaging with creator
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Daily content updates
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  7-day free trial available
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={closeSubscribeModal}
                className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsBlurred(false);
                  closeSubscribeModal();
                }}
                className="flex-1 bg-[#00aff0] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#018cf1] transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;