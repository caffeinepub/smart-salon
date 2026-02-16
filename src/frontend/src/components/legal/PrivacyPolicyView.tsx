import { CONTACT_INFO, COMPANY_INFO } from '@/content/legal';

export function PrivacyPolicyView() {
  return (
    <div className="space-y-8 py-4 text-foreground">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Last Updated: {COMPANY_INFO.lastUpdated}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          At {COMPANY_INFO.name}, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, share, and protect your data when you use our salon booking and management platform.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Account Information:</strong> Name, email address, phone number, and profile details when you create an account</li>
            <li><strong className="text-foreground">Booking Information:</strong> Appointment details, service preferences, and booking history</li>
            <li><strong className="text-foreground">Payment Information:</strong> Payment card details and transaction history (processed securely through third-party payment processors)</li>
            <li><strong className="text-foreground">Communications:</strong> Messages, reviews, and feedback you provide through our platform</li>
            <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including device information, IP address, and browsing activity</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Facilitate appointment bookings and manage your reservations</li>
            <li>Process payments and maintain transaction records</li>
            <li>Send booking confirmations, reminders, and service updates</li>
            <li>Improve and personalize your experience on our platform</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Analyze usage patterns to enhance our services</li>
            <li>Comply with legal obligations and enforce our terms of service</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Information Sharing and Disclosure</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Salon Partners:</strong> We share necessary booking and contact information with salons to fulfill your appointments</li>
            <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist with payment processing, analytics, and platform operations</li>
            <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p className="pt-2">We do not sell your personal information to third parties for marketing purposes.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed">
          We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
          resolve disputes, and enforce our agreements. When you delete your account, we will remove or anonymize your personal 
          information within a reasonable timeframe, except where retention is required by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          We implement industry-standard security measures to protect your personal information from unauthorized access, 
          disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage 
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Your Rights and Choices</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of promotional communications</li>
            <li>Request a copy of your data</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p className="pt-2">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Changes to This Privacy Policy</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
          We will notify you of any material changes by posting the updated policy on our platform and updating the 
          "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Contact Us</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50 space-y-2">
            <p>
              <strong className="text-foreground">Email:</strong>{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:text-primary/80 transition-colors">
                {CONTACT_INFO.email}
              </a>
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong>{' '}
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                {CONTACT_INFO.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
