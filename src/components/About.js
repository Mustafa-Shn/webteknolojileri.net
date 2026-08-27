import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate">Hakkımda</h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Erciyes Üniversitesi Bilgisayar Programcılığı Bölümünden mezun olduktan sonra zorunlu askerlik hizmetimi askeri eğitimlerin yanı sıra yazıhanede bilgisayar başında tamamladım. Görevim askeri malzemeler envanter takibi, günlük askeri araç görevlendirmeleri, yazışmaların hazırlanması, raporlamalar ve diğer evrak işleriydi.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">              
              Zorunlu askerlik hizmetim sonrası ilk iş tecrübem olan küçük ölçekli bir firmada IT destek ve donanım yazılım teknik servis teknikerliği yaptım. ( Kablolama, network, bilgisayar donanım ve yazılım desteği )
            </p>  
            <p className="text-gray-700 leading-relaxed text-lg">
              Sonrasında bir bilişim firmasında yaklaşık 2 sene Front-End / Back-End programcı olarak çalıştım.
              Buradan edindiğim tecrübe ile uzun bir süre freelance olarak işimi sürdürdüm, çok sayıda web sitesi geliştirdim. Yurtiçi ve yurtdışı bir çok iş yaptım.
            </p>  
            <p className="text-gray-700 leading-relaxed text-lg">
              Daha sonra <b>Bilkent Holding</b> bünyesinde faaliyet yürüten <b>Mersin Şehir Hastanesi</b>'ndeki PPP Projesinde yaklaşık 7 sene boyunca; Kartlı Geçiş Sistemleri yönetimi, IT Teknik Destek ve Hakediş Uzmanı  olarak çalıştım.
              Kurumdaki HBYS sistemindeki proje ile ilgili dataları işleyerek ileri düzey günlük haftalık aylık raporlamalar ve hakediş raporları çıkarıyordum. Bu raporları ve dökümantasyonları hastane yönetiminin hakediş toplantısına sunuyordum.
              Bu sayede bilgi dağarcığıma kartlı geçiş sistemleri, veri analizi, ileri düzey excel, raporlama ve hakediş konularını da eklemiş oldum.
            </p>  
            <p className="text-gray-700 leading-relaxed text-lg"> 
              IT Teknik Servis, HTML, CSS, ASP, PHP ile başladığım yolculuğum,
              zamanla modern mobil-web teknolojilerine evrildi.
              Kullanıcı deneyimini ön planda tutarak, minimal, estetik, işlevsel mobil/web uygulamaları tasarlıyor ve geliştiriyorum.
            </p>           

            {/* Skills */}
            <div className="pt-6">
              {/* <h3 className="text-xl font-bold text-dark-slate mb-4">Becerilerim</h3> */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB', 'Git', 'Responsive Design', 'UI/UX'].map((skill) => (
                  <div key={skill} className="bg-light-gray px-4 py-2 rounded-lg text-center text-sm font-medium text-accent-gray">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Box */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gray to-dark-slate rounded-lg opacity-5"></div>
              <div className="absolute inset-4 border-2 border-accent-gray rounded-lg opacity-20"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent-gray opacity-10 mb-2">20+</div>
                  <p className="text-accent-gray text-sm opacity-60">Yıl Deneyim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
