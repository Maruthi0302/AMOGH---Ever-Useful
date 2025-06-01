
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Users, Target, BookOpen, Headphones, ArrowRight, Sparkles } from "lucide-react";

export const WhatWeProvide = () => {
  const services = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security with end-to-end encryption for all your collaborations and intellectual property protection.",
      features: ["256-bit encryption", "IP protection", "Secure file sharing", "Privacy controls"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Advanced algorithms that connect you with the right people, projects, and opportunities based on your skills and interests.",
      features: ["Smart recommendations", "Skill matching", "Project suggestions", "Opportunity alerts"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Access to experienced mentors, industry experts, and thought leaders who can guide your innovation journey.",
      features: ["1-on-1 mentoring", "Group sessions", "Expert workshops", "Career guidance"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Comprehensive tools to manage your projects from ideation to execution with built-in collaboration features.",
      features: ["Task tracking", "Timeline management", "Team collaboration", "Progress monitoring"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Extensive library of courses, tutorials, and resources to help you develop new skills and stay updated.",
      features: ["Online courses", "Research papers", "Tutorial videos", "Certification programs"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support from our dedicated team to help you make the most of the platform.",
      features: ["Live chat support", "Technical assistance", "Community forums", "Help documentation"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" />
            What We Provide
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Innovation Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools, resources, and support to turn your innovative ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Target className="mr-2 w-5 h-5" />
            Explore All Features
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
