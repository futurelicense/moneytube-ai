import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, DollarSign, Users, Clock, Star, Play, Eye, BarChart3 } from "lucide-react";
import VideoTestimonials from "@/components/VideoTestimonials";
import DashboardShowcase from "@/components/DashboardShowcase";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-yellow-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-yellow-600/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500 to-yellow-500 text-white border-0 text-lg px-6 py-2 animate-pulse">
            🚀 EARLY ACCESS - LIMITED TIME
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
              MoneyTuber
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Turn Your YouTube Channel Into a 
            <span className="text-emerald-400"> Money-Making Machine</span>
            <br />
            While You Sleep! 💰
          </h2>

          {/* Intro Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-black/70 to-slate-900/70 border-emerald-500/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-emerald-600/20 to-yellow-600/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 text-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full p-8 mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-12 h-12" />
                    </Button>
                    <p className="text-white text-xl font-bold mb-2">
                      🎬 Watch How MoneyTuber Works Its Magic
                    </p>
                    <p className="text-gray-300 text-lg">
                      See Real Results in Just 3 Minutes!
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      🔴 LIVE DEMO
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop wasting time and thousands of dollars! Our AI creates viral content, 
            optimizes for monetization, and automates your entire YouTube workflow. 
            <span className="text-emerald-400 font-semibold">Get to $1,000+/month faster than ever.</span>
          </p>

          {/* Countdown Timer */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-red-400 font-bold text-lg mb-4">⚡ EARLY ACCESS ENDS IN:</p>
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-b from-emerald-500 to-emerald-700 text-white text-2xl font-bold rounded-lg p-3 min-w-[60px]">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-gray-400 text-sm mt-1 capitalize">{unit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-xl px-12 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              🎯 CLAIM YOUR SPOT - $39 (60% OFF!)
            </Button>
            <p className="text-gray-400">
              <span className="line-through">$99/month</span> → 
              <span className="text-emerald-400 font-bold text-xl ml-2">$39/month</span>
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>472 Users Already Joined</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>$2.3M+ Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>24/7 Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-red-900/20 to-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12">
            STOP Losing Money Every Day! 😤
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-red-900/30 border-red-500/50 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold mb-4">Wasting 40+ Hours/Week</h3>
                <p className="text-gray-300">Creating content manually while your competition automates and scales</p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-900/30 border-red-500/50 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">💸</div>
                <h3 className="text-2xl font-bold mb-4">Spending $1,000+ Monthly</h3>
                <p className="text-gray-300">On freelancers, editors and tools that deliver inconsistent results</p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-900/30 border-red-500/50 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">📉</div>
                <h3 className="text-2xl font-bold mb-4">Missing Monetization</h3>
                <p className="text-gray-300">Your channel could be making money RIGHT NOW but you're stuck in content creation hell</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-900/20 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              The Solution is HERE! 🎯
            </h2>
            <p className="text-2xl text-emerald-400 font-bold mb-4">
              MoneyTuber's AI Does Everything For You
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">AI Content Generation</h3>
                <p className="text-gray-300">Creates viral-ready scripts, thumbnails, and full videos based on trending topics in your niche</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Auto-Optimization</h3>
                <p className="text-gray-300">AI monitors performance and automatically adjusts content strategy for maximum monetization</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Revenue Tracking</h3>
                <p className="text-gray-300">Real-time dashboard shows your earnings, growth metrics, and optimization opportunities</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Auto Publishing</h3>
                <p className="text-gray-300">Schedules and publishes content at optimal times for your audience engagement</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Trend Analysis</h3>
                <p className="text-gray-300">AI identifies viral trends before your competitors and creates content to capitalize instantly</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 border-emerald-500/30 text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">24/7 Automation</h3>
                <p className="text-gray-300">Your channel works around the clock, generating content and income while you focus on scaling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <DashboardShowcase />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-yellow-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Don't Let This Opportunity Slip Away! 🚨
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join the 472 smart creators who are already automating their way to YouTube success. 
            <span className="font-bold">Only 28 spots left at this price!</span>
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 text-2xl px-16 py-8 rounded-full font-black shadow-2xl transform hover:scale-110 transition-all duration-200 mb-4"
          >
            🎯 START YOUR MONEY MACHINE NOW - $39!
          </Button>
          
          <p className="text-white text-lg">
            ✅ 30-Day Money-Back Guarantee | ✅ Cancel Anytime | ✅ Setup in Under 5 Minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
