'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow p-12 mb-12">
          <h1 className="text-4xl font-bold mb-6">About ShopHub</h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to ShopHub, your ultimate destination for premium products at unbeatable prices.
            We're dedicated to providing an exceptional shopping experience with quality products,
            excellent customer service, and fast delivery.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To make quality products accessible to everyone by offering the best selection,
              competitive prices, and exceptional customer service. We believe shopping should be
              convenient, affordable, and enjoyable.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the world's most customer-centric online marketplace where people can find
              and discover anything they want to buy online. We aim to be the trusted partner for
              all your shopping needs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Only best products' },
              { title: 'Integrity', desc: 'Honest & transparent' },
              { title: 'Innovation', desc: 'Always improving' },
              { title: 'Customer Focus', desc: 'Your satisfaction matters' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '10K+', label: 'Products' },
            { number: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-lg shadow p-8 text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
