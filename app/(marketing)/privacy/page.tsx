import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | KudoGrid',
  description: 'Privacy policy and data handling for KudoGrid.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-20 font-sans text-slate-900 bg-white min-h-screen">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-8">Last Updated: June 2026</p>
        
        <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We collect information you provide directly to us, such as when you create an account, update your profile, or submit a review through our widget. This may include your name, email address, and IP address for rate-limiting purposes.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect to operate, maintain, and improve our services, communicate with you, process transactions, and prevent fraudulent or abusive activity.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">3. Data Sharing and Disclosure</h2>
        <p className="mb-6">
          We do not sell your personal information. We may share information with third-party service providers (like Supabase and Stripe) solely for the purpose of operating our service. 
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">4. Security</h2>
        <p className="mb-6">
          We implement industry-standard security measures, including strict Row Level Security (RLS) on our databases and Edge-level rate limiting, to protect your data. However, no security system is impenetrable, and we cannot guarantee the absolute security of our databases.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">5. Contact Us</h2>
        <p className="mb-6">
          For any questions or concerns regarding your privacy, please contact us at <strong>innes.urquhart4@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
