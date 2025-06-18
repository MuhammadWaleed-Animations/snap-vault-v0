
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Camera, Users, Upload, Download, Settings, Share2 } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import CameraComponent from '@/components/Camera';

const GroupDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      uploadedBy: 'Alice Johnson',
      uploadedAt: '2024-01-15T10:30:00Z',
      appearsIn: true
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      uploadedBy: 'Bob Smith',
      uploadedAt: '2024-01-15T11:15:00Z',
      appearsIn: false
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      uploadedBy: 'Carol Davis',
      uploadedAt: '2024-01-15T12:00:00Z',
      appearsIn: true
    }
  ]);

  // Mock group data
  const group = {
    id: parseInt(id || '1'),
    name: 'College Reunion 2024',
    description: 'Annual college reunion with batch of 2019',
    code: 'ABC123',
    members: 23,
    photos: photos.length,
    location: 'Hotel Grand Plaza',
    eventDate: '2024-01-15',
    isOwner: true
  };

  const myPhotos = photos.filter(photo => photo.appearsIn);

  const handlePhotoCapture = (imageData: string) => {
    const newPhoto = {
      id: Date.now(),
      url: imageData,
      uploadedBy: 'You',
      uploadedAt: new Date().toISOString(),
      appearsIn: true
    };
    
    setPhotos([newPhoto, ...photos]);
    setIsCameraOpen(false);
    
    toast({
      title: "Photo Uploaded!",
      description: "Your photo has been uploaded and is being processed for facial recognition."
    });
  };

  const handleShareCode = () => {
    navigator.clipboard.writeText(group.code);
    toast({
      title: "Code Copied!",
      description: `Group code ${group.code} has been copied to clipboard.`
    });
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-primary-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-primary">{group.name}</h1>
                <p className="text-sm text-gray-600">{group.members} members • {group.photos} photos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button onClick={handleShareCode} variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Code
              </Button>
              {group.isOwner && (
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Group Info */}
        <Card className="p-6 glass-effect mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Group Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Code:</strong> {group.code}</p>
                <p><strong>Location:</strong> {group.location}</p>
                <p><strong>Date:</strong> {new Date(group.eventDate).toLocaleDateString()}</p>
                <p><strong>Description:</strong> {group.description}</p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button onClick={() => setIsCameraOpen(true)} className="button-primary">
                <Camera className="h-4 w-4 mr-2" />
                Take Photo
              </Button>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Upload from Device
              </Button>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 glass-effect text-center">
            <div className="text-2xl font-bold text-primary">{myPhotos.length}</div>
            <div className="text-sm text-gray-600">Photos of You</div>
          </Card>
          <Card className="p-4 glass-effect text-center">
            <div className="text-2xl font-bold text-primary">{photos.length}</div>
            <div className="text-sm text-gray-600">Total Photos</div>
          </Card>
          <Card className="p-4 glass-effect text-center">
            <div className="text-2xl font-bold text-primary">{group.members}</div>
            <div className="text-sm text-gray-600">Members</div>
          </Card>
          <Card className="p-4 glass-effect text-center">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-gray-600">Recognition Rate</div>
          </Card>
        </div>

        {/* Photo Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button className="flex-1 py-2 px-4 bg-primary text-white rounded-md text-sm font-medium">
              Photos of You ({myPhotos.length})
            </button>
            <button className="flex-1 py-2 px-4 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-200">
              All Photos ({photos.length})
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {myPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden glass-effect group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={photo.url}
                  alt="Group photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-600">By {photo.uploadedBy}</p>
                <p className="text-xs text-gray-500">{new Date(photo.uploadedAt).toLocaleDateString()}</p>
              </div>
            </Card>
          ))}
        </div>

        {myPhotos.length === 0 && (
          <Card className="p-8 glass-effect text-center">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Photos Yet</h3>
            <p className="text-gray-600 mb-4">
              You haven't appeared in any photos yet, or they're still being processed.
            </p>
            <Button onClick={() => setIsCameraOpen(true)} className="button-primary">
              <Camera className="h-4 w-4 mr-2" />
              Take a Photo
            </Button>
          </Card>
        )}
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

export default GroupDetails;
