import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | KudoGrid',
  description: 'Terms and conditions for using KudoGrid.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-20 font-sans text-slate-900 bg-white min-h-screen">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-8">Last Updated: June 2026</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using KudoGrid, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the service.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">2. Description of Service</h2>
        <p className="mb-6">
          KudoGrid provides a micro-SaaS platform for collecting and embedding customer reviews. The service is provided &quot;as is&quot; and &quot;as available&quot;.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">3. User Conduct and Responsibilities</h2>
        <p className="mb-6">
          You are responsible for all activity occurring under your workspace. You must ensure that any reviews collected comply with local laws and regulations. KudoGrid reserves the right to terminate accounts that violate these terms or abuse the platform.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">4. Privacy and Data</h2>
        <p className="mb-6">
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share your information. We take reasonable measures to protect your data, including strict access controls and XSS sanitisation on user inputs.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">5. Contact Information</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at <strong>innes.urquhart4@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
