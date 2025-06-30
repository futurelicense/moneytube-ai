
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, DollarSign } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      channel: "TechTalk Daily",
      revenue: "$4,200/month",
      growth: "+340% in 60 days",
      thumbnail: "photo-1605810230434-7631ac76ec81",
      quote: "I was spending 50+ hours a week creating content. Now MoneyTuber does it all and I'm making 4x more!"
    },
    {
      name: "Marcus Rodriguez",
      channel: "Fitness Freedom",
      revenue: "$7,800/month", 
      growth: "+520% in 90 days",
      thumbnail: "photo-1486312338219-ce68d2c6f44d",
      quote: "From $200/month to almost $8K! The AI finds viral trends I never would have thought of."
    },
    {
      name: "Jennifer Kim",
      channel: "Lifestyle Luxe",
      revenue: "$12,500/month",
      growth: "+890% in 4 months", 
      thumbnail: "photo-1460925895917-afdab827c52f",
      quote: "I was ready to quit YouTube. MoneyTuber saved my channel and now it's my full-time income!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Real Results From Real Creators 🎬
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            Watch How They Transformed Their Channels Into 
            <span className="text-emerald-400 font-bold"> Money-Making Machines</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30 text-white hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${testimonial.thumbnail}?auto=format&fit=crop&w=600&h=300`}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button size="lg" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4" />
                    5.0
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.channel}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-emerald-900/30 p-3 rounded-lg text-center">
                    <DollarSign className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <p className="text-emerald-400 font-bold text-lg">{testimonial.revenue}</p>
                    <p className="text-gray-400 text-sm">Monthly Revenue</p>
                  </div>
                  <div className="bg-purple-900/30 p-3 rounded-lg text-center">
                    <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <p className="text-purple-400 font-bold text-lg">{testimonial.growth}</p>
                    <p className="text-gray-400 text-sm">Growth Rate</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 italic text-center">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-6">
            Join 400+ creators already making money with MoneyTuber
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-full font-bold"
          >
            🎬 Watch All Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
