import { COMPANY_INFO, CONTACT_INFO } from "@/content/legal";

export function TermsView() {
  return (
    <div className="space-y-8 py-4 text-foreground">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Last Updated: {COMPANY_INFO.lastUpdated}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to {COMPANY_INFO.name}. These Terms and Conditions govern your
          use of our salon booking and management platform. By accessing or
          using our services, you agree to be bound by these terms.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          1. Acceptance of Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          By creating an account, accessing, or using {COMPANY_INFO.name}, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms and Conditions, as well as our Privacy Policy. If you do
          not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          2. Use of Service
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            You agree to use our platform only for lawful purposes and in
            accordance with these terms. You must:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Provide accurate and complete information when creating an account
            </li>
            <li>Maintain the security of your account credentials</li>
            <li>
              Notify us immediately of any unauthorized access to your account
            </li>
            <li>Be at least 13 years of age to use our services</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
          <p className="pt-2">You may not:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use our platform for any fraudulent or illegal purpose</li>
            <li>Interfere with or disrupt the operation of our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Impersonate another person or entity</li>
            <li>
              Post or transmit harmful, offensive, or inappropriate content
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          3. Bookings and Appointments
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            When you book an appointment through our platform, you are entering
            into a direct agreement with the salon.
            {COMPANY_INFO.name} acts as an intermediary to facilitate bookings
            but is not responsible for the services provided by salons.
          </p>
          <p>
            <strong className="text-foreground">
              Cancellations and Modifications:
            </strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Cancellation policies are set by individual salons and may vary
            </li>
            <li>
              You are responsible for reviewing and complying with the salon's
              cancellation policy
            </li>
            <li>
              Late cancellations or no-shows may result in fees as determined by
              the salon
            </li>
            <li>
              We recommend canceling or modifying appointments as early as
              possible
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          4. Payments and Fees
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Payment for services is processed through our secure payment
            partners. By providing payment information, you authorize us to
            charge the applicable fees for bookings and services. All fees are
            non-refundable unless otherwise specified by the salon's
            cancellation policy.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          5. Salon Owner Responsibilities
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>If you are a salon owner using our platform, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Provide accurate information about your salon, services, and
              availability
            </li>
            <li>Honor all confirmed bookings made through the platform</li>
            <li>
              Maintain professional standards and comply with applicable
              regulations
            </li>
            <li>Respond promptly to customer inquiries and booking requests</li>
            <li>Keep your schedule and pricing information up to date</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          6. Intellectual Property
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          All content, features, and functionality of {COMPANY_INFO.name},
          including but not limited to text, graphics, logos, and software, are
          the exclusive property of {COMPANY_INFO.name} or its licensors and are
          protected by copyright, trademark, and other intellectual property
          laws. You may not copy, modify, distribute, or create derivative works
          without our express written permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          7. Disclaimers
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Our platform is provided "as is" and "as available" without
            warranties of any kind, either express or implied. We do not
            guarantee that our services will be uninterrupted, error-free, or
            secure.
          </p>
          <p>
            {COMPANY_INFO.name} is not responsible for the quality, safety, or
            legality of services provided by salons. We do not endorse or
            guarantee any salon or service listed on our platform. Your use of
            salon services is at your own risk.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          8. Limitation of Liability
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          To the maximum extent permitted by law, {COMPANY_INFO.name} and its
          affiliates, officers, directors, employees, and agents shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of our
          services, including but not limited to loss of profits, data, or
          goodwill.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          9. Indemnification
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          You agree to indemnify, defend, and hold harmless {COMPANY_INFO.name}{" "}
          from any claims, liabilities, damages, losses, and expenses arising
          out of your use of our services, violation of these terms, or
          infringement of any third-party rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          10. Changes to Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We reserve the right to modify these Terms and Conditions at any time.
          We will notify you of material changes by posting the updated terms on
          our platform and updating the "Last Updated" date. Your continued use
          of our services after such changes constitutes acceptance of the
          modified terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          11. Termination
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We reserve the right to suspend or terminate your account and access
          to our services at any time, with or without notice, for any reason,
          including violation of these terms. Upon termination, your right to
          use our services will immediately cease.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          12. Governing Law
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          These Terms and Conditions shall be governed by and construed in
          accordance with applicable laws. Any disputes arising out of or
          related to these terms shall be resolved through appropriate legal
          channels.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          13. Contact Information
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us:
          </p>
          <div className="p-4 rounded-lg bg-muted/30 border border-border/50 space-y-2">
            <p>
              <strong className="text-foreground">Email:</strong>{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </p>
            <p>
              <strong className="text-foreground">Phone:</strong>{" "}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {CONTACT_INFO.phoneFormatted}
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="pt-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground leading-relaxed">
          By using {COMPANY_INFO.name}, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions. Thank
          you for choosing our platform for your salon booking and management
          needs.
        </p>
      </div>
    </div>
  );
}
