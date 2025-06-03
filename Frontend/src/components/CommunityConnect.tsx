
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, Award, ArrowRight, Heart, Coffee, Handshake } from "lucide-react";

export const CommunityConnect = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Connect with like-minded innovators and share ideas",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Join virtual and in-person networking events",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Get recognized for your contributions and achievements",
      color: "from-emerald-400 to-green-400"
    },
    {
      icon: Coffee,
      title: "Mentorship Matching",
      description: "Connect with experienced mentors in your field",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[80vw]">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse">
            <Heart className="w-12 h-14 mr-1" />
            Community Connect
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Join Our Thriving{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovation Community
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect, collaborate, and grow with thousands of innovators, researchers, and entrepreneurs worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center group max-w-[15vw] hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Handshake className="mr-2 w-5 h-5" />
            Join Our Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
