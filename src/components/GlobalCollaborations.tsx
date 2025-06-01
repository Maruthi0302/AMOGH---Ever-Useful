
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Building2, GraduationCap, Users, ArrowRight, ExternalLink, Star } from "lucide-react";

export const GlobalCollaborations = () => {
  const collaborations = [
    {
      name: "Microsoft",
      type: "Technology Partner",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      description: "Leading cloud infrastructure and AI platform collaboration for scalable innovation solutions",
      projects: 78,
      country: "Global",
      color: "from-blue-500 to-cyan-500",
      established: "2019"
    },
    {
      name: "Stanford University",
      type: "Academic Partner",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      description: "Pioneering AI and quantum research collaborations with world-class researchers",
      projects: 45,
      country: "USA",
      color: "from-red-500 to-orange-500",
      established: "2018"
    },
    {
      name: "Cambridge University",
      type: "Research Partner",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
      description: "Biotechnology and sustainable development research initiatives",
      projects: 32,
      country: "UK",
      color: "from-green-500 to-emerald-500",
      established: "2020"
    },
    {
      name: "Toyota Innovation",
      type: "Industry Partner",
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
      description: "Revolutionary mobility solutions and automotive technology innovation",
      projects: 28,
      country: "Japan",
      color: "from-purple-500 to-pink-500",
      established: "2021"
    },
    {
      name: "IIT Bombay",
      type: "Academic Partner",
      logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop",
      description: "Engineering excellence and startup incubation programs",
      projects: 56,
      country: "India",
      color: "from-yellow-500 to-orange-500",
      established: "2017"
    },
    {
      name: "UN Sustainability",
      type: "Global Initiative",
      logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      description: "Sustainable development goals alignment and global impact projects",
      projects: 89,
      country: "Global",
      color: "from-teal-500 to-blue-500",
      established: "2016"
    }
  ];

  const stats = [
    { label: "Partner Universities", value: "150+", icon: GraduationCap },
    { label: "Corporate Partners", value: "200+", icon: Building2 },
    { label: "Countries", value: "50+", icon: Globe },
    { label: "Active Collaborations", value: "500+", icon: Users }
  ];

  return (
    <section id="collaborations" className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-bounce" style={{animationDuration: '3s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white animate-pulse">
            <Globe className="w-3 h-3 mr-1" />
            Global Network
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building tomorrow's innovations through strategic partnerships with world-leading institutions and companies
          </p>
        </div>

        {/* Stats with enhanced animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Collaborations Grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {collaborations.map((partner, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-white/80">
                    Est. {partner.established}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <Badge variant="outline" className="text-xs mb-2">
                      {partner.type}
                    </Badge>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Globe className="w-3 h-3 mr-1" />
                      {partner.country}
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    <span className="font-semibold text-blue-600">{partner.projects}</span> Active Projects
                  </span>
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-300 hover:bg-blue-50">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Globe className="mr-2 w-5 h-5" />
            Join Our Global Network
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};
