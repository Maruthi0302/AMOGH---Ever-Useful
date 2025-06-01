
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { SustainableSection } from "@/components/SustainableSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Globe, Recycle, Wind, TreePine, Zap, ArrowRight, Target } from "lucide-react";

const Sustainable = () => {
  const greenProjects = [
    {
      title: "Ocean Plastic Cleanup Drone",
      description: "Autonomous underwater vehicles designed to collect plastic waste from ocean surfaces and marine environments.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      impact: "500 tons plastic removed",
      category: "Ocean Conservation",
      funding: "$125,000 raised"
    },
    {
      title: "Solar-Powered Water Purification",
      description: "Portable water purification system powered entirely by solar energy for rural and disaster-affected areas.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      impact: "50,000 people served",
      category: "Clean Water",
      funding: "$89,000 raised"
    },
    {
      title: "Vertical Farming IoT System",
      description: "Smart vertical farming solution that reduces water usage by 90% and increases crop yield by 300%.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      impact: "2M liters water saved",
      category: "Sustainable Agriculture",
      funding: "$200,000 raised"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-900/30 via-emerald-900/40 to-teal-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/15 to-teal-500/10 animate-gradient-shift" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white animate-pulse border-green-400 border-2 text-xl px-8 py-3">
              <Leaf className="w-6 h-6 mr-2" />
              🌍 SUSTAINABLE INNOVATION ECOSYSTEM
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
              Building a{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                Sustainable
              </span>{" "}
              Tomorrow
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
              Join the global movement of innovators creating environmental solutions. 
              Connect with green-tech pioneers, sustainable businesses, and eco-conscious researchers 
              to build a better future for our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-xl px-10 py-5">
                <TreePine className="mr-3 w-6 h-6" />
                Explore Green Projects
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 text-xl px-10 py-5">
                <Target className="mr-3 w-6 h-6" />
                Submit Eco-Solution
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SustainableSection />
      
      {/* Featured Green Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured <span className="text-green-400">Green Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact, real solutions. See how our community is changing the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {greenProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/60 border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="relative h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">Impact:</span>
                      <span className="text-white">{project.impact}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">Funding:</span>
                      <span className="text-white">{project.funding}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Sustainable;
