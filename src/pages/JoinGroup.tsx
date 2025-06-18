
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, Hash } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const JoinGroup = () => {
  const [groupCode, setGroupCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock groups for demonstration
  const mockGroups = {
    'ABC123': {
      id: 3,
      name: 'Beach Party 2024',
      description: 'Annual beach party with friends',
      members: 15,
      photos: 32,
      location: 'Santa Monica Beach'
    },
    'XYZ789': {
      id: 4,
      name: 'Birthday Celebration',
      description: 'Sarah\'s 25th birthday party',
      members: 8,
      photos: 24,
      location: 'Downtown Restaurant'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const group = mockGroups[groupCode.toUpperCase() as keyof typeof mockGroups];
      
      if (group) {
        // Add user to group (in real app, this would be a backend call)
        toast({
          title: "Successfully Joined!",
          description: `You've joined "${group.name}". You'll now receive photos where you appear.`
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Invalid Code",
          description: "The group code you entered doesn't exist or has expired.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
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
            <h1 className="text-2xl font-bold text-primary">Join Group</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-8 glass-effect">
          <div className="text-center mb-8">
            <div className="bg-green-500 rounded-full p-4 w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join a Group</h2>
            <p className="text-gray-600">Enter the group code to join an existing photo sharing group</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Code *
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={groupCode}
                  onChange={(e) => setGroupCode(e.target.value.toUpperCase())}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center text-lg font-mono tracking-wider"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Ask the group creator for the 6-digit join code
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full button-primary"
              disabled={isLoading || groupCode.length !== 6}
            >
              {isLoading ? 'Joining...' : 'Join Group'}
            </Button>
          </form>

          {/* Demo Codes */}
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Demo Codes (for testing):</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-mono text-yellow-700">ABC123</span>
                <span className="text-yellow-600">Beach Party 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-yellow-700">XYZ789</span>
                <span className="text-yellow-600">Birthday Celebration</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">How it works:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>1. Get the group code from the event organizer</li>
              <li>2. Enter the code to join the group</li>
              <li>3. Your profile photo will be used for facial recognition</li>
              <li>4. You'll automatically receive photos where you appear</li>
              <li>5. Upload your own photos to share with the group</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JoinGroup;
