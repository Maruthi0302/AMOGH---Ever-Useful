
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, TrendingUp, Sparkles, Globe, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 animate-pulse">
            <Sparkles className="w-12 h-14 mr-1" />
            AMOGH - Ever Useful Platform
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Connect{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Innovation
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Opportunity
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
            A revolutionary platform where students, businesses, PhD researchers, premium professors, and freelancers 
            collaborate to transform innovative projects into sustainable solutions. Join the future of collaborative innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in delay-300">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transform transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl" asChild>
              <Link to="/signup">
                <Rocket className="mr-2 w-5 h-5" />
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 px-8 py-3 text-lg hover:bg-gray-50 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Explore Platform
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-500">
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-3 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">25K+</div>
              <div className="text-gray-600 text-sm">Students & Researchers</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-3 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1.2K+</div>
              <div className="text-gray-600 text-sm">Active Projects</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-3 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Premium Mentors</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-3 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
              <div className="text-gray-600 text-sm">Global Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
