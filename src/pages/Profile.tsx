
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, Calendar, Star, Award, TrendingUp, BookOpen, Target } from "lucide-react";

const Profile = () => {
  const userProjects = [
    {
      title: "AI Healthcare Assistant",
      status: "Active",
      progress: 85,
      collaborators: 4,
      category: "Healthcare"
    },
    {
      title: "Sustainable Energy Monitor",
      status: "Completed",
      progress: 100,
      collaborators: 6,
      category: "Green Tech"
    },
    {
      title: "Blockchain Voting System",
      status: "In Review",
      progress: 90,
      collaborators: 3,
      category: "Blockchain"
    }
  ];

  const achievements = [
    { title: "Innovation Pioneer", description: "Led 5+ groundbreaking projects", icon: Award },
    { title: "Collaboration Master", description: "Successfully worked with 50+ team members", icon: User },
    { title: "Impact Creator", description: "Projects reached 10K+ users", icon: TrendingUp },
    { title: "Knowledge Sharer", description: "Mentored 20+ junior developers", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-purple-200/50">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32 border-4 border-purple-300 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">John Doe</h1>
              <p className="text-xl text-purple-600 mb-4">AI Researcher & Innovation Lead</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Member since 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9 Rating</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-700">AI/ML</Badge>
                <Badge className="bg-green-100 text-green-700">Sustainability</Badge>
                <Badge className="bg-purple-100 text-purple-700">Blockchain</Badge>
                <Badge className="bg-pink-100 text-pink-700">Healthcare</Badge>
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProjects.map((project, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex justify-between items-center">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-slate-600">{project.collaborators} collaborators</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">{project.progress}% Complete</span>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{achievement.title}</h3>
                        <p className="text-slate-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200/50">
              <CardContent className="p-6">
                <p className="text-slate-600">Skills section coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200/50">
              <CardContent className="p-6">
                <p className="text-slate-600">Activity feed coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Profile;
