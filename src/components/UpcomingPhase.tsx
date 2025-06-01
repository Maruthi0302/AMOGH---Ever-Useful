
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Sun, Wind, Droplets, ArrowRight, Calendar, Users, Target, Zap } from "lucide-react";

export const UpcomingPhase = () => {
  const sustainableProducts = [
    {
      title: "Smart Solar Panels",
      creator: "Community Innovators",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop",
      description: "Next-generation solar panels with 40% higher efficiency developed by our community members",
      impact: "50% Energy Cost Reduction",
      phase: "Beta Testing",
      icon: Sun,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Ocean Plastic Recycler",
      creator: "Student Collective",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop",
      description: "Revolutionary system that converts ocean plastic waste into building materials",
      impact: "1M kg Plastic Recycled",
      phase: "Pilot Program",
      icon: Recycle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vertical Wind Turbines",
      creator: "Engineers United",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
      description: "Compact wind energy solutions for urban environments designed by our engineering community",
      impact: "Clean Energy Access",
      phase: "Prototype Ready",
      icon: Wind,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Water Purifier",
      creator: "Health Innovators",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop",
      description: "AI-powered water purification system for rural communities",
      impact: "Safe Water for 10K+",
      phase: "Field Testing",
      icon: Droplets,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const phaseTimeline = [
    { phase: "Phase 1", title: "Research & Development", status: "Completed", icon: Target },
    { phase: "Phase 2", title: "Community Collaboration", status: "Current", icon: Users },
    { phase: "Phase 3", title: "Sustainable Innovation", status: "Upcoming", icon: Leaf },
    { phase: "Phase 4", title: "Global Impact", status: "Future", icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full animate-bounce" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full animate-ping" style={{animationDuration: '3s'}} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white animate-pulse">
            <Leaf className="w-3 h-3 mr-1 animate-bounce" />
            Upcoming Phase
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sustainable{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Innovation Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover groundbreaking sustainable products created by our vibrant community of innovators, 
            students, and everyday changemakers
          </p>
        </div>

        {/* Phase Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {phaseTimeline.map((item, index) => (
            <div 
              key={index} 
              className={`text-center group animate-scale-in ${item.status === 'Current' ? 'scale-110' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-500 shadow-lg ${
                item.status === 'Completed' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                item.status === 'Current' ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' :
                item.status === 'Upcoming' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                'bg-gradient-to-r from-gray-400 to-gray-500'
              } group-hover:scale-110 group-hover:rotate-12`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <Badge variant={item.status === 'Current' ? 'default' : 'outline'} className="mb-2">
                {item.phase}
              </Badge>
              <div className="text-sm font-medium text-gray-900">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.status}</div>
            </div>
          ))}
        </div>

        {/* Sustainable Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sustainableProducts.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                    {product.phase}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    by <span className="font-medium text-green-600">{product.creator}</span>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <Target className="w-3 h-3 mr-1" />
                    {product.impact}
                  </Badge>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300 hover:bg-green-50">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of the Sustainable Revolution
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators creating solutions for a better tomorrow. 
              Your idea could be the next breakthrough in sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Leaf className="mr-2 w-5 h-5" />
                Submit Your Innovation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105">
                <Calendar className="mr-2 w-5 h-5" />
                View Timeline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
