export default function Navbar(){
    return 
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center">
                <span className="text-white font-bold text-xl">Brand</span>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">About</a>
                <a href="#" className="text-white hover:text-gray-300">Services</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </div>
        </div>
        </div>

    </nav>
}