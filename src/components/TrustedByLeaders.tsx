
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Star, Quote, ArrowRight, Crown } from "lucide-react";

export const TrustedByLeaders = () => {
  const leaders = [
    {
      name: "Dr. Sarah Chen",
      position: "Former Director of Innovation, Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "AMOGH is revolutionizing how we approach collaborative innovation. Their platform has enabled breakthrough solutions.",
      company: "Google",
      rating: 5
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Dean of Engineering, MIT",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The quality of research and innovation happening on AMOGH is unprecedented. It's the future of academic collaboration.",
      company: "MIT",
      rating: 5
    },
    {
      name: "Lisa Johnson",
      position: "Chief Technology Officer, Tesla",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      quote: "AMOGH's sustainable innovation focus aligns perfectly with our mission. We've found amazing talent here.",
      company: "Tesla",
      rating: 5
    },
    {
      name: "Dr. Raj Patel",
      position: "Head of AI Research, Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The AI-powered matching system on AMOGH has connected us with brilliant minds we never would have found otherwise.",
      company: "Microsoft",
      rating: 5
    }
  ];

  const trustMetrics = [
    { label: "Industry Leaders", value: "500+", icon: Crown },
    { label: "Fortune 500 Companies", value: "50+", icon: Award },
    { label: "University Partnerships", value: "150+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-pulse">
            <Crown className="w-3 h-3 mr-1" />
            Trusted by Leaders
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Endorsed by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Industry Pioneers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading innovators and industry experts trust AMOGH to drive their most ambitious projects forward
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-gray-600 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Leaders Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{leader.position}</p>
                    <Badge variant="outline" className="text-xs">
                      {leader.company}
                    </Badge>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(leader.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{leader.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Award className="mr-2 w-5 h-5" />
            Join Trusted Leaders
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
