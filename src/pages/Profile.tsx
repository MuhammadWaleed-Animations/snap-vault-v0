
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, ArrowLeft, User, Mail, Edit3, Save, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import CameraComponent from '@/components/Camera';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    email: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/auth');
      return;
    }
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    setFormData({
      name: parsedUser.name || '',
      bio: parsedUser.bio || '',
      email: parsedUser.email || ''
    });
    setProfileImage(parsedUser.profileImage || null);
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      ...formData,
      profileImage
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully!"
    });
  };

  const handlePhotoCapture = (imageData: string) => {
    setProfileImage(imageData);
    setIsCameraOpen(false);
    toast({
      title: "Profile Picture Updated",
      description: "Your profile picture has been updated!"
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-primary-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">My Profile</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-8 glass-effect">
          {/* Profile Picture Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center border-4 border-primary">
                  <User className="h-16 w-16 text-primary" />
                </div>
              )}
              
              <Button
                onClick={() => setIsCameraOpen(true)}
                size="sm"
                className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0 bg-primary hover:bg-primary/90"
              >
                <Camera className="h-4 w-4 text-white" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mt-2">
              Click the camera icon to update your profile picture
            </p>
          </div>

          {/* Profile Information */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              ) : (
                <p className="text-lg text-gray-900">{user.name || 'Not set'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <p className="text-lg text-gray-900">{user.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-gray-900">{user.bio || 'No bio added yet'}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-8">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="button-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user.name || '',
                      bio: user.bio || '',
                      email: user.email || ''
                    });
                  }}
                  variant="outline"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="button-primary">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-gray-600">Groups Joined</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">136</div>
              <div className="text-sm text-gray-600">Photos Received</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-gray-600">Photos Uploaded</div>
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

export default Profile;
