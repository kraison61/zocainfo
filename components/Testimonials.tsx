export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: '"I was in a huge rush because of a medical emergency and Zoca Loans really saved my skin. Honestly, the zoca loans apply part was a breeze—it took me like 10 minutes tops. I got the \'thumbs up\' the same day and $5,000 hit my account the next morning. The interest isn\'t cheap, but it was way faster than a bank and better than my credit card\'s crazy fees. If you need cash fast, this is it.',
      name: 'John Martinez',
      role: 'Super fast approval and money in your pocket by the next day.',
      initial: 'J',
    },
    {
      stars: 5,
      text: 'Being a freelancer is great until you need a loan. Most banks hate that my income changes every month. But when I checked out zoca loans reviews, I saw they were more flexible. I used the zoca loans login to set up a $8,000 loan to pay off my credit cards. Everything was out in the open—no weird hidden fees. The support team was actually nice and didn\'t make me feel like just a number.',
      name: 'Sarah Johnson',
      role: 'They actually listen to freelancers and don\'t hide extra costs.',
      initial: 'S',
    },
    {
      stars: 5,
      text: 'This is my third time using them for car repairs and random house stuff. They’re super reliable. That whole \'24-hour approval\' thing? It’s totally real. I also love that I can use my zoca loans login to pay the loan off early without getting hit with a penalty fee. Their mobile site is easy to use, so I just handle everything from my phone. They\'re definitely my go-to when I\'m in a pinch.',
      name: 'Michael Chen',
      role: 'No penalties for paying early and a mobile site that actually works.',
      initial: 'M',
    },
  ]

  return (
    <section className="py-24 bg-primary-pale" id="testimonials">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
            CUSTOMER REVIEWS
          </div>
          {/* H2: Main section heading with social proof keywords */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
          Real Stories: Zoca Loans Reviews from People Like You
          </h2>
          {/* Paragraph: Social proof with statistics */}
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
          Before you jump in, it’s always smart to see what other folks have gone through. We’ve looked at a bunch of zoca loans reviews to see how they actually handle things when life gets messy. Whether it's a broken car or a surprise bill, people usually talk about how fast the zoca loans apply process is. Here’s a quick look at three real-life stories from people who used Zoca to get out of a tight spot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white border-2 shadow-lg rounded-2xl shadow-gray-200 border-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Stars */}
              <div className="mb-4 text-3xl text-accent-gold">
                {'★'.repeat(testimonial.stars)}
              </div>

              {/* Paragraph: Customer testimonial with natural language */}
              <p className="mb-6 italic leading-relaxed text-gray-700">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 text-xl font-bold rounded-full w-14 h-14 bg-primary-light text-primary">
                  {testimonial.initial}
                </div>
                <div>
                  {/* H4: Customer name */}
                  <h4 className="font-semibold text-gray-900 font-display">
                    {testimonial.name}
                  </h4>
                  {/* Paragraph: Customer details */}
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
