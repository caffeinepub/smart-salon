import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, LayoutDashboard, Settings, Search, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';
import { LegalModal } from '@/components/legal/LegalModal';
import { ContactView } from '@/components/legal/ContactView';
import { PrivacyPolicyView } from '@/components/legal/PrivacyPolicyView';
import { TermsView } from '@/components/legal/TermsView';

type LegalModalType = 'contact' | 'privacy' | 'terms' | null;

export default function LandingPage() {
    const currentYear = new Date().getFullYear();
    const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'smart-salon';
    const [openModal, setOpenModal] = useState<LegalModalType>(null);

    const handleOpenModal = (type: LegalModalType) => {
        setOpenModal(type);
    };

    const handleCloseModal = (open: boolean) => {
        if (!open) {
            setOpenModal(null);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img 
                                src="/assets/ChatGPT Image Feb 11, 2026, 07_47_53 PM-2.png" 
                                alt="Smart Salon Logo" 
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-xl font-bold text-foreground">Smart Salon</span>
                        </div>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-xl">
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-5xl mx-auto">
                        {/* Hero Content */}
                        <div className="space-y-8 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm text-primary font-medium">Premium Salon Management</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                                Book Your Perfect Salon Experience
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                                Seamless booking and powerful management tools for customers and salon owners
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-luxury">
                                    Get Started
                                </Button>
                                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl">
                                    View Features
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-28 lg:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                            All-in-One Salon Platform
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                            Smart Salon connects customers with salons through instant booking and service discovery. Salon owners get powerful tools to manage appointments, schedules, and operations efficiently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            Powerful Features
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need in one platform
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Calendar className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground">Smart Booking</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Book appointments instantly with real-time availability
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <LayoutDashboard className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground">Owner Dashboard</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Manage appointments, customers and reports easily
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Settings className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground">Easy Management</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Track bookings, staff and performance in one place
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8 flex flex-col items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Search className="w-7 h-7 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-foreground">Service Discovery</h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        Find and explore salons with detailed service listings
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 md:py-28 lg:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Get started in three simple steps
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Search className="w-10 h-10 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-foreground">1. Discover</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Browse salons and services in your area
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Clock className="w-10 h-10 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-foreground">2. Book</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Choose your preferred time and service
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <CheckCircle className="w-10 h-10 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-foreground">3. Enjoy</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Relax and enjoy your salon experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance">
                            Ready to Transform Your Salon Experience?
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance max-w-3xl mx-auto">
                            Join thousands of satisfied customers and salon owners using Smart Salon
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-luxury">
                                Get Started Now
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
                                onClick={() => handleOpenModal('contact')}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 max-w-7xl py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
                        {/* Brand */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <span className="text-xl font-bold text-foreground">Smart Salon</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                Premium salon booking and management platform for modern businesses
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-5">
                            <h3 className="text-base font-semibold text-foreground">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button 
                                        onClick={() => handleOpenModal('contact')}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Contact Us
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => handleOpenModal('privacy')}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Privacy Policy
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => handleOpenModal('terms')}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Terms & Conditions
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="space-y-5">
                            <h3 className="text-base font-semibold text-foreground">Follow Us</h3>
                            <div className="flex gap-4">
                                <a 
                                    href="#" 
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <SiFacebook className="w-5 h-5" />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                                    aria-label="X (Twitter)"
                                >
                                    <SiX className="w-5 h-5" />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <SiInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border/40">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-muted-foreground">
                                © {currentYear} Smart Salon. All rights reserved.
                            </p>
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
                </div>
            </footer>

            {/* Legal Modals */}
            <LegalModal
                open={openModal === 'contact'}
                onOpenChange={handleCloseModal}
                title="Contact Us"
            >
                <ContactView />
            </LegalModal>

            <LegalModal
                open={openModal === 'privacy'}
                onOpenChange={handleCloseModal}
                title="Privacy Policy"
            >
                <PrivacyPolicyView />
            </LegalModal>

            <LegalModal
                open={openModal === 'terms'}
                onOpenChange={handleCloseModal}
                title="Terms & Conditions"
            >
                <TermsView />
            </LegalModal>
        </div>
    );
}
