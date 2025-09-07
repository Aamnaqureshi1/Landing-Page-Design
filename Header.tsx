import { Button } from "./ui/button";
import { SignInDialog } from "./SignInDialog";

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">F</span>
          </div>
          <span className="font-medium">FitTrack</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <SignInDialog>
            <Button variant="ghost" className="hidden sm:block">
              Sign In
            </Button>
          </SignInDialog>
          <Button>
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}