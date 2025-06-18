
import React from 'react';
import { Card } from '@/components/ui/card';
import { Camera, Users, UserCheck, ImageIcon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <UserCheck className="h-8 w-8" />,
      title: "Create Your Profile",
      description: "Sign up and take a live selfie for your profile. This helps our AI recognize you in group photos."
    },
    {
      step: "02",
      icon: <Users className="h-8 w-8" />,
      title: "Join or Create Groups",
      description: "Create groups for events or join existing ones using group codes. Perfect for parties, weddings, or gatherings."
    },
    {
      step: "03",
      icon: <Camera className="h-8 w-8" />,
      title: "Capture & Upload",
      description: "Take photos during your event or upload from your device. All photos are processed by our AI system."
    },
    {
      step: "04",
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Receive Your Photos",
      description: "Get automatically sorted photos where you appear. No spam, no irrelevant content - just your memories."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How SnapVault Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and smart. Get started with SnapVault in just four easy steps 
            and never miss a photo you're in again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="bg-primary-50 rounded-lg p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </Card>

              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 glass-effect max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Photo Sharing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of users who never miss a memory with SnapVault's AI-powered photo recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button-primary">
                <Camera className="mr-2 h-5 w-5" />
                Get Started Free
              </button>
              <button className="button-secondary">
                Learn More
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
