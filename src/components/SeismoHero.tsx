import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Globe, Zap, Users, AlertTriangle, TrendingUp } from "lucide-react";

const SeismoHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-background/10"></div>
      
      {/* Floating seismic waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-1 seismic-wave-bg opacity-30 animate-seismic-wave"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 seismic-wave-bg opacity-20 animate-seismic-wave" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-1 seismic-wave-bg opacity-25 animate-seismic-wave" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-medium animate-pulse-glow">
          <Activity className="mr-2 h-4 w-4" />
          Real-time Detection Active
        </Badge>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 seismic-pulse">
          <span className="bg-gradient-to-r from-primary-glow via-secondary to-accent bg-clip-text text-transparent">
            SeismoWatch
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
          The World's First Crowdsourced Earthquake Detection System
        </p>
        
        <p className="text-lg mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Leveraging real-time Twitter data to detect seismic activity before official sources. 
          Get instant alerts with verified crowd-sourced evidence and media links.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="hero-gradient border-0 text-lg px-8 py-4 shadow-seismic">
            <Globe className="mr-2 h-5 w-5" />
            View Live Dashboard
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Set Up Alerts
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15.2k</div>
            <div className="text-sm text-muted-foreground">Active Monitors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">847</div>
            <div className="text-sm text-muted-foreground">Events Detected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2.3s</div>
            <div className="text-sm text-muted-foreground">Avg. Detection Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-seismic-detection mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeismoHero;