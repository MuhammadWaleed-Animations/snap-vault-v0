
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Users, Plus, Settings, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "College Reunion 2024",
      members: 23,
      photos: 47,
      date: "2024-01-15",
      isOwner: true
    },
    {
      id: 2,
      name: "Wedding Party",
      members: 12,
      photos: 89,
      date: "2024-01-10",
      isOwner: false
    }
  ]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/auth');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-primary-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">SnapVault</h1>
                <p className="text-sm text-gray-600">Welcome, {user.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link to="/create-group">
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="bg-primary rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Create Group</h3>
                  <p className="text-gray-600">Start a new photo sharing group</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/join-group">
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Join Group</h3>
                  <p className="text-gray-600">Join an existing group with code</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* My Groups */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Groups</h2>
          
          {groups.length === 0 ? (
            <Card className="p-8 glass-effect text-center">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Groups Yet</h3>
              <p className="text-gray-600 mb-4">Create your first group or join an existing one to start sharing photos!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/create-group">
                  <Button className="button-primary">Create Group</Button>
                </Link>
                <Link to="/join-group">
                  <Button variant="outline">Join Group</Button>
                </Link>
              </div>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => (
                <Link key={group.id} to={`/group/${group.id}`}>
                  <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary-100 rounded-lg p-3">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      {group.isOwner && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Owner</span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{group.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{group.members} members</p>
                      <p>{group.photos} photos</p>
                      <p>Created: {new Date(group.date).toLocaleDateString()}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <Card className="p-6 glass-effect">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                <Camera className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">New photos available in College Reunion 2024</p>
                  <p className="text-sm text-gray-600">5 new photos where you appear</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Sarah joined Wedding Party</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
