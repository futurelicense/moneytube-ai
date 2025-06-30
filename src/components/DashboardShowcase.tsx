
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Eye, Users, Clock, BarChart3, Target, Zap } from "lucide-react";

const DashboardShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-emerald-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Your Money-Making Dashboard 📊
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            Watch Your Revenue Grow in Real-Time While AI Does All The Work
          </p>
        </div>

        {/* Main Dashboard Mockup */}
        <div className="max-w-7xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-emerald-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold">MoneyTuber Dashboard</CardTitle>
                <Badge className="bg-green-500 text-white animate-pulse">
                  🟢 AI ACTIVE
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Revenue Overview */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-3xl font-bold">$8,450</p>
                    <p className="text-emerald-100">This Month</p>
                    <p className="text-green-200 text-sm">↗ +340% vs last month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-3xl font-bold">2.4M</p>
                    <p className="text-blue-100">Total Views</p>
                    <p className="text-blue-200 text-sm">↗ +89% this week</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-3xl font-bold">145K</p>
                    <p className="text-purple-100">Subscribers</p>
                    <p className="text-purple-200 text-sm">↗ +12K this month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-3xl font-bold">94%</p>
                    <p className="text-yellow-100">AI Efficiency</p>
                    <p className="text-yellow-200 text-sm">Optimal performance</p>
                  </CardContent>
                </Card>
              </div>

              {/* AI Activity Feed */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-emerald-400 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      AI Activity Feed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-900/30 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="font-semibold">New video published: "AI Trends 2024"</p>
                        <p className="text-gray-400 text-sm">2 minutes ago • Projected: $450 revenue</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-900/30 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold">Optimized thumbnail for viral potential</p>
                        <p className="text-gray-400 text-sm">15 minutes ago • +23% CTR expected</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-900/30 rounded-lg">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-semibold">Trend analysis complete</p>
                        <p className="text-gray-400 text-sm">1 hour ago • 3 viral opportunities found</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-600">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Monetization Tracker
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg">
                        <span>Ad Revenue</span>
                        <span className="font-bold text-green-400">$3,240</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-900/30 rounded-lg">
                        <span>Sponsorships</span>
                        <span className="font-bold text-blue-400">$2,800</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                        <span>Affiliate Sales</span>
                        <span className="font-bold text-purple-400">$1,650</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-900/30 rounded-lg">
                        <span>Channel Memberships</span>
                        <span className="font-bold text-yellow-400">$760</span>
                      </div>
                      <div className="border-t border-gray-600 pt-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                          <span>Total This Month:</span>
                          <span className="text-emerald-400">$8,450</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-green-900/50 to-slate-900/50 border-green-500/30 text-white text-center">
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-green-400">Real-Time Analytics</h3>
              <p className="text-gray-300">Watch your revenue grow live as AI optimizes every aspect of your channel performance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 border-blue-500/30 text-white text-center">
            <CardContent className="p-8">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-400">24/7 Automation</h3>
              <p className="text-gray-300">Your channel works around the clock, creating content and generating income while you sleep</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30 text-white text-center">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Smart Optimization</h3>
              <p className="text-gray-300">AI continuously improves your content strategy based on performance data and trending topics</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
