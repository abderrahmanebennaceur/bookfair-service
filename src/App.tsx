import { BookOpen, Send, Search, Package, Users, MapPin, Calendar, Clock, Star, Facebook, Instagram, MessageCircle, Send as TelegramIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-amber-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الكتاب يصل إليك...
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-amber-100">
              من معرض الجزائر الدولي للكتاب مباشرة
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-amber-50 leading-relaxed">
              لا تستطيع حضور المعرض؟ نحن نوفر لك الكتب التي تحتاجها من معرض الجزائر الدولي للكتاب وتوصيلها إلى باب منزلك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg">
                اطلب كتابك الآن
              </a>
              <a href="#how-it-works" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-900 transition-all">
                كيف يعمل؟
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">من أنا؟</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-2xl">
                    <BookOpen className="w-32 h-32 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <Star className="w-8 h-8 text-amber-600 fill-amber-600" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-6 text-right">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  مرحباً بكم! أنا عاشق للكتب والقراءة، وأحضر معرض الجزائر الدولي للكتاب منذ سنوات طويلة. خلال هذه السنوات، لاحظت أن الكثير من الأصدقاء والمعارف لا يستطيعون حضور المعرض بسبب ظروف العمل أو المسافة أو الوقت.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  من هنا جاءت فكرة هذه الخدمة - أن أكون جسراً بينك وبين الكتب التي تحتاجها. أتجول في المعرض، أبحث عن الكتب المطلوبة، وأوصلها إليك أينما كنت في الجزائر العاصمة وضواحيها.
                </p>
                <div className="flex flex-wrap gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-700">+500</div>
                    <div className="text-gray-600 mt-2">كتاب تم توصيله</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-700">5+</div>
                    <div className="text-gray-600 mt-2">سنوات من الخبرة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-amber-900">كيف تعمل الخدمة؟</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">أربع خطوات بسيطة للحصول على كتابك</p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Send className="w-10 h-10" />,
                number: "1",
                title: "أرسل طلبك",
                description: "أرسل لنا اسم الكتاب والمؤلف ودار النشر عبر وسائل التواصل الاجتماعي"
              },
              {
                icon: <Search className="w-10 h-10" />,
                number: "2",
                title: "نبحث عن الكتاب",
                description: "نتجول في المعرض ونبحث عن الكتاب المطلوب في جميع الأجنحة"
              },
              {
                icon: <Package className="w-10 h-10" />,
                number: "3",
                title: "التأكيد والدفع",
                description: "نرسل لك صورة الكتاب والسعر، وبعد موافقتك نشتريه"
              },
              {
                icon: <Send className="w-10 h-10" />,
                number: "4",
                title: "التوصيل",
                description: "نوصل الكتاب إلى عنوانك في الجزائر العاصمة وضواحيها"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 h-full border-t-4 border-amber-600">
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-amber-700 mb-4 mt-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-amber-900">التسعير الشفاف</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">لا توجد رسوم خفية - كل شيء واضح</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">سعر الكتاب</h3>
                    <p className="text-gray-600">السعر الرسمي للكتاب من المعرض (بدون أي زيادة)</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-3xl text-amber-700 font-bold">+</div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">رسوم الخدمة</h3>
                    <p className="text-gray-600 mb-2">تختلف حسب عدد الكتب والجهد المبذول في البحث</p>
                    <p className="text-amber-700 font-semibold">50 - 300 دج للكتاب الواحد</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-3xl text-amber-700 font-bold">+</div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">التوصيل</h3>
                    <p className="text-gray-600 mb-2">يعتمد على المنطقة والمسافة</p>
                    <p className="text-amber-700 font-semibold">200 - 500 دج</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-amber-800 text-white rounded-xl text-center">
                <p className="text-lg mb-2">مثال: كتاب بسعر 1000 دج</p>
                <p className="text-3xl font-bold">المجموع: 1000 + 150 + 300 = 1450 دج</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا الآن</h2>
            <p className="text-xl md:text-2xl mb-12 text-amber-50">اختر وسيلة التواصل المفضلة لديك واطلب كتابك اليوم</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-8 hover:bg-amber-50 transition-all transform hover:scale-110 shadow-xl group">
                <Facebook className="w-16 h-16 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800">فيسبوك</p>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-8 hover:bg-amber-50 transition-all transform hover:scale-110 shadow-xl group">
                <Instagram className="w-16 h-16 mx-auto mb-4 text-pink-600 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800">انستغرام</p>
              </a>

              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-8 hover:bg-amber-50 transition-all transform hover:scale-110 shadow-xl group">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800">واتساب</p>
              </a>

              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-8 hover:bg-amber-50 transition-all transform hover:scale-110 shadow-xl group">
                <TelegramIcon className="w-16 h-16 mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800">تيليجرام</p>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-right">
              <h3 className="text-2xl font-bold mb-4">نصائح للطلب السريع:</h3>
              <ul className="space-y-3 text-amber-50">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>اذكر اسم الكتاب بالكامل والمؤلف</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>أضف دار النشر إن كانت معروفة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>حدد عنوان التوصيل بدقة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>كن متاحاً للرد على الاستفسارات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">معلومات مهمة</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg border-r-4 border-amber-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">مهلة الطلبات</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                يمكنك طلب الكتب طوال فترة انعقاد المعرض. يُفضل إرسال الطلب قبل نهاية المعرض بيومين على الأقل لضمان توفر الوقت الكافي للبحث والشراء.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg border-r-4 border-amber-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">مناطق التوصيل</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                نوصل إلى جميع أنحاء الجزائر العاصمة وضواحيها: بئر مراد رايس، الدار البيضاء، باب الزوار، حسين داي، القبة، برج الكيفان، وغيرها من الأحياء.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg border-r-4 border-amber-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">مدة التوصيل</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                عادة ما يتم التوصيل في نفس يوم الشراء أو في اليوم التالي، حسب توفر الكتاب وموقعك الجغرافي. سنبقيك على اطلاع دائم بحالة طلبك.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg border-r-4 border-amber-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">حالة الكتب</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                جميع الكتب التي نوصلها جديدة تماماً ومباشرة من المعرض. نحرص على حزمها بشكل آمن لضمان وصولها إليك في حالة ممتازة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-amber-900">آراء العملاء</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">ماذا يقول من استخدموا خدماتنا</p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد بن علي",
                text: "خدمة ممتازة! وفرت علي الوقت والجهد. حصلت على الكتب التي أحتاجها دون الحاجة للذهاب إلى المعرض. شكراً جزيلاً!"
              },
              {
                name: "فاطمة الزهراء",
                text: "أنصح الجميع بهذه الخدمة. الأخ محترف جداً، بحث عن كل الكتب التي طلبتها ووصلها في الوقت المحدد. أسعار معقولة وخدمة صادقة."
              },
              {
                name: "محمد سعيد",
                text: "استخدمت الخدمة للمرة الثالثة هذا العام. دائماً راضي عن الاحترافية والأمانة. الكتب تصل في حالة ممتازة والأسعار شفافة تماماً."
              },
              {
                name: "سارة قاسم",
                text: "كنت أريد كتاباً نادراً من ناشر معين، ورغم الصعوبة وجده! خدمة رائعة وتواصل ممتاز طوال الوقت."
              },
              {
                name: "ياسين حمزة",
                text: "أسكن بعيداً عن المعرض وكان من المستحيل أن أذهب. هذه الخدمة كانت الحل الأمثل. شكراً على المجهود والاهتمام."
              },
              {
                name: "نور الهدى",
                text: "خدمة احترافية من البداية للنهاية. أرسل صور الكتب قبل الشراء، يأكد السعر، ويوصل في الوقت. ممتازة!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">عميل راضٍ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-amber-700" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">معرض الجزائر الدولي للكتاب</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              يُعد معرض الجزائر الدولي للكتاب من أكبر وأهم المعارض الثقافية في العالم العربي والمغرب العربي. يحضره مئات الناشرين من مختلف أنحاء العالم، ويوفر فرصة فريدة للحصول على آخر الإصدارات والكتب النادرة بأسعار مناسبة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="text-5xl font-bold text-amber-700 mb-2">1000+</div>
                <p className="text-gray-700 font-semibold">ناشر ودار نشر</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="text-5xl font-bold text-amber-700 mb-2">40+</div>
                <p className="text-gray-700 font-semibold">دولة مشاركة</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="text-5xl font-bold text-amber-700 mb-2">2M+</div>
                <p className="text-gray-700 font-semibold">زائر سنوياً</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900">الأسئلة الشائعة</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "هل تضمنون توفر الكتاب المطلوب؟",
                answer: "نبذل قصارى جهدنا للبحث عن الكتاب في جميع الأجنحة، ولكن لا يمكن الضمان بنسبة 100% حيث يعتمد ذلك على توفر الكتاب في المعرض. سنعلمك فوراً إذا لم نجد الكتاب."
              },
              {
                question: "كيف يتم الدفع؟",
                answer: "يتم الدفع عند استلام الكتاب. نرسل لك صورة الكتاب والسعر النهائي قبل الشراء، وبعد موافقتك نشتريه ونوصله إليك، وتدفع عند الاستلام."
              },
              {
                question: "هل يمكن إلغاء الطلب؟",
                answer: "نعم، يمكنك إلغاء الطلب في أي وقت قبل أن نشتري الكتاب. بعد الشراء، لا يمكن الإلغاء إلا في حالات استثنائية."
              },
              {
                question: "ماذا لو كان الكتاب غير متوفر بالسعر المتوقع؟",
                answer: "إذا كان سعر الكتاب مختلفاً عن المتوقع، سنرسل لك السعر الفعلي وصورة الكتاب قبل الشراء. لن نشتري أي كتاب بدون موافقتك على السعر النهائي."
              },
              {
                question: "هل توصلون خارج الجزائر العاصمة؟",
                answer: "حالياً نوصل فقط داخل الجزائر العاصمة وضواحيها. قد نتوسع لمناطق أخرى في المستقبل حسب الطلب."
              },
              {
                question: "كم يستغرق البحث عن الكتاب؟",
                answer: "عادة ما نجد الكتاب ونرسل لك صورته في نفس اليوم أو اليوم التالي، حسب ازدحام المعرض وصعوبة البحث."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-4 text-amber-900 flex items-start gap-3">
                  <span className="text-amber-600 flex-shrink-0">س:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed pr-8">
                  <span className="text-amber-600 font-bold ml-2">ج:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">جاهز للحصول على كتابك؟</h2>
            <p className="text-xl md:text-2xl mb-12 text-amber-50">
              لا تفوت فرصة الحصول على الكتب التي تحتاجها من معرض الجزائر الدولي للكتاب
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                تواصل عبر واتساب
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Facebook className="w-6 h-6" />
                تواصل عبر فيسبوك
              </a>
            </div>
            <p className="text-amber-100 text-lg">
              نحن هنا لخدمتك من البداية حتى استلام كتابك 📚
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-950 to-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <h3 className="text-2xl font-bold mb-4">خدمة توصيل الكتب من معرض الجزائر الدولي</h3>
            <p className="text-amber-200 mb-6">نجلب لك المعرفة إلى باب منزلك</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                <MessageCircle className="w-8 h-8" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                <TelegramIcon className="w-8 h-8" />
              </a>
            </div>
            <div className="border-t border-amber-800 pt-6">
              <p className="text-amber-300">© 2025 جميع الحقوق محفوظة | خدمة توصيل الكتب من معرض الجزائر</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
