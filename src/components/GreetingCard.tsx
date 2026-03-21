import React from 'react';
import './GreetingCard.css';

const GreetingCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Corner decorations */}
        <div className="corner corner--tl" aria-hidden="true">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L60 0 L60 8 Q30 8 8 30 L0 30 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="8" cy="8" r="3" fill="#c9a84c"/>
            <path d="M16 0 L16 16 L0 16" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
        <div className="corner corner--tr" aria-hidden="true">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 0 L0 0 L0 8 Q30 8 52 30 L60 30 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="52" cy="8" r="3" fill="#c9a84c"/>
            <path d="M44 0 L44 16 L60 16" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
        <div className="corner corner--bl" aria-hidden="true">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 L60 60 L60 52 Q30 52 8 30 L0 30 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="8" cy="52" r="3" fill="#c9a84c"/>
            <path d="M16 60 L16 44 L0 44" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
        <div className="corner corner--br" aria-hidden="true">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 60 L0 60 L0 52 Q30 52 52 30 L60 30 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="52" cy="52" r="3" fill="#c9a84c"/>
            <path d="M44 60 L44 44 L60 44" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>

        {/* Header */}
        <div className="card-header">
          <span className="card-crescent">☽</span>
          <h1 className="card-title">Eid Mubarak</h1>
          <p className="card-subtitle">1447 H</p>
          <div className="card-divider">
            <span className="divider-star">✦</span>
            <span className="divider-line" />
            <span className="divider-star">✦</span>
            <span className="divider-line" />
            <span className="divider-star">✦</span>
          </div>
        </div>

        {/* Greeting body */}
        <div className="card-body">
          <p className="greeting-opening">
            <em>Assalamu'alaikum Warahmatullahi Wabarakatuh</em>
          </p>

          <p className="greeting-arabic">
            تَقَبَّلَ اللهُ مِنَّا وَمِنْكُم
          </p>

          <p className="greeting-text">
            Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum.
            Minal 'Aidin Wal Faizin, Mohon Maaf Lahir dan Batin.
          </p>

          <div className="card-separator" aria-hidden="true">✦ ✦ ✦</div>

          <p className="greeting-text">
            Selamat Hari Raya Idul Fitri <strong>1447 H</strong> untuk teman-teman dan segenap keluarga besar.
            Di hari yang suci ini, izinkan kami dari <strong>Team AAA</strong> memohon maaf yang
            setulus-tulusnya atas segala khilaf yang pernah kami perbuat.
          </p>

          <p className="greeting-text">
            Kami memohon maaf jika ada kalimat yang tidak berkenan, candaan yang kelewat batas,
            tindakan yang menyakiti hati, atau jika kami pernah khilaf membicarakan hal-hal yang
            tidak baik (gosip) tentang teman-teman sekalian, baik sengaja maupun tidak sengaja.
          </p>

          <p className="greeting-text">
            Semoga Allah SWT senantiasa melimpahkan keberkahan, kesehatan, dan kebahagiaan bagi kita
            semua serta keluarga di rumah. Semoga silaturahmi kita tetap terjaga dengan hati yang
            kembali bersih dan fitrah. Selamat berkumpul bersama keluarga tercinta!
          </p>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div className="card-divider">
            <span className="divider-star">✦</span>
            <span className="divider-line" />
            <span className="divider-star">✦</span>
            <span className="divider-line" />
            <span className="divider-star">✦</span>
          </div>
          <p className="greeting-closing">
            <em>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</em>
          </p>
          <p className="greeting-from">Salam hangat, <strong>Team AAA</strong></p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
