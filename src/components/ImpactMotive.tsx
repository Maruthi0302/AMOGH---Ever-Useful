
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Globe, Lightbulb, TrendingUp, Users, Zap, Leaf, Heart } from "lucide-react";

export const ImpactMotive = () => {
  const impacts = [
    {
      icon: Globe,
      title: "Global Reach",
      value: "50+",
      description: "Countries connected through our platform",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Projects",
      value: "1,200+",
      description: "Breakthrough solutions developed",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: "89%",
      description: "Projects successfully commercialized",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Members",
      value: "25K+",
      description: "Active innovators and collaborators",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const motives = [
    {
      icon: Target,
      title: "Bridging the Innovation Gap",
      description: "We connect brilliant minds with real-world opportunities, ensuring no great idea goes unnoticed.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Leaf,
      title: "Sustainable Future Focus",
      description: "Promoting eco-friendly solutions and sustainable development through collaborative innovation.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Accelerating Progress",
      description: "Fast-tracking the journey from concept to market through our comprehensive support ecosystem.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Democratizing Innovation",
      description: "Making innovation accessible to everyone, regardless of background or resources.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white animate-pulse">
            <TrendingUp className="w-3 h-3 mr-1" />
            Our Impact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transforming{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ideas into Reality
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring our success through the positive change we create in the innovation ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {impact.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{impact.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Motive Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-pulse">
            <Heart className="w-3 h-3 mr-1" />
            Our Mission
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AMOGH
            </span>{" "}
            Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by the belief that innovation should know no boundaries, we're building a world where every idea has the potential to create positive impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {motives.map((motive, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${motive.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <motive.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {motive.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{motive.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
