
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Users, Shield, Zap, Images } from 'lucide-react';

const Features = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Dummy photo data
  const allPhotos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      title: 'Group Meeting',
      date: '2024-01-15'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      title: 'Team Collaboration',
      date: '2024-01-14'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      title: 'Evening Gathering',
      date: '2024-01-13'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      title: 'Conference Day',
      date: '2024-01-12'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      title: 'Workshop Session',
      date: '2024-01-11'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      title: 'Celebration',
      date: '2024-01-10'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Powerful Features for Smart Photo Sharing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SnapVault revolutionizes how you share and receive photos with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Live Camera</h3>
            <p className="text-gray-600">
              Capture moments instantly with our integrated camera feature
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">AI Recognition</h3>
            <p className="text-gray-600">
              Advanced facial recognition identifies you in every photo
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Group Events</h3>
            <p className="text-gray-600">
              Create and join groups for seamless photo sharing
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Privacy Control</h3>
            <p className="text-gray-600">
              Your data is encrypted and shared only with your consent
            </p>
          </Card>
        </div>

        {/* All Photos Section */}
        <div className="text-center mb-8">
          <Button 
            onClick={() => setShowAllPhotos(!showAllPhotos)}
            className="button-primary"
          >
            <Images className="h-4 w-4 mr-2" />
            {showAllPhotos ? 'Hide All Photos' : 'View All Photos'}
          </Button>
        </div>

        {showAllPhotos && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">All Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-primary text-sm">{photo.title}</h4>
                    <p className="text-xs text-gray-500">{photo.date}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* How It Works Preview */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            How SnapVault Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-primary mb-2">Join or Create</h4>
              <p className="text-gray-600 text-sm">Create a group or join one using a simple code</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-primary mb-2">Upload Photos</h4>
              <p className="text-gray-600 text-sm">Take photos or upload from your device</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-primary mb-2">Receive Matches</h4>
              <p className="text-gray-600 text-sm">Get only photos where you appear automatically</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
