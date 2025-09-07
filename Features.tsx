import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Activity, Target, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Smart Workout Tracking",
    description: "Automatically track your exercises with AI-powered recognition and get real-time feedback on your form.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set custom fitness goals and receive tailored workout plans based on your fitness level and preferences.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and insights to stay motivated and on track.",
  },
  {
    icon: Users,
    title: "Social Community",
    description: "Connect with friends, share achievements, and join challenges to make fitness more engaging and fun.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full px-6 py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Stay Fit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful features designed to help you achieve your fitness goals faster and more effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}