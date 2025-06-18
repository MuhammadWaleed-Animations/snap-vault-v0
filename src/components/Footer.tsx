
import React from 'react';
import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary rounded-lg p-2">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SnapVault</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The smart way to share photos. AI-powered facial recognition ensures you never miss a memory, 
              while keeping your data private and secure.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 SnapVault. All rights reserved.
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>Built with ❤️ by Muhammad Waleed, Neha Waseem, Usman Ali, Noor Fatima</p>
          <p className="mt-2">Mentored by Haris Khalid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
