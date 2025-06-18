
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, Calendar, MapPin, Save } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const CreateGroup = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    eventDate: '',
    location: '',
    isPrivate: true
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random group code
    const groupCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // Mock group creation - in real app, this would connect to FastAPI backend
    const newGroup = {
      id: Date.now(),
      ...formData,
      code: groupCode,
      members: 1,
      photos: 0,
      createdAt: new Date().toISOString(),
      isOwner: true
    };

    // Store in localStorage (in real app, this would be in your database)
    const existingGroups =JSON.parse(localStorage.getItem('userGroups') || '[]');
    localStorage.setItem('userGroups', JSON.stringify([...existingGroups, newGroup]));

    toast({
      title: "Group Created!",
      description: `Your group "${formData.name}" has been created. Group code: ${groupCode}`
    });

    navigate('/dashboard');
  };

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
            <h1 className="text-2xl font-bold text-primary">Create New Group</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-8 glass-effect">
          <div className="text-center mb-8">
            <div className="bg-primary rounded-full p-4 w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Group</h2>
            <p className="text-gray-600">Set up a new photo sharing group for your event</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., College Reunion 2024"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell people what this group is about..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Event location"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Settings</h3>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isPrivate"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="isPrivate" className="text-sm text-gray-700">
                  Make this group private (members can only join with invite code)
                </label>
              </div>
            </div>

            <Button type="submit" className="w-full button-primary">
              <Save className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Your group will be created with a unique join code</li>
              <li>• You can share the code with friends to let them join</li>
              <li>• Members can start uploading photos immediately</li>
              <li>• AI will automatically sort photos based on who appears in them</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateGroup;
