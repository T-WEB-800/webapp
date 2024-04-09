const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white mt-8">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg uppercase font-bold text-blue-500">TRAVELING.IO</h3>
              <p className="text-sm">Explore the best places around the world.</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
              <h3 className="text-lg uppercase font-bold">Links</h3>
              <ul>
                <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                <li><a href="#" className="text-sm hover:underline">Destinations</a></li>
                <li><a href="#" className="text-sm hover:underline">Travel Guides</a></li>
                <li><a href="#" className="text-sm hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h3 className="text-lg uppercase font-bold">Follow Us</h3>
              <div className="flex items-center justify-center md:justify-end">
                {/* Social icons would go here */}
                <a href="#" className="text-xl mr-2 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-xl mr-2 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-xl mr-2 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-4">
            © {new Date().getFullYear()} Travelio. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  