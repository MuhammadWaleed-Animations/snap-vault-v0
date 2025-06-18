
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CameraComponent from '@/components/Camera';

const Demo = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const handlePhotoCapture = (imageData: string) => {
    setCapturedPhoto(imageData);
    setIsCameraOpen(false);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">SnapVault Demo</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Camera Section */}
          <Card className="p-8 glass-effect">
            <div className="text-center">
              <div className="bg-primary rounded-full p-4 w-fit mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Test Camera Functionality
              </h2>
              <p className="text-gray-600 mb-6">
                Try our professional camera system with live preview and capture capabilities.
              </p>
              <Button
                onClick={() => setIsCameraOpen(true)}
                className="button-primary"
              >
                <Camera className="mr-2 h-5 w-5" />
                Open Camera
              </Button>
            </div>
          </Card>

          {/* Preview Section */}
          <Card className="p-8 glass-effect">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Captured Photo
            </h2>
            {capturedPhoto ? (
              <div className="space-y-4">
                <img
                  src={capturedPhoto}
                  alt="Captured"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={() => setIsCameraOpen(true)}
                    variant="outline"
                    className="flex-1"
                  >
                    Take Another
                  </Button>
                  <Button
                    onClick={() => setCapturedPhoto(null)}
                    variant="outline"
                    className="flex-1"
                  >
                    Clear Photo
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-lg p-8 mb-4">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto" />
                </div>
                <p className="text-gray-600">
                  No photos captured yet. Use the camera to take your first photo!
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Features Info */}
        <Card className="mt-8 p-8 glass-effect">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Camera Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-3 w-fit mx-auto mb-3">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">HD Quality</h4>
              <p className="text-sm text-gray-600">High-definition photo capture with optimized compression</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mx-auto mb-3">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Front/Back Camera</h4>
              <p className="text-sm text-gray-600">Switch between front and rear cameras seamlessly</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-3 w-fit mx-auto mb-3">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Live Preview</h4>
              <p className="text-sm text-gray-600">Real-time camera preview with instant capture</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Camera Modal */}
      <CameraComponent
        isOpen={isCameraOpen}
        onCapture={handlePhotoCapture}
        onClose={() => setIsCameraOpen(false)}
      />
    </div>
  );
};

export default Demo;
