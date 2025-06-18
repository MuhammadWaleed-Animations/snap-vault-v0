
import React from 'react';
import { Card } from '@/components/ui/card';
import { Camera, Users, Shield, Zap, UserCheck, ImageIcon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Smart Camera Integration",
      description: "Seamlessly capture photos with our advanced camera system. Live selfie capture for profile setup with no gallery uploads allowed."
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "AI Face Recognition",
      description: "Advanced facial recognition technology automatically identifies and matches faces to deliver personalized photo collections."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Management",
      description: "Create and join groups effortlessly. Organize events and share memories with the right people at the right time."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your photos are private by default. Only receive photos you appear in, with encrypted face data and secure storage."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Delivery",
      description: "Real-time photo processing and delivery. Get your photos automatically sorted and delivered within seconds."
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Smart Sorting",
      description: "Never lose a memory again. Our AI ensures you get all photos where you appear, automatically organized by events."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SnapVault?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of photo sharing with AI-powered recognition, 
            seamless group management, and privacy-first design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-primary rounded-lg p-3 w-fit mb-6 group-hover:scale-110 transition-transform">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
