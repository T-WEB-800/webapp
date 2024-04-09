import '../index.css'

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-6xl mx-auto px-1">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/* Logo and text */}
                        <div>
                            <a href="#" className="flex items-center py-4 px-0">
                                <span className="font-bold text-blue-500 text-xl">TRAVELING.IO</span>
                            </a>
                        </div>
                        {/* Primary Nav Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">our technology</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">the team</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">F.A.Q</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">reviews</a>
                        </div>
                    </div>
                    {/* Secondary Nav Menu */}
                    <div className="hidden md:flex items-center space-x-3 ">
                        <a href="#" className="py-2 px-6 font-medium text-gray-500 rounded-xl hover:bg-blue-500 hover:text-white transition duration-300">Login</a>
                        <a href="#" className="py-2 px-6 font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-400 transition duration-300">Join</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;