import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, MapPin, Clock, ExternalLink, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface EarthquakeEvent {
  id: string;
  location: string;
  magnitude: number;
  confidence: number;
  tweetCount: number;
  timestamp: string;
  status: 'detecting' | 'confirmed' | 'false_alarm';
  topTweet: string;
  coordinates: [number, number];
}

const LiveDashboard = () => {
  const [events, setEvents] = useState<EarthquakeEvent[]>([]);
  const [isLive, setIsLive] = useState(true);

  // Mock real-time data
  useEffect(() => {
    const mockEvents: EarthquakeEvent[] = [
      {
        id: '1',
        location: 'Tokyo, Japan',
        magnitude: 5.2,
        confidence: 87,
        tweetCount: 245,
        timestamp: '2 min ago',
        status: 'confirmed',
        topTweet: 'Just felt a strong earthquake in Shibuya! Buildings are swaying... #earthquake #Tokyo',
        coordinates: [139.7, 35.7]
      },
      {
        id: '2',
        location: 'Los Angeles, CA',
        magnitude: 4.1,
        confidence: 73,
        tweetCount: 89,
        timestamp: '8 min ago',
        status: 'detecting',
        topTweet: 'Did anyone else feel that shake? My whole apartment just moved #earthquake #LA',
        coordinates: [-118.2, 34.0]
      },
      {
        id: '3',
        location: 'Istanbul, Turkey',
        magnitude: 3.8,
        confidence: 45,
        tweetCount: 23,
        timestamp: '15 min ago',
        status: 'false_alarm',
        topTweet: 'Heavy trucks passing by causing vibrations, thought it was earthquake lol',
        coordinates: [28.9, 41.0]
      }
    ];

    setEvents(mockEvents);

    // Simulate live updates
    const interval = setInterval(() => {
      setEvents(prev => prev.map(event => ({
        ...event,
        tweetCount: event.tweetCount + Math.floor(Math.random() * 10),
        confidence: Math.min(95, event.confidence + Math.random() * 2)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-seismic-detection text-white';
      case 'detecting': return 'bg-accent text-black';
      case 'false_alarm': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'detecting': return <Activity className="h-4 w-4 animate-seismic-pulse" />;
      case 'false_alarm': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Live Earthquake Detection</h2>
            <p className="text-muted-foreground">Real-time monitoring of seismic activity via social media</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge 
              className={`px-3 py-1 ${isLive ? 'bg-seismic-detection animate-pulse-glow' : 'bg-muted'}`}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${isLive ? 'bg-white' : 'bg-gray-400'}`}></div>
              {isLive ? 'LIVE' : 'PAUSED'}
            </Badge>
            <Button 
              variant="outline" 
              onClick={() => setIsLive(!isLive)}
              size="sm"
            >
              {isLive ? 'Pause' : 'Resume'} Monitoring
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <Card key={event.id} className="card-gradient border-border/50 transition-seismic hover:shadow-alert">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${getStatusColor(event.status)}`}>
                      {getStatusIcon(event.status)}
                    </div>
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {event.location}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.timestamp}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.tweetCount} tweets
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-1">
                      M{event.magnitude}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {event.confidence}% confidence
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Progress bar for confidence */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Detection Confidence</span>
                      <span>{event.confidence}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          event.confidence >= 80 ? 'bg-seismic-detection' :
                          event.confidence >= 60 ? 'bg-accent' : 'bg-primary'
                        }`}
                        style={{ width: `${event.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Top tweet */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">Top Viral Tweet:</div>
                    <p className="text-sm leading-relaxed italic">"{event.topTweet}"</p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      See All Tweets
                    </Button>
                    <Button 
                      variant={event.status === 'confirmed' ? 'default' : 'secondary'} 
                      size="sm"
                      className="flex-1"
                    >
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      {event.status === 'confirmed' ? 'Send Alert' : 'Monitor'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;