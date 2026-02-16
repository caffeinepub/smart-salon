import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Coins, LayoutDashboard, Settings, Search, Clock, Gift, Sparkles } from 'lucide-react';

export default function LandingPage() {
    const currentYear = new Date().getFullYear();
    const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'smart-salon';

    const screenshots = [
        '/assets/screenshots/media-01.jpg',
        '/assets/screenshots/media-02.jpg',
        '/assets/screenshots/media-03.jpg',
        '/assets/screenshots/media-04.jpg',
        '/assets/screenshots/media-05.jpg',
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="text-center space-y-8">
                        <div className="flex justify-center mb-6">
                            <img 
                                src="/assets/generated/smart-salon-icon.dim_512x512.png" 
                                alt="Smart Salon" 
                                className="w-24 h-24 md:w-32 md:h-32"
                            />
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Premium Salon Experience</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                            Book Your Salon<br />Appointments Anytime
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Easy booking, rewards, and complete salon management in one app
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-luxury">
                                Get Started
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl">
                                View Features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            All in One Salon Booking App
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Smart Salon is a modern and easy to use app designed for both customers and salon owners. It allows users to book appointments quickly, explore services, and manage their time efficiently. Salon owners can handle bookings, schedules, and customer details in one place, making daily operations smooth and organized. With a simple and user friendly interface, Smart Salon helps improve the overall salon experience for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Powerful Features
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need in one app
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ gap: '2.5rem' }}>
                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Calendar className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-foreground">Smart Booking</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Book appointments instantly with real time availability
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <LayoutDashboard className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-foreground">Owner Dashboard</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Manage appointments, customers and reports easily
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Settings className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-foreground">Easy Management</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Track bookings, staff and performance in one place
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-foreground">User Friendly</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Simple interface designed for everyone to use easily
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Simple Steps
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ gap: '2.5rem' }}>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Search className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                                    Step 1
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">Search Salon</h3>
                                <p className="text-base text-muted-foreground">
                                    Find nearby salons and services easily
                                </p>
                            </div>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                                    Step 2
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">Book Appointment</h3>
                                <p className="text-base text-muted-foreground">
                                    Select time and confirm your booking instantly
                                </p>
                            </div>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Gift className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                                    Step 3
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground">Enjoy Service</h3>
                                <p className="text-base text-muted-foreground">
                                    Visit the salon and enjoy your experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
                            Built for Customers and Owners
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gap: '2.5rem' }}>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground">Easy and fast booking</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground">Save time and effort</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground">Explore services easily</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground">Manage your salon efficiently</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Screens Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            See How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            A simple and powerful interface
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8" style={{ gap: '2.5rem' }}>
                        {screenshots.map((screenshot, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="w-full max-w-[240px] aspect-[9/19] bg-gradient-to-br from-card to-muted/20 rounded-3xl border-2 border-border/50 shadow-luxury overflow-hidden">
                                    <img 
                                        src={screenshot} 
                                        alt={`Smart Salon App Screen ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border/50">
                <div className="container mx-auto px-6 max-w-[80%]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-muted-foreground">
                                © {currentYear} Smart Salon. All rights reserved
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a 
                                href="https://raw.githubusercontent.com/Qudsiya-khan-dot/smart-salon-privacy-policy/refs/heads/main/README.md" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            Built with love using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
