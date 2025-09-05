import SeismoHero from "@/components/SeismoHero";
import FeatureSection from "@/components/FeatureSection";
import LiveDashboard from "@/components/LiveDashboard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeismoHero />
      <FeatureSection />
      
      {/* Live preview section */}
      <div className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Live Detection Preview</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              See SeismoWatch in action with our real-time earthquake detection dashboard showing current global activity.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="hero-gradient border-0 shadow-seismic">
                View Full Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
