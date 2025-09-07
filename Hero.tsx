import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Track Your Fitness Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Transform your health with personalized workout plans, nutrition tracking, and real-time progress insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-bold text-2xl">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">4.8</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">1M+</div>
                <div className="text-sm text-muted-foreground">Workouts Tracked</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzIzMTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="FitTrack Mobile App Interface"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}