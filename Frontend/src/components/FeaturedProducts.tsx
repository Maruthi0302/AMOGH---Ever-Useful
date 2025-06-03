
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Zap, ArrowRight, ExternalLink } from "lucide-react";

export const FeaturedProducts = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "EcoTrack - Carbon Footprint Monitor",
      description: "AI-powered sustainability tracker for businesses and individuals",
      category: "Sustainability",
      author: "MIT Research Team",
      rating: 4.9,
      users: "2.5K",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      tags: ["AI", "Sustainability", "IoT"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "QuantumMed - Drug Discovery Platform",
      description: "Revolutionary quantum computing approach to pharmaceutical research",
      category: "Healthcare",
      author: "Stanford PhD Collective",
      rating: 4.8,
      users: "1.8K",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Quantum", "Healthcare", "Research"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "AgriBot - Smart Farming Assistant",
      description: "Autonomous farming solution with predictive analytics",
      category: "Agriculture",
      author: "AgTech Innovators",
      rating: 4.7,
      users: "3.2K",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["Robotics", "Agriculture", "AI"],
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="featured" className="py-20 z-20 bg-gradient-to-br from-white-50/50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[85vw]">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-pulse">
            <Star className="w-12 h-12 mr-1" />
            Featured Innovations
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Game-Changing
            </span>{" "}
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore innovative solutions created by our talented community of students, researchers, and professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <Badge className="absolute h-6 w-30 text-sm top-4 left-4 items-center bg-white/90 text-gray-800 hover:bg-white">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs hover:scale-110 transition-transform duration-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{project.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{project.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{project.users}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 group">
                  Explore Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-1000">
          <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <TrendingUp className="mr-2 w-5 h-5" />
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
