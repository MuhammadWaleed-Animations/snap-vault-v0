
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Smart Photo Sharing with 
            <span className="text-primary block mt-2">AI Recognition</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Never miss a photo you're in again. SnapVault uses facial recognition to automatically deliver only the photos you appear in, making group photo sharing effortless and private.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="button-primary text-lg px-8 py-4">
              <Camera className="mr-2 h-5 w-5" />
              Start Capturing
            </Button>
            <Link to="/demo">
              <Button variant="outline" className="button-secondary text-lg px-8 py-4 w-full">
                Try Camera Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm text-gray-600">Photos Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative animate-fade-in">
          <div className="relative">
            {/* Main Card */}
            <Card className="p-8 glass-effect shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary rounded-full p-3">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Group: College Reunion</h3>
                  <p className="text-sm text-gray-600">12 members • 47 photos</p>
                </div>
              </div>
              
              {/* Photo Grid Preview */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center"
                  >
                    <Camera className="h-6 w-6 text-primary-600" />
                  </div>
                ))}
              </div>
              
              <div className="bg-primary-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">You appear in 23 photos</span>
                </div>
                <p className="text-xs text-gray-600">Photos automatically sorted and delivered to your feed</p>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-2 shadow-lg animate-bounce">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-2 shadow-lg">
              <Shield className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
