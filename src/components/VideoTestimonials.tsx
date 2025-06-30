
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, DollarSign, Eye, Clock, Award, Users } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      channel: "TechTalk Daily",
      subscribers: "847K",
      revenue: "$14,200/month",
      growth: "+1,240% in 90 days",
      thumbnail: "photo-1494790108755-2616c14d2768",
      views: "2.3M monthly views",
      quote: "MoneyTuber transformed my struggling channel into a profitable business. The AI-driven insights helped me identify content gaps I never knew existed.",
      beforeRevenue: "$200/month",
      timeToSuccess: "45 days",
      specialty: "Tech Reviews"
    },
    {
      name: "Marcus Rodriguez",
      channel: "Fitness Empire",
      subscribers: "1.2M",
      revenue: "$28,750/month", 
      growth: "+2,890% in 4 months",
      thumbnail: "photo-1507003211169-0a1dd7228f2d",
      views: "4.8M monthly views",
      quote: "From creating content in my garage to running a multi-six-figure business. The automation freed up time to focus on strategic growth.",
      beforeRevenue: "$150/month",
      timeToSuccess: "62 days",
      specialty: "Fitness Training"
    },
    {
      name: "Jennifer Kim",
      channel: "Luxury Lifestyle",
      subscribers: "2.1M",
      revenue: "$45,900/month",
      growth: "+4,200% in 6 months", 
      thumbnail: "photo-1438761681033-6461ffad8d80",
      views: "7.2M monthly views",
      quote: "The revenue optimization algorithms identified monetization opportunities I completely overlooked. It's like having a team of experts working 24/7.",
      beforeRevenue: "$89/month",
      timeToSuccess: "38 days",
      specialty: "Lifestyle Content"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-yellow-900/5"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-full">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-emerald-400 font-semibold text-lg tracking-wide uppercase">
              Verified Success Stories
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Real Creators, 
            <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}Real Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how MoneyTuber has transformed struggling channels into 
            <span className="text-emerald-400 font-semibold"> profitable businesses</span> 
            {" "}across different niches
          </p>
          
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span>2,847+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>$8.2M+ Generated</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 text-white hover:scale-[1.02] hover:border-emerald-500/50 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-sm group">
              {/* Premium Badge */}
              <div className="absolute -top-2 -right-2 z-20">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold rotate-12 shadow-lg">
                  ✓ VERIFIED
                </div>
              </div>
              
              {/* Video Thumbnail */}
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${testimonial.thumbnail}?auto=format&fit=crop&w=600&h=350`}
                  alt={`${testimonial.name} success story`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-4 shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/20"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </Button>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                    <Eye className="w-4 h-4 inline mr-1" />
                    {testimonial.views}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                {/* Creator Profile */}
                <div className="text-center border-b border-slate-700/50 pb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                  <p className="text-emerald-400 font-semibold text-lg">{testimonial.channel}</p>
                  <div className="flex justify-center items-center gap-4 mt-3 text-sm text-gray-400">
                    <span>{testimonial.subscribers} subscribers</span>
                    <span>•</span>
                    <span>{testimonial.specialty}</span>
                  </div>
                </div>

                {/* Revenue Transformation */}
                <div className="bg-gradient-to-r from-red-900/30 to-emerald-900/30 p-6 rounded-xl border border-emerald-500/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-red-300 text-sm font-medium mb-1">Before</p>
                      <p className="text-red-400 font-bold text-lg line-through opacity-75">{testimonial.beforeRevenue}</p>
                    </div>
                    <div>
                      <p className="text-emerald-300 text-sm font-medium mb-1">After</p>
                      <p className="text-emerald-400 font-black text-xl">{testimonial.revenue}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-yellow-400 font-bold text-lg">{testimonial.growth}</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700/30">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                    <p className="text-emerald-400 font-bold text-sm">{testimonial.growth.split(' ')[0]}</p>
                    <p className="text-gray-400 text-xs">Growth Rate</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700/30">
                    <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                    <p className="text-yellow-400 font-bold text-sm">{testimonial.timeToSuccess}</p>
                    <p className="text-gray-400 text-xs">To Success</p>
                  </div>
                </div>

                {/* Professional Testimonial */}
                <blockquote className="text-gray-300 leading-relaxed bg-slate-800/30 p-5 rounded-lg border-l-4 border-emerald-400/50">
                  <p className="text-base italic">"{testimonial.quote}"</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Statistics & CTA */}
        <div className="text-center mt-20 space-y-8">
          {/* Statistics Bar */}
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-8 rounded-2xl max-w-5xl mx-auto border border-slate-600/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-400 mb-2">847%</p>
                <p className="text-gray-300 font-medium">Average Revenue Increase</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-yellow-400 mb-2">48 Days</p>
                <p className="text-gray-300 font-medium">Average Time to Profit</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-blue-400 mb-2">98.7%</p>
                <p className="text-gray-300 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-2xl text-white font-bold">
              Join thousands of creators building 
              <span className="text-emerald-400"> sustainable YouTube businesses</span>
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              📺 Start Your Success Story Today
            </Button>
            
            <p className="text-gray-400 text-lg">
              ⚡ Setup in 5 minutes • 💰 First results in 24-48 hours • 🔒 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
