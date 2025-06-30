
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, DollarSign, Eye, Clock } from "lucide-react";

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
      quote: "I was broke, working 80+ hours a week creating content. MoneyTuber changed my life - now I make more in a month than I used to make in a year!",
      beforeRevenue: "$200/month",
      timeToSuccess: "45 days"
    },
    {
      name: "Marcus Rodriguez",
      channel: "Fitness Empire",
      subscribers: "1.2M",
      revenue: "$28,750/month", 
      growth: "+2,890% in 4 months",
      thumbnail: "photo-1507003211169-0a1dd7228f2d",
      views: "4.8M monthly views",
      quote: "From sleeping on my friend's couch to buying my dream house! The AI finds viral content ideas I never would have discovered. This is INSANE!",
      beforeRevenue: "$150/month",
      timeToSuccess: "62 days"
    },
    {
      name: "Jennifer Kim",
      channel: "Luxury Lifestyle",
      subscribers: "2.1M",
      revenue: "$45,900/month",
      growth: "+4,200% in 6 months", 
      thumbnail: "photo-1438761681033-6461ffad8d80",
      views: "7.2M monthly views",
      quote: "I was about to give up on YouTube after 3 years of struggle. MoneyTuber saved my channel and made me a millionaire! The automation is PURE MAGIC!",
      beforeRevenue: "$89/month",
      timeToSuccess: "38 days"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-purple-900/40 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-black text-lg animate-pulse border-2 border-red-400/50">
              🎬 REAL SUCCESS STORIES - REAL PEOPLE
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            From <span className="text-red-400">BROKE</span> to 
            <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent"> MILLIONAIRE</span>
          </h2>
          
          <p className="text-3xl text-gray-300 mb-6 font-bold">
            Watch How MoneyTuber Transformed These 
            <span className="text-emerald-400"> Struggling Creators</span>
          </p>
          
          <p className="text-xl text-red-300 font-semibold animate-pulse">
            🚨 WARNING: These results may seem unbelievable, but they're 100% REAL!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 border-2 border-purple-500/50 text-white hover:scale-105 hover:border-emerald-400/70 transition-all duration-500 overflow-hidden shadow-2xl relative group">
              {/* Success Badge */}
              <div className="absolute -top-3 -right-3 z-20">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-black rotate-12 shadow-lg animate-pulse">
                  💰 SUCCESS!
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${testimonial.thumbnail}?auto=format&fit=crop&w=600&h=350`}
                  alt={`${testimonial.name} success story`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
                  <Button size="lg" variant="ghost" className="bg-red-600/90 backdrop-blur-sm hover:bg-red-500 text-white rounded-full p-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </Button>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="flex items-center gap-1 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-black backdrop-blur-sm">
                    <Star className="w-4 h-4" />
                    5.0 ⭐⭐⭐⭐⭐
                  </div>
                  <div className="bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm animate-pulse">
                    🔴 VERIFIED SUCCESS
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-emerald-600/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                    <Eye className="w-4 h-4 inline mr-1" />
                    {testimonial.views}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                {/* Creator Info */}
                <div className="text-center border-b border-purple-500/30 pb-4">
                  <h3 className="text-2xl font-black text-emerald-400 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-300 font-semibold">{testimonial.channel}</p>
                  <p className="text-purple-300 text-sm font-bold">{testimonial.subscribers} Subscribers</p>
                </div>

                {/* Before/After Stats */}
                <div className="bg-gradient-to-r from-red-900/50 to-emerald-900/50 p-4 rounded-xl border border-emerald-500/30">
                  <div className="text-center mb-3">
                    <p className="text-red-300 text-sm font-bold">BEFORE MoneyTuber:</p>
                    <p className="text-red-400 font-black text-lg line-through">{testimonial.beforeRevenue}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-300 text-sm font-bold">AFTER MoneyTuber:</p>
                    <p className="text-emerald-400 font-black text-2xl">{testimonial.revenue}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-900/40 p-4 rounded-lg text-center border border-purple-500/30">
                    <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-purple-400 font-black text-lg">{testimonial.growth}</p>
                    <p className="text-gray-400 text-xs font-semibold">Growth Rate</p>
                  </div>
                  <div className="bg-emerald-900/40 p-4 rounded-lg text-center border border-emerald-500/30">
                    <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <p className="text-emerald-400 font-black text-lg">{testimonial.timeToSuccess}</p>
                    <p className="text-gray-400 text-xs font-semibold">To Success</p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-300 italic text-center bg-slate-800/50 p-4 rounded-lg border-l-4 border-emerald-400 leading-relaxed">
                  <span className="text-emerald-400 text-2xl">"</span>
                  {testimonial.quote}
                  <span className="text-emerald-400 text-2xl">"</span>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 p-6 rounded-2xl max-w-4xl mx-auto border-2 border-red-500/50">
            <p className="text-red-200 text-2xl font-black mb-2 animate-pulse">
              🚨 THESE RESULTS ARE TYPICAL FOR MONEYTUBER USERS!
            </p>
            <p className="text-orange-300 text-xl font-bold mb-4">
              Join 2,847+ creators already making life-changing money
            </p>
            <p className="text-gray-300 text-lg">
              Average user sees <span className="text-emerald-400 font-black">847% revenue increase</span> in first 90 days
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-2xl px-16 py-8 rounded-full font-black shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            🎬 WATCH ALL SUCCESS STORIES + GET STARTED
          </Button>
          
          <p className="text-gray-400 text-lg">
            ⚡ Setup takes less than 5 minutes | 💰 First payment in 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
