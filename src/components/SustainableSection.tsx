
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Globe, Recycle, Wind, ArrowRight, TreePine, Zap, Heart } from "lucide-react";

export const SustainableSection = () => {
  const sustainableFeatures = [
    {
      icon: Leaf,
      title: "Green Innovation",
      description: "Supporting projects that prioritize environmental sustainability and ecological responsibility.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Promoting solutions that reduce waste and create sustainable business models.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Wind,
      title: "Clean Energy",
      description: "Advancing renewable energy projects and carbon-neutral technologies.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: TreePine,
      title: "Conservation Tech",
      description: "Developing technology solutions for environmental conservation and protection.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const impactStats = [
    { value: "2.5M", label: "CO2 Reduced (tons)", icon: Globe },
    { value: "450+", label: "Green Projects", icon: Leaf },
    { value: "89%", label: "Sustainability Rate", icon: Recycle },
    { value: "150+", label: "Eco Partnerships", icon: Heart }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden border-y-4 border-emerald-200">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-bounce opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 via-green-100/60 to-teal-100/50 animate-gradient-shift" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white animate-pulse border-emerald-300 border-2 text-lg px-6 py-2">
            <Leaf className="w-5 h-5 mr-2" />
            🌱 SUSTAINABLE INNOVATION HUB
          </Badge>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6">
            Building a{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent animate-pulse">
              Greener Future
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join the sustainability revolution. Connect with eco-conscious innovators, green businesses, 
            and environmental researchers to create solutions that protect our planet while driving economic growth.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-200 hover:border-emerald-300 transition-all duration-500 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sustainableFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 border-emerald-200 bg-white/90 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-1000">
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg px-8 py-4">
            <Zap className="mr-2 w-6 h-6" />
            Start Green Innovation
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
