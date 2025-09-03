import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Twitter, 
  Brain, 
  Zap, 
  Globe, 
  Bell, 
  Shield, 
  BarChart3, 
  Clock,
  Users,
  MapPin
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Twitter className="h-8 w-8 text-seismic-wave" />,
      title: "Real-Time Twitter Monitoring",
      description: "Continuously scans millions of tweets for earthquake-related keywords across 50+ languages with advanced NLP filtering.",
      badge: "Live Stream",
      gradient: "from-seismic-wave/10 to-seismic-wave/5"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Detection",
      description: "Machine learning algorithms analyze tweet patterns, user credibility, and location clustering to identify genuine seismic events.",
      badge: "ML Powered",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Sub-Minute Alerts",
      description: "Detect earthquakes in under 60 seconds - often faster than official seismic networks through crowdsourced reporting.",
      badge: "Ultra Fast",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Global Coverage",
      description: "Monitor seismic activity worldwide with location-based filtering and regional alert preferences.",
      badge: "Worldwide",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Bell className="h-8 w-8 text-seismic-detection" />,
      title: "Multi-Channel Alerts",
      description: "Receive instant notifications via SMS, email, or push notifications with relevant tweet evidence and media links.",
      badge: "Instant",
      gradient: "from-seismic-detection/10 to-seismic-detection/5"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Authenticity Scoring",
      description: "Advanced filtering system prevents false alarms by analyzing tweet volume, user verification, and cross-source validation.",
      badge: "Verified",
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  const stats = [
    { icon: <BarChart3 className="h-5 w-5" />, label: "Detection Accuracy", value: "94.2%" },
    { icon: <Clock className="h-5 w-5" />, label: "Avg Response Time", value: "47s" },
    { icon: <Users className="h-5 w-5" />, label: "Active Users", value: "15.2k" },
    { icon: <MapPin className="h-5 w-5" />, label: "Monitored Regions", value: "195" }
  ];

  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Advanced Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">SeismoWatch</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining social media intelligence with seismic science for unprecedented earthquake detection speed and accuracy.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-gradient border-border/50 text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`card-gradient border-border/50 transition-seismic hover:shadow-alert group relative overflow-hidden`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-muted/30 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical details */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto card-gradient border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">The Science Behind SeismoWatch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our proprietary algorithm analyzes real-time social media patterns, combining natural language processing, 
                geospatial analysis, and crowd behavior modeling to identify seismic events with unprecedented speed and accuracy.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-primary mb-2">Data Sources</div>
                  <div className="text-muted-foreground">Twitter API v2, Location services, User verification status</div>
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-2">AI Models</div>
                  <div className="text-muted-foreground">NLP classification, Spatial clustering, Temporal analysis</div>
                </div>
                <div>
                  <div className="font-semibold text-accent mb-2">Validation</div>
                  <div className="text-muted-foreground">USGS integration, Cross-source verification, False positive filtering</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;