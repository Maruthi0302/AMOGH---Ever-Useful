
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rocket, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-200 to-gray-300 text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">ProjectBridge</span>
            </div>
            <p className="text-slate-600 max-w-sm">
              Connecting innovative students with forward-thinking businesses to create the next generation of successful startups.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-500 p-2 hover:bg-blue-50">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-600 p-2 hover:bg-blue-50">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700 p-2 hover:bg-slate-100">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-pink-500 p-2 hover:bg-pink-50">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">For Students</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Submit Project</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Find Mentors</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Startup Resources</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* For Businesses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">For Businesses</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-purple-500 transition-colors">Browse Projects</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Talent Pipeline</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Innovation Hub</a></li>
              <li><a href="#" className="hover:text-purple-500 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Contact Us</h3>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>hello@projectbridge.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 text-sm">
            © 2024 ProjectBridge. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
