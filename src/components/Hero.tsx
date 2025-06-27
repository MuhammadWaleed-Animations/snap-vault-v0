
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Never Miss a Photo
            <span className="block text-primary/80">You're Actually In</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in">
            SnapVault uses intelligent facial recognition to automatically deliver only the photos 
            where you appear. Join groups, upload memories, and receive your personalized collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Link to="/auth">
              <Button size="lg" className="button-primary text-lg px-8 py-4">
                Start Sharing Smart
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect p-6 rounded-2xl text-center animate-fade-in">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Smart Recognition</h3>
              <p className="text-gray-600">Advanced AI identifies you in every photo automatically</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center animate-fade-in">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Group Sharing</h3>
              <p className="text-gray-600">Create or join groups for events and gatherings</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center animate-fade-in">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Privacy First</h3>
              <p className="text-gray-600">Your photos are secure and shared only with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
