
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-lg px-6 py-2 animate-pulse">
            🔥 LIMITED TIME - 60% OFF
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Choose Your Money-Making Plan 💰
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            Stop Wasting Money on Freelancers - Let AI Do Everything For Pennies!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 text-white relative">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-400">Starter</CardTitle>
              <p className="text-gray-400">Perfect for new creators</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-lg">$99/month</p>
                <p className="text-4xl font-bold text-white">$39</p>
                <p className="text-gray-400">/month</p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>5 AI-generated videos/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Basic monetization tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Auto thumbnail optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <X className="w-5 h-5" />
                  <span>Advanced AI features</span>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Making Money
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan - Most Popular */}
          <Card className="bg-gradient-to-br from-emerald-800 to-emerald-900 border-emerald-500 text-white relative transform scale-105">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-1">
              🚀 MOST POPULAR
            </Badge>
            <CardHeader className="text-center pt-8">
              <div className="flex justify-center mb-4">
                <Crown className="w-12 h-12 text-emerald-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-emerald-400">Pro</CardTitle>
              <p className="text-gray-300">For serious money-makers</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-lg">$199/month</p>
                <p className="text-5xl font-bold text-white">$79</p>
                <p className="text-gray-400">/month</p>
                <Badge className="mt-2 bg-green-500 text-white">
                  SAVE $1,440/YEAR
                </Badge>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>20 AI-generated videos/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Advanced monetization tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Viral trend analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Auto publishing & scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Revenue optimization AI</span>
                </div>
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold">
                🎯 Claim Your Spot Now!
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-gradient-to-br from-purple-800 to-purple-900 border-purple-500 text-white relative">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-purple-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-purple-400">Enterprise</CardTitle>
              <p className="text-gray-400">Scale to millions</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-lg">$499/month</p>
                <p className="text-4xl font-bold text-white">$199</p>
                <p className="text-gray-400">/month</p>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited AI videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Multi-channel management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Custom AI training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 phone support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>White-label dashboard</span>
                </div>
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Scale Your Empire
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                🛡️ 30-Day Money-Back Guarantee
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                If MoneyTuber doesn't help you make at least $500 in your first 30 days, 
                we'll refund every penny - <span className="text-green-400 font-bold">NO QUESTIONS ASKED!</span>
              </p>
              <div className="flex justify-center gap-8 flex-wrap text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Setup in 5 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Results in 7 Days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
