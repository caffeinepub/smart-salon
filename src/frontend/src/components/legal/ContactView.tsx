import { CONTACT_INFO } from "@/content/legal";
import { Mail, Phone } from "lucide-react";

export function ContactView() {
  return (
    <div className="space-y-8 py-4">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed">
          Have questions or need assistance? We're here to help! Reach out to us
          through any of the following channels:
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-lg font-semibold text-foreground">Email</h3>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-primary hover:text-primary/80 transition-colors break-all"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-sm text-muted-foreground">
              Send us an email anytime. We typically respond within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-lg font-semibold text-foreground">Phone</h3>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {CONTACT_INFO.phoneFormatted}
            </a>
            <p className="text-sm text-muted-foreground">
              Call us during business hours for immediate assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border/50">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Whether you're a customer looking to book an appointment or a salon
          owner interested in our platform, we're excited to hear from you. Our
          team is dedicated to providing the best experience possible.
        </p>
      </div>
    </div>
  );
}
