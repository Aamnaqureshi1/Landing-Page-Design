import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-background border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="font-medium">FitTrack</span>
            </div>
            <p className="text-muted-foreground">
              Empowering your fitness journey with smart technology and personalized insights.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Updates
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 FitTrack. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}