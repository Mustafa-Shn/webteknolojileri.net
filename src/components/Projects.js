import React from 'react';

export default function Projects() {
  const projects = [
       {
      id: 1,
      title: 'Bir Android Mobil Renk Algılama ve Analiz Asistanı',
      description: 'Tasarım süreçlerinde doğru rengi bulmak bazen en zorlayıcı kısımdır. Bu uygulama, bu süreci dijitalleştiren ve profesyonelleştiren bir araçtır. Karmaşık renk teorilerini basit bir dokunuşa indirgeyen bu uygulama; kameradan gelen canlı görüntüyü veya galerideki bir fotoğrafı teknik bir veri setine dönüştürür. Özellikle oluşturduğu görsel rapor ve PDF paylaşım özelliği ile tasarımcıların iş akışını hızlandırmayı hedefler.',
      tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'Image Decoder API','Android Graphics and Color Analysis'],
      image: '/images/ColorAnalyzer_App1.png',
      //link: '#',
    },    
     {
      id: 2,
      title: 'Minimal ve Kullanımı Kolay Bir Android Mobil Reminder Uygulaması',
      description: 'Bu uygulama; Kotlin dili ve Jetpack Compose (Material 3) kullanılarak geliştirilmiş, SQLite tabanlı bir hatırlatıcı (Reminder) uygulamasıdır. Arka planda AlarmManager ve BroadcastReceiver yapıları ile zamanlanmış görevleri yönetir ve kullanıcılara tema seçenekleri sunar.',
      tech: ['Kotlin', 'Jetpack Compose', 'SQLite', 'AlarmManager', 'BroadcastReceiver'],
      image: '/images/Reminder_App1.png',
      //link: '#',      
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate mb-4">Bazı Projelerim</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Son zamanlarda çalıştığım ve tamamladığım projeler. Her biri modern tasarım ve teknik uzmanlığın birleşimi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-accent-gray to-dark-slate group-hover:opacity-95 transition duration-300">
                <img
                  src={project.image || 'https://placehold.co/600x400?text=Project'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-dark-slate">{project.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent-gray text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      className="inline-block text-dark-slate font-semibold hover:text-accent-gray transition duration-300 group-hover:translate-x-1"
                    >
                      Projeyi Görüntüle →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
